
export interface Tweet {
    tweetId: number,
    content: string,
    createdAt: string,
    likes: number,
    retweets: number,
    comments: number,
    numberShare: number,
    image?: string,
    userId: number
}