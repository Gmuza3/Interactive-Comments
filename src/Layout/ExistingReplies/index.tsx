import { FormEvent, useEffect, useState } from "react";
import { InnerReply, Reply, User } from "../../Static/types";
import { PostTypes, usePostContext } from "../../Store/Post.context";

type ReplyProps = {
  replies: Reply[];
  commentsId: number;
  toggleFunc:(id:number) => void;
  replyPostId:{[key:number]: boolean};
  user:User;
  InputChange:(e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputValue:string;
  id:number;
  setReplyPostId: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
  InnerReplies:InnerReply[]
};

const ExistingReplies = (props: ReplyProps) => {
  const { removePost, updatePost, increase, decrease,addInInnerReply } = usePostContext() as PostTypes;
  const { replies, commentsId ,replyPostId,toggleFunc,user,inputValue,InputChange,id,setReplyPostId,InnerReplies} = props;

  const [showEdit, setShowEdit] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const innerReplySubmit =( id:number,e:FormEvent) =>{
    e.preventDefault()
    setReplyPostId((prev) => ({...prev,[id]:false}));
    addInInnerReply(inputValue,id)
  }
  const handleShowButton = (id: number, currentText: string) => {
    if (showEdit === id) {
      setShowEdit(null);
      setEditText("");
    } else {
      setShowEdit(id);
      setEditText(currentText);
    }
  };
  const handleKeyDown =(e: React.KeyboardEvent<HTMLTextAreaElement>) =>{
    if(e.key === "Enter" && !e.shiftKey){
      e.preventDefault();
      // SubmitButton(id,e);
    }
  }


  return (
    <ul className="w-full">
      {replies &&
        replies.map((item, index) => {
          return (
            <li key={item.id ? item.id : index} className="h-full w-full items-start list-none pl-16 pt-2 flex flex-col gap-2 ">
              <div className="w-full flex justify-between items-start gap-6 bg-white border-[1px] border-transparent rounded-[8px] p-8">
                <div className="flex flex-col items-center justify-center gap-4 pt-2">
                  <span className="cursor-pointer" onClick={() => increase(item.id, "reply")}>
                    <svg className="fill-[#C5C6EF] hover:fill-[#1e40af]" width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
                    </svg>
                  </span>
                  <span className="font-montserrat font-bold text-blue">{item.score}</span>
                  <span className="cursor-pointer" onClick={() => decrease(item.id, "reply")}>
                    <svg className="fill-[#C5C6EF] hover:fill-[#1e40af]" width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
                    </svg>
                  </span>
                </div>
                <div className="flex flex-col items-start gap-5 w-[80%]">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex justify-start gap-4 items-center ">
                      <img src={item.user.image.png} alt="" />
                      <p className="text-nameBlack font-sans font-medium text-[16px]">{item.user.username}</p>
                      {item.user.username === 'juliusomo' && 
                        <span className="font-montserrat font-bold text-xs text-white bg-blue px-2 py-1">YOU</span>
                      }
                      <span className="text-gray font-sans text-[14px]">{item.createdAt}</span>
                    </div>
                  </div>
                  {item.user.username === "juliusomo" && showEdit === item.id ? (
                    <div className="w-full">
                      <textarea
                        placeholder="Write Comment"
                        className="w-full min-h-[100px] px-4 py-2 text-sm font-normal text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none resize-none overflow-auto leading-relaxed"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={handleKeyDown}
                      />
                      <div className="flex gap-4 w-[35%]">
                        <button
                          type="button"
                          className="px-4 py-1 text-[#fff] bg-blue rounded-[6px] w-[auto] h-[40px] uppercase hover:bg-slate-300"
                          onClick={() => {
                            updatePost(editText, commentsId, item.id);
                            setShowEdit(null);
                            setEditText("");
                          }}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="px-4 py-1 text-[#fff] bg-red-500 rounded-[6px] w-[auto] h-[40px] uppercase hover:bg-slate-300"
                          onClick={() => {
                            setShowEdit(null);
                            setEditText("");
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full">
                      <span className="text-gray font-sans text-[16px]">{item.content}</span>
                    </div>
                  )}
                </div>
                <div className="min-w-[15%] flex justify-end">
                  {item.user.username === "juliusomo" ? (
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="flex items-center gap-2 px-2 py-1 text-red-500 hover:bg-red-100 rounded-md w-[auto] h-[40px] font-sans font-semibold uppercase"
                        onClick={() => removePost(item.id)}
                      >
                      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>                        <span>Delete</span>
                      </button>
                      <button
                        type="button"
                        className="flex items-center gap-2 px-2 py-1 text-sky-900 hover:bg-[#a1a1aa] font-sans font-semibold rounded-md w-[auto] h-[40px] uppercase"
                        onClick={() => handleShowButton(item.id, item.content)}
                      >
                        <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
                        <span>Edit</span>
                      </button>
                    </div>
                  )
                  :(
                  <button 
                  className="flex items-center fill-[#5357B6] hover:fill-[#a1a1aa] text-blue border-none font-sans font-semibold hover:text-[#a1a1aa] gap-2"
                  onClick={() => toggleFunc(item.id)}
                    >
                  <svg  width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"/>
                  </svg>
                  <span>Reply</span>
                  </button>
                  )
                  }
                </div>
              </div>
              {replyPostId[item.id] && (
                <div className="w-full flex justify-end">
                    <div className="w-[80%] bg-white border border-transparent rounded-lg p-7 mt-0 flex justify-between items-start gap-5">
                        {user && (
                            <div className="w-[10%] mt-2">
                                <img src={user.image.png} alt="" />  
                            </div>
                        )}
                        <form 
                          action="" 
                          className="w-[90%] flex gap-9 mt-3" 
                          onSubmit={(e) => {
                            innerReplySubmit(id, e);
                          }}
                        >
                            <textarea 
                                placeholder="Write Comment" 
                                className="w-full max-w-[65%] min-h-[100px] px-4 py-2 text-sm font-normal text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none resize-none overflow-auto leading-relaxed"
                                value={inputValue} 
                                onChange={InputChange}
                                onKeyDown={handleKeyDown}
                            />
                            <div className="flex gap-4 w-[35%]">
                                <button type="submit" className="px-4 py-1 text-[#fff] bg-blue  rounded-[6px]  w-[auto] h-[40px] uppercase hover:bg-slate-300">Reply</button>
                            </div>
                        </form>
                    </div>
                    </div>
                )}
            </li>
          );
        })}
    </ul>
  );
};

export default ExistingReplies;
