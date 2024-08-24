import { memo } from "react";
import { InnerReplies, Reply } from "../../Static/types";

type User ={
  innerReplies:InnerReplies[],
  replies:Reply[]
}

const InnerComments = (props:User) => {
  const{innerReplies,replies} = props 

  console.log(innerReplies)
  return (
    <ul className="w-full ">
      {innerReplies.length > 0 &&  (
        innerReplies.map((item,index) =>{
          console.log(item.content)
          return(
            <li key={index} className="h-full w-full list-none pl-16 pt-2 flex flex-col items-start gap-2 ">
              <div className="w-full flex justify-between items-start gap-6 bg-white border-[1px] border-transparent rounded-[8px] p-8">
                <div className="flex flex-col items-center justify-center gap-4 pt-2">
                  <span className="cursor-pointer ">
                    <svg className="fill-[#C5C6EF] hover:fill-[#1e40af]" width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
                    </svg>
                  </span>
                  <span className="font-montserrat font-bold text-blue">{replies[1].score}</span>
                  <span  className="cursor-pointer">
                    <svg className="fill-[#C5C6EF] hover:fill-[#1e40af]" width="11" height="3" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"/>
                    </svg>
                  </span>
                </div>
                <div className="flex flex-col items-start gap-5 w-[80%] ">
                  <div className="w-full flex justify-between items-center" >
                      <div className="flex justify-start gap-5 items-center ">
                          <img src={replies[1].user.image.png} alt="" />
                          <p className="text-nameBlack font-sans font-medium text-[16px]">{replies[1].user.username}</p>
                          <span className="text-gray font-sans text-[14px]">{replies[1].createdAt}</span>    
                      </div>
                  </div>
                  <div className="w-full">
                      <span className="text-gray font-sans text-[16px]">{item.content}</span>
                  </div>
                </div>
                <div className="w-[10%]">
                    <button 
                      className="flex items-center fill-[#5357B6] hover:fill-[#a1a1aa] text-blue border-none font-sans font-semibold hover:text-[#a1a1aa] gap-2"
                    >
                        <svg  width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"/>
                        </svg>
                        <span>Reply</span>
                    </button>
                </div>
              </div>
            </li>
          )
        })
      )}
    </ul>
  )
};

export default memo(InnerComments);
