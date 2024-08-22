import { createContext,PropsWithChildren,useContext, useEffect, useState } from "react";
import { Reply, RootObject } from "../Static/types";
import { useQuery } from "@tanstack/react-query";

export type PostTypes ={
    addPosts : (text:string,id:number) => void;
    removePost:(index:number) => void;
    post:RootObject ;
    isLoading:boolean;
    increase:(id:number,condition:string) => void;
    decrease:(id:number,condition:string) => void
}

const PostContext = createContext<PostTypes | null>(null);

const PostContextPrvoider = ({ children }: PropsWithChildren) => {
    const [postState, setPostState] = useState<RootObject | null>(null);
    const getData = async () => {
      const res = await fetch("http://localhost:3000/data");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data;
    };
  
    const { data: post, isLoading, error } = useQuery<RootObject>({
      queryKey: ['posts'],
      queryFn: getData,
    });

    useEffect(() =>{
        if(post){
            setPostState(post)
        }
    },[post])
    
    console.log(postState)
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
        } else if (condition === 'reply') {
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
        }
    }
    
    function decrease(id:number,condition:string){
        if(condition==="comments"){
            if(!postState) return;
            const decreaseScore = postState?.comments.map((item) =>{
                if(item.id === id){
                    return {...item,score:item.score>0? item.score- 1 : item.score = 0 }
                }
                return item
            })
            setPostState({...postState, comments:decreaseScore})
        }
        else if(condition==="reply"){
            if(!postState) return;
            const decreaseScore = postState.comments.map((comment) =>{
                if(comment.replies){
                    const updatedReplies = comment.replies.map((reply) =>{
                        if (reply.id === id) {
                            return { ...reply, score: reply.score>0? reply.score- 1 : reply.score = 0 };
                        }
                        return reply;
                    })
                    return {...comment,replies:updatedReplies}
                }
                return comment
            })

            setPostState({...postState,comments:decreaseScore})
        }
    }
  
    const addPosts = (text: string, id: number) => {
      if (!postState) return;
      const date = new Date();
      const now = date.toLocaleString();
      const updatedComments = postState.comments.map(item => {
        if (item.id === id) {
          const newReply: Reply = {
            id: Date.now(),
            content: text,
            createdAt: now,
            score: 0,
            replyingTo: '',
            user: {image:{
              png: "./images/avatars/image-juliusomo.png",
              webp: ""
            },username: "juliusomo" } 
          };
          const updatedReplies = [...item.replies, newReply];
          return { ...item, replies: updatedReplies };
        }
        return item;
      });
    
      setPostState({ ...postState, comments: updatedComments });
    };
    const removePost = function (index: number) {
      console.log(index)
      const removeComment = postState.comments.map((item) =>{
        const deleteReply = item.replies.filter((item) => item.id !== index);
        console.log(deleteReply)
        return { ...item, replies: deleteReply };
      })

      setPostState({...postState,comments:removeComment})
    };
    const updatePost =(text:string,id:number) =>{
        const date = new Date();
        const now = date.toLocaleString();
        const updateComments = postState.comments.map((item) =>{
          if(item.id === id){
            const newReply: Reply = {
              id: Date.now(),
              content: text,
              createdAt: now,
              score: 0,
              replyingTo: '',
              user: {image:{
                png: "./images/avatars/image-juliusomo.png",
                webp: ""
              },username: "juliusomo" } 
            };
            const updateReply = [...item.replies,newReply]
            return {...item,replies:updateReply}
          }
          return item;
        })
        setPostState({ ...postState, comments: updateComments });
      }
  
    return (
      <PostContext.Provider
        value={{ addPosts, removePost, post: postState, isLoading, increase,decrease }}
      >
        {children}
      </PostContext.Provider>
    );
  };
  

export const usePostContext = () => useContext(PostContext)

export default PostContextPrvoider