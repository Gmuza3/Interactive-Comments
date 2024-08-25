import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Reply, RootObject } from "../Static/types";
import { useQuery } from "@tanstack/react-query";

export type PostTypes = {
  addPosts: (text: string, id: number) => void;
  removePost: (index: number, content: string) => void;
  post: RootObject;
  isLoading: boolean;
  increase: (id: number, condition: string) => void;
  decrease: (id: number, condition: string) => void;
  updatePost: (
    text: string,
    id: number,
    replyId: number,
    content: string
  ) => void;
  comment: string[];
  addInInnerReply: (text: string, id: number) => void;
};

const PostContext = createContext<PostTypes | null>(null);

const PostContextPrvoider = ({ children }: PropsWithChildren) => {
  const [postState, setPostState] = useState<RootObject | null>(null);
  const [comment, setComment] = useState<Array<string>>([]);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/data");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  };

  const {
    data: post,
    isLoading,
    error,
  } = useQuery<RootObject>({
    queryKey: ["posts"],
    queryFn: getData,
  });

  useEffect(() => {
    if (post) {
      setPostState(post);
    }
  }, [post]);

  // useEffect(() =>{
  //   if(postState){
  //     localStorage.setItem('postState',JSON.stringify(postState));
  //   }
  // },[postState])
  console.log(postState);
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>...loading</div>;
  }

  if (!postState || !postState.comments) {
    return <div>No data available</div>;
  }
  function increase(id: number, condition: string) {
    if (condition === "comments") {
      if (!postState) return;
      const increaseScore = postState?.comments.map((item) => {
        if (item.id === id) {
          return { ...item, score: item.score + 1 };
        }
        return item;
      });
      setPostState({ ...postState, comments: increaseScore });
    } else if (condition === "reply") {
      if (!postState) return;
      const increaseScore = postState.comments.map((item) => {
        if (item.replies) {
          const updatedReplies = item.replies.map((reply) => {
            if (reply.id === id) {
              return { ...reply, score: reply.score + 1 };
            }
            return reply;
          });
          return { ...item, replies: updatedReplies };
        }
        return item;
      });
      setPostState({ ...postState, comments: increaseScore });
    } else if (condition === "innerReply") {
      if (!postState) return;
      const increaseScore = postState.comments.map((item) => {
        if (item.replies) {
          const updatedReplies = item.innerReplies.map((reply) => {
            if (reply.id === id) {
              return { ...reply, score: reply.score + 1 };
            }
            return reply;
          });
          return { ...item, innerReplies: updatedReplies };
        }
        return item;
      });
      setPostState({ ...postState, comments: increaseScore });
    }
  }
  function decrease(id: number, condition: string) {
    if (!postState) return;

    let updatedComments = [...postState.comments];

    if (condition === "comments") {
      updatedComments = updatedComments.map((item) => {
        if (item.id === id) {
          return { ...item, score: item.score > 0 ? item.score - 1 : 0 };
        }
        return item;
      });
    } else if (condition === "reply") {
      updatedComments = updatedComments.map((comment) => {
        if (comment.replies) {
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === id) {
              return { ...reply, score: reply.score > 0 ? reply.score - 1 : 0 };
            }
            return reply;
          });
          return { ...comment, replies: updatedReplies };
        }
        return comment;
      });
    } else if (condition === "innerReply") {
      updatedComments = updatedComments.map((comment) => {
        if (comment.innerReplies) {
          const updatedInnerReplies = comment.innerReplies.map((reply) => {
            if (reply.id === id) {
              return { ...reply, score: reply.score > 0 ? reply.score - 1 : 0 };
            }
            return reply;
          });
          return { ...comment, innerReplies: updatedInnerReplies };
        }
        return comment;
      });
    }
    setPostState({ ...postState, comments: updatedComments });
  }
  function timeAgo(targetDate: string | Date): string {
    const now = new Date();
    const target = new Date(targetDate);

    if (isNaN(target.getTime())) {
      throw new Error('Invalid date');
    }
  
    const diffInMilliseconds = now.getTime() - target.getTime();
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
  
    if (diffInDays > 1) {
      return `${diffInDays} days ago`;
    } else if (diffInDays === 1) {
      return `1 day ago`;
    } else if (diffInHours > 1) {
      return `${diffInHours} hours ago`;
    } else if (diffInHours === 1) {
      return `1 hour ago`;
    } else if (diffInMinutes > 1) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInMinutes === 1) {
      return `1 minute ago`;
    } else {
      return `Just now`;
    }
  }

  const addPosts = (text: string, id: number) => {
    if (!postState) return;
    setComment((prev) => [...prev, text]);
    const now =new Date()
    const createdAt = timeAgo(now)
    const updatedComments = postState.comments.map((item) => {
      if (item.id === id) {
        const newReply: Reply = {
          id: Date.now(),
          content: text,
          createdAt: createdAt,
          score: 0,
          replyingTo: "",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "",
            },
            username: "juliusomo",
          },
        };
        if (newReply.content !== "") {
          const updatedReplies = [...item.replies, newReply];
          return { ...item, replies: updatedReplies };
        }
      }
      return item;
    });

    setPostState({ ...postState, comments: updatedComments });
  };
  const removePost = function (index: number, content: string) {
    const removeComment = postState.comments.map((item) => {
      const deleteReply = item.replies.filter((item) => item.id !== index);
      const deleteInnerReply = item.innerReplies.filter(
        (item) => item.id !== index
      );
      if (content === "reply") {
        return { ...item, replies: deleteReply };
      } else {
        return { ...item, innerReplies: deleteInnerReply };
      }
    });

    setPostState({ ...postState, comments: removeComment });
  };
  const updatePost = (
    text: string,
    commentId: number,
    replyId: number,
    content: string
  ) => {
    if (!postState) return;
    const updatedComments = postState.comments.map((comment) => {
      if (comment.id === commentId) {
        if (content === "reply") {
          return {
            ...comment,
            replies: comment.replies.map((reply) => {
              if (reply.id === replyId) {
                return { ...reply, content: text };
              }
              return reply;
            }),
          };
        } else {
          return {
            ...comment,
            innerReplies: comment.innerReplies.map((reply) => {
              if (reply.id === replyId) {
                return { ...reply, content: text };
              }
              return reply;
            }),
          };
        }
      }
      return comment;
    });

    setPostState({ ...postState, comments: updatedComments });
  };
  const addInInnerReply = (text: string, id: number) => {
    if (!postState) return;
    const now =new Date()
    const createdAt = timeAgo(now)
    const updatedComments = postState.comments.map((comment) => {
      if (comment.id === id) {
        const newReply: Reply = {
          id: Date.now(),
          content: text,
          createdAt: createdAt,
          score: 0,
          replyingTo: "",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "",
            },
            username: "juliusomo",
          },
        };

        const updatedReplies = Array.isArray(comment.innerReplies)
          ? [...comment.innerReplies, newReply]
          : [newReply];
        return { ...comment, innerReplies: updatedReplies };
      }
      return comment;
    });
    setPostState({ ...postState, comments: updatedComments });
  };

  return (
    <PostContext.Provider
      value={{
        addPosts,
        removePost,
        post: postState,
        isLoading,
        increase,
        decrease,
        updatePost,
        comment,
        addInInnerReply,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);

export default PostContextPrvoider;
