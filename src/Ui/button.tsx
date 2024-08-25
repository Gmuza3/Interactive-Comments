import { ButtonHTMLAttributes } from "react";
import { PostTypes, usePostContext } from "../Store/Post.context";

type ButtonProps = {
  userName?: string;
  handleShowButton?: (id: number, currentText: string) => void;
  toggleFunc?: (id: number) => void;
  content?: string;
  postId?: number;
  text?:string
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  content = "",
  userName = "",
  postId,
  handleShowButton,
  toggleFunc,
  text,
  ...rest
}: ButtonProps) => {
  const { removePost } = usePostContext() as PostTypes;

  return (
    <>
      {userName === "juliusomo" ? (
        <div className="flex gap-2 lg-max:absolute lg-max:bottom-1 md-max:absolute md-max:right-14 md-max:z-10 md-max:bottom-5 md-max:flex-shrink-0">
          <button
            type="button"
            className="flex items-center gap-2 px-2 py-1 text-red-500 hover:bg-red-100 rounded-md w-[auto] h-[40px] font-sans font-semibold uppercase"
            onClick={() => postId !== undefined && text !== undefined 
                && removePost(postId, text)}
          >
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                fill="#ED6368"
              />
            </svg>{" "}
            <span>Delete</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 px-2 py-1 text-sky-900 hover:bg-[#a1a1aa] font-sans font-semibold rounded-md w-[auto] h-[40px] uppercase "
            onClick={() => postId !== undefined && handleShowButton?.(postId, content)}
          >
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                fill="#5357B6"
              />
            </svg>
            <span>Edit</span>
          </button>
        </div>
      ) : (
        <button
          className="flex items-center fill-[#5357B6] hover:fill-[#a1a1aa] text-blue border-none font-sans font-semibold hover:text-[#a1a1aa] gap-2 md-max:absolute md-max:right-14 md-max:z-10 md-max:bottom-5 md-max:flex-shrink-0"
          onClick={() => postId !== undefined && toggleFunc?.(postId)}
          {...rest}
        >
          <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
            <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" />
          </svg>
          <span>Reply</span>
        </button>
      )}
    </>
  );
};

export default Button;
