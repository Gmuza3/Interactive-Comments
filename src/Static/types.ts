interface UserImage {
    png: string;
    webp: string;
  }
  
 export interface User {
    image: UserImage;
    username: string;
  }
  
  export interface Reply {
    // replies: Reply[];
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo: string;
    user: User;
  }
  export interface InnerReplies {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo: string;
    user: User;
  }
  
  interface Comment {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replies: Reply[];
    innerReplies:InnerReplies[];
  }
  
  export interface RootObject {
    currentUser: User;
    comments: Comment[];
  }


