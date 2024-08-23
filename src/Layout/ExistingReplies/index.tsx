import { useState } from "react";
import { Reply } from "../../Static/types";
import { PostTypes, usePostContext } from "../../Store/Post.context";

type ReplyProps = {
  replies: Reply[];
  commentsId: number;
};

const ExistingReplies = (props: ReplyProps) => {
  const { removePost, updatePost, increase, decrease } = usePostContext() as PostTypes;
  const { replies, commentsId } = props;

  const [showEdit, setShowEdit] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

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
      e.preventDefault()
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
                <div className="min-w-[10%]">
                  {item.user.username === "juliusomo" && (
                    <div className="flex">
                      <button
                        type="button"
                        className="px-2 py-1 text-red-500 hover:bg-red-100 rounded-md w-[auto] h-[40px] uppercase"
                        onClick={() => removePost(item.id)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="px-2 py-1 text-green-500 hover:bg-red-100 rounded-md w-[auto] h-[40px] uppercase"
                        onClick={() => handleShowButton(item.id, item.content)}
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default ExistingReplies;
