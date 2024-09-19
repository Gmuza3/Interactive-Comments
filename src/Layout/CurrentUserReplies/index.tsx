import { FormEvent } from "react";
import { RootObject, User } from "../../Static/types";

type Props = {
  InputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  SubmitButton?: (id: number, e: FormEvent) => void;
  inputValue: string;
  index?: number;
  id?: number;
  post?: RootObject;
  user?: User;
  innerSubmitButton?: (id: number, e: FormEvent, innerId: number) => void;
  commentsSubmitButton?: (e: FormEvent) => void;
  context: string;
  innerId?: number;
};

const CurrentUserReplies = (props: Props) => {
  const {
    InputChange,
    SubmitButton,
    inputValue,
    id,
    post,
    user,
    innerSubmitButton,
    innerId,
    context,
    commentsSubmitButton,
  } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (SubmitButton && id) {
        SubmitButton(id, e);
      }
      if (innerSubmitButton && innerId && id) {
        innerSubmitButton(id, e, innerId);
      }
      if (commentsSubmitButton) {
        commentsSubmitButton(e);
      }
    }
  };
  if (user && context === "innerReply") {
    return (
      <div className="bg-white border border-transparent rounded-lg p-7 w-[97%] flex justify-between gap-5 ss-max:gap-3 md-max:p-3">
        {user && (
          <div className="flex-shrink-0 mt-2">
            <img
              src={user.image.png}
              alt=""
              className="w-[60px] h-[60px] mobile-max:w-[50px] mobile-max:h-[50px]"
            />
          </div>
        )}
        <form
          action=""
          className="w-[95%] flex gap-5 mt-3 mobile-max:gap-3"
          onSubmit={(e) => {
            innerSubmitButton &&
              innerId &&
              id &&
              innerSubmitButton(id, e, innerId);
          }}
        >
          <textarea
            placeholder="Write Comment"
            className="w-full min-w-[50%] capitalize min-h-[100px] px-4 py-2 text-sm font-normal text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none"
            value={inputValue}
            onChange={InputChange}
            onKeyDown={handleKeyDown}
          />
          <div className="flex gap-4 w-[25%] flex-shrink-0 mobile-max:w-[35%] ss-max:w-[30%]">
            <button
              type="submit"
              className="px-4 py-1 text-[#fff] bg-blue  rounded-[6px]  w-[auto] h-[40px] uppercase mobile-max:text-sm mobile-max:max-w-[70px] hover:bg-slate-300"
            >
              Reply
            </button>
          </div>
        </form>
      </div>
    );
  } else if (context === "Reply") {
    return (
      <div className="bg-white border border-transparent rounded-lg p-7 mt-2 w-[95%] flex justify-between self-end gap-5 ss-max:gap-3 md-max:p-4">
        {post && (
          <div className="flex-shrink-0 mt-2">
            <img
              src={post.currentUser.image.png}
              alt=""
              className="w-[60px] h-[60px] mobile-max:w-[50px] mobile-max:h-[50px]"
            />
          </div>
        )}
        <form
          action=""
          className="w-[95%] flex gap-5 mt-3 mobile-max:gap-3"
          onSubmit={(e) => SubmitButton && id && SubmitButton(id, e)}
        >
          <textarea
            placeholder="Write Comment"
            className="w-full min-w-[50%] capitalize min-h-[100px] px-4 py-2 text-sm font-normal text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none resize-none overflow-auto leading-relaxed"
            value={inputValue}
            onChange={InputChange}
            onKeyDown={handleKeyDown}
          />
          <div className="flex gap-4 w-[25%] flex-shrink-0 mobile-max:w-[35%] ss-max:w-[30%]">
            <button
              type="submit"
              className="px-4 py-1 text-[#fff] bg-blue  rounded-[6px]  w-[auto] h-[40px] uppercase hover:bg-slate-300"
            >
              Reply
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="bg-white hover:bg-red-50 border border-transparent rounded-lg p-7 mt-2 w-full flex justify-between self-end gap-5 ss-max:gap-3 md-max:p-4">
        {post && (
          <div className="flex-shrink-0 mt-2">
            <img
              src={post?.currentUser.image.png}
              alt=""
              className="w-[60px] h-[60px] mobile-max:w-[50px] mobile-max:h-[50px]"
            />
          </div>
        )}
        <form
          action=""
          className="w-[95%] flex gap-5 mt-3 mobile-max:gap-3"
          onSubmit={(e) => commentsSubmitButton && commentsSubmitButton(e)}
        >
          <textarea
            placeholder="Write a Post"
            className="w-full min-w-[50%] min-h-[100px] px-4 py-2 text-sm font-normal text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none resize-none overflow-auto leading-relaxed capitalize"
            value={inputValue}
            onChange={InputChange}
            onKeyDown={handleKeyDown}
          />
          <div className="flex gap-4 w-[25%] flex-shrink-0 mobile-max:w-[35%] ss-max:w-[30%]">
            <button
              type="submit"
              className="px-4 py-1 text-[#fff] bg-blue  rounded-[6px]  w-[auto] h-[40px] uppercase hover:bg-slate-500"
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default CurrentUserReplies;
