export interface ICommentDummyJson  {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: ICommentUserDummyJson ;
}
export interface ICommentUserDummyJson  {
    id: number;
    username: string;
    fullName: string;
}