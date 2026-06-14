export interface IPostDummyJson {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IReactionsDummyJson ;
    views: number;
    userId: number;
}
export interface IReactionsDummyJson {
    likes: number;
    dislikes: number;
}