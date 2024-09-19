import { FormEvent, useState } from "react";
import { InnerReplies, Reply, User } from "../../Static/types";
import { PostTypes, usePostContext } from "../../Store/Post.context";
import InnerComments from "../InnerComments";
import Button from "../../Ui/button";
import CurrentUserReplies from "../CurrentUserReplies";

type ReplyProps = {
  replies: Reply[];
  commentsId: number;
  toggleFunc: (id: number) => void;
  replyPostId: { [key: number]: boolean };
  user: User;
  InputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  innerSubmitButton: (id: number, e: FormEvent, innerId: number) => void;
  inputValue: string;
  id: number;
  innerReplies: InnerReplies[];
  SubmitButton?: (id: number, e: FormEvent) => void;
};

const ExistingReplies = (props: ReplyProps) => {
  const { updatePost, increase, decrease } = usePostContext() as PostTypes;
  const {
    replies,
    commentsId,
    replyPostId,
    toggleFunc,
    user,
    inputValue,
    InputChange,
    id,
    innerReplies,
    innerSubmitButton,
  } = props;

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

  return (
    <ul className="w-full h-full">
      {replies &&
        replies.map((item, index) => {
          return (
            <li
              key={item.id ? item.id : index}
              className="h-full w-full items-start list-none pl-16 pt-2 flex flex-col gap-0  ss-max:pl-10 "
            >
              <div className="h-full w-full flex justify-between items-start gap-6 bg-white border-[1px] border-transparent rounded-[8px] p-8 lg-max:relative lg-max:px-4 lg-max:pb-[75px]">
                <div
                  className="flex flex-col items-center justify-center gap-4 pt-2 lg-max:min-w-[5%] flex-shrink-0
                sm-max:absolute sm-max:left-4 sm-max:bottom-4 sm-max:flex sm-max:flex-row sm-max:bg-slate-200 sm-max:py-1 sm-max:px-4 sm-max:flex-shrink-0"
                >
                  <span
                    className="cursor-pointer"
                    onClick={() => increase(item.id, "reply")}
                  >
                    <svg
                      className="fill-slate-400 hover:fill-[#1e40af]"
                      width="11"
                      height="11"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
                    </svg>
                  </span>
                  <span className="font-montserrat font-bold text-blue">
                    {item.score}
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => decrease(item.id, "reply")}
                  >
                    <svg
                      className="fill-slate-400 hover:fill-[#1e40af]"
                      width="11"
                      height="3"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
                    </svg>
                  </span>
                </div>
                <div className="flex flex-col items-start gap-5 w-[80%] lg-max:w-full mobile-max:justify-between h-[100%]">
                  <div className="w-full flex justify-between items-center ">
                    <div className="flex justify-start gap-4 items-center mobile-max:gap-2 mobile-max:justify-between mobile-max:w-full ">
                      <img
                        src={item.user.image.png}
                        alt=""
                        className="w-[60px] h-[60px] mobile-max:w-[50px] mobile-max:h-[50px]"
                      />
                      <p className="text-nameBlack font-sans font-medium text-[16px] ">
                        {item.user.username}
                      </p>
                      {item.user.username === "juliusomo" && (
                        <span className="font-montserrat font-semibold text-xs text-white bg-blue px-2 py-1">
                          YOU
                        </span>
                      )}
                      <span className="text-gray font-sans text-[14px]">
                        {item.createdAt}
                      </span>
                    </div>
                  </div>
                  {item.user.username === "juliusomo" &&
                  showEdit === item.id ? (
                    <div className="w-full">
                      <textarea
                        placeholder="Write Comment"
                        className="w-full h-auto px-4 py-2 text-sm font-normal text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none resize-none leading-relaxed"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <div className="flex gap-4 w-[35%] pt-2">
                        <button
                          type="button"
                          className="px-4 py-1 font-montserrat ss-max:px-2 ss-max:py-0 text-[#fff] text-[14px] bg-blue rounded-[6px] w-[auto] h-[40px] uppercase hover:bg-slate-300"
                          onClick={() => {
                            updatePost(editText, commentsId, item.id, "reply");
                            setShowEdit(null);
                            setEditText("");
                          }}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="px-4 py-1 font-montserrat ss-max:px-2 ss-max:py-0 text-[#fff] text-[14px] bg-red-500 rounded-[6px] w-[auto] h-[40px] uppercase hover:bg-slate-300"
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
                      <span className="w-full text-gray font-sans text-[16px] leading-tight p-0 whitespace-pre-wrap break-words max-w-prose">
                        {item.content}
                      </span>
                    </div>
                  )}
                </div>
                <div className="min-w-[15%] flex justify-end lg-max:absolute lg-max:right-5 lg-max:bottom-5">
                  <Button
                    postId={item.id}
                    handleShowButton={handleShowButton}
                    toggleFunc={toggleFunc}
                    content={item.content}
                    userName={item.user.username}
                    text={"reply"}
                  />
                </div>
              </div>
              {replyPostId[item.id] && (
                <div key={item.id} className="w-full flex justify-end pt-2">
                  <CurrentUserReplies
                    inputValue={inputValue}
                    innerSubmitButton={innerSubmitButton}
                    InputChange={InputChange}
                    index={index}
                    id={id}
                    user={user}
                    context="innerReply"
                    innerId={item.id}
                  />
                </div>
              )}
              {item.user.username === "ramsesmiron" && (
                <InnerComments
                  innerReplies={innerReplies}
                  replies={replies}
                  handleShowButton={handleShowButton}
                  toggleFunc={toggleFunc}
                  showEdit={showEdit}
                  editText={editText}
                  setEditText={setEditText}
                  setShowEdit={setShowEdit}
                  commentsId={commentsId}
                />
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default ExistingReplies;
