import {  FormEvent, useState } from "react";
import { PostTypes, usePostContext } from "../Store/Post.context";
import ExistingReplyes from "./ExistingReplies";
import CurrentUserReplies from "./CurrentUserReplies";

const Layout = () => {
  const[replyPostId,setReplyPostId] = useState<{[key:number] : boolean}>({});
  const[inputValue,setInputValue] = useState('');
  const {addPosts,post,isLoading,increase,decrease} = usePostContext() as PostTypes

  const InputChange =(e: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setInputValue(e.target.value);
  } 

  const SubmitButton =(id:number,e:FormEvent) =>{
    e.preventDefault()
    addPosts(inputValue,id)
    setInputValue("")
    setReplyPostId((prev) => ({...prev,[id]:false}))
  }
  const toggleFunc = (id:number) =>{
    setReplyPostId((prev) => ({...prev, [id]: !prev[id] }));
  }
  // const gela =JSON.parse(localStorage.getItem('postState') || "null");
  // console.log(gela)
  return (
    <div className="w-full py-[50px]">
      <ul className="list-none flex flex-col items-center justify-center gap-2">
        {!isLoading && post.comments.map((item,index) => (
          <li key={item.id} className="max-w-[65%] h-full flex flex-col items-start ss-max:max-w-[85%] mobile-max:max-w-full ">
            <div className="flex justify-between items-start gap-6 bg-white border-[1px] border-transparent rounded-[8px] p-8 md-max:relative md-max:pb-[60px] md-max:p-4">
              <div 
              className="flex flex-col items-center justify-center gap-4 pt-2 
              sm-max:absolute sm-max:left-3 sm-max:bottom-4 sm-max:flex sm-max:flex-row sm-max:bg-slate-500 sm-max:py-1 sm-max:px-4 sm-max:flex-shrink-0"
              >
                <span className="cursor-pointer" onClick={() => increase(item.id,"comments")}>
                  <svg className="fill-[#C5C6EF] hover:fill-[#1e40af]" width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
                  </svg>
                </span>
                <span className="font-montserrat font-bold text-blue">{item.score}</span>
                <span  className="cursor-pointer" onClick={() => decrease(item.id,"comments")}>
                  <svg className="fill-[#C5C6EF] hover:fill-[#1e40af]" width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"/>
                  </svg>
                </span>
              </div>
              <div className="flex flex-col items-start gap-5">
                <div className="w-full flex justify-between items-center" >
                    <div className="w-[80%] flex justify-start gap-5 items-center md-max:w-full">
                        <img src={item.user.image.png} alt="" />
                        <p className="text-nameBlack font-sans font-medium text-[16px]">{item.user.username}</p>
                        <span className="text-gray font-sans text-[14px]">{item.createdAt}</span>    
                    </div>
                </div>
                <div className="w-full">
                    <span className="text-gray font-sans text-[16px]">{item.content}</span>
                </div>
              </div>
              <div className="w-[10%] md-max:absolute md-max:right-14 md-max:z-10 md-max:bottom-5 md-max:flex-shrink-0">
                  <button 
                    className="flex items-center fill-[#5357B6] hover:fill-[#a1a1aa] text-blue border-none font-sans font-semibold hover:text-[#a1a1aa] gap-2"
                    onClick={() => toggleFunc(item.id)}
                  >
                      <svg  width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"/>
                      </svg>
                      <span>Reply</span>
                  </button>
              </div>
            </div> 
            {replyPostId[item.id] &&  (
              <CurrentUserReplies inputValue={inputValue} SubmitButton={SubmitButton} InputChange={InputChange} index={index} id={item.id} post={post}/>
            )}
              <ExistingReplyes replies={item.replies} commentsId = {item.id}/>    
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default Layout;