import { FormEvent } from "react";
import { RootObject } from "../../Static/types";

type Props ={
    InputChange:(e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    SubmitButton:(id:number,e:FormEvent) => void;
    inputValue:string,
    index:number,
    id:number,
    post:RootObject
}

const CurrentUserReplies = (props:Props) => {
  const {InputChange,SubmitButton,inputValue,id,post} = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); 
      SubmitButton(id, e);
    }
  };
  
  return (
        <div className="bg-white border border-transparent rounded-lg p-7 mt-2 w-full flex justify-between gap-5">
            {post && (
               <div className="w-[10%] mt-2">
                   <img src={post.currentUser.image.png} alt="" />  
               </div>
            )}
            <form 
              action="" 
              className="w-[90%] flex gap-9 mt-3" 
              onSubmit={(e) => SubmitButton(id, e)}
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
  )
}

export default CurrentUserReplies