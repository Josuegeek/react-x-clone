import Header from "./header"
import TweetEditor from "./TweetEditor"
import profileIcon from "../../assets/profile.svg"
import TweetItem, { Tweet } from "../post/Tweet";

const tweets: Tweet[] = [
    {
        tweet_image: "https://placehold.it/640x360",
        profile: "https://placehold.it/100x100",
        text_content: "This is a tweet about the latest news.",
        author: "John Doe",
        author_username: "johndoe123",
        time: "2023-12-12 10:00:00",
        likes: 100,
        comments: 20,
        repost: 5,
        touched: 10,
        certified: true,
    },
    {
        tweet_image: "https://placehold.it/640x360",
        profile: "https://placehold.it/100x100",
        text_content: "Another tweet about something interesting.",
        author: "Jane Smith",
        author_username: "janesmith456",
        time: "2023-12-11 15:00:00",
        likes: 50,
        comments: 10,
        repost: 3,
        touched: 5,
        certified: false,
    },
    {
        tweet_image: "https://placehold.it/640x360",
        profile: "https://placehold.it/100x100",
        text_content: "A funny tweet to make you laugh.",
        author: "Bob Johnson",
        author_username: "bobjohnson789",
        time: "2023-12-10 20:00:00",
        likes: 200,
        comments: 50,
        repost: 10,
        touched: 20,
        certified: true,
    },
    {
        tweet_image: "https://placehold.it/640x360",
        profile: "https://placehold.it/100x100",
        text_content: "A thought-provoking tweet about a current issue.",
        author: "Sarah Lee",
        author_username: "sarahlee123",
        time: "2023-12-09 05:00:00",
        likes: 150,
        comments: 30,
        repost: 8,
        touched: 15,
        certified: false,
    },
    {
        tweet_image: "https://placehold.it/640x360",
        profile: "https://placehold.it/100x100",
        text_content: "A heartwarming tweet about a personal experience.",
        author: "David Kim",
        author_username: "davidkim456",
        time: "2023-12-08 10:00:00",
        likes: 300,
        comments: 70,
        repost: 15,
        touched: 30,
        certified: true,
    },
    {
        tweet_image: "https://placehold.it/640x360",
        profile: "https://placehold.it/100x100",
        text_content: "A funny meme that went viral.",
        author: "Emily Chen",
        author_username: "emilychen789",
        time: "2023-12-07 15:00:00",
        likes: 500,
        comments: 100,
        repost: 20,
        touched: 50,
        certified: false,
    },
    {
        tweet_image: "https://placehold.it/640x360",
        profile: "https://placehold.it/100x100",
        text_content: "A inspirational quote that motivated many people.",
        author: "Michael Brown",
        author_username: "michaelbrown123",
        time: "2023-12-06 20:00:00",
        likes: 400,
        comments: 80,
        repost: 18,
        touched: 40,
        certified: true,
    },
    {
        tweet_image: "https://placehold.it/640x360",
        profile: "https://placehold.it/100x100",
        text_content: "A funny joke that made everyone laugh.",
        author: "Olivia Taylor",
        author_username: "oliviataylor456",
        time: "2023-12-05 05:00:00",
        likes: 600,
        comments: 120,
        repost: 25,
        touched: 60,
        certified: false,
    },
    {
        tweet_image: "https://placehold.it/640x360",
        profile: "https://placehold.it/100x100",
        text_content: "A heartwarming story about a pet.",
        author: "Noah Wilson",
        author_username: "noahwilson789",
        time: "2023-12-04 10:00:00",
        likes: 350,
        comments: 75,
        repost: 16,
        touched: 35,
        certified: true,
    },
    {
        tweet_image: "https://placehold.it/640x360",
        profile: "https://placehold.it/100x100",
        text_content: "A thought-provoking question that sparked a debate.",
        author: "Ava Young",
        author_username: "avayoung123",
        time: "2023-12-03 15:00:00",
        likes: 250,
        comments: 55,
        repost: 12,
        touched: 25,
        certified: false,
    },
];

function Timeline() {
    return (
        <div className="flex flex-col relative max-w-2xl border-l border-r border-gray-700 timeline h-[100vh] overflow-scroll">
            <Header selected="recommended"></Header>
            <TweetEditor profile={profileIcon}></TweetEditor>
            {tweets.map((tweet) => (
                <TweetItem {...tweet}></TweetItem>
            ))}
        </div>
    )
}

export default Timeline