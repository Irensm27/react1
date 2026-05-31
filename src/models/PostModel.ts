export interface IPostModel  {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IPostModelReactions;
    views:number;
    userId: number
}
export interface IPostModelReactions  {
    likes: number;
    dislikes: number
}