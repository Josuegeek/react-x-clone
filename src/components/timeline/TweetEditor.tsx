import Profile from "../profile"
import MediaSvg from "../../assets/media.svg"
import gifIcon from "../../assets/gif.svg"
import pollIcon from "../../assets/poll.svg"
import emojiIcon from "../../assets/emoji.svg"
import scheduleIcon from "../../assets/schedule.svg"
import Button from "../Button"

interface props {
    profile: string
}

function TweetEditor({ profile }: props) {
    return (
        <form className="flex flex-row w-full pt-4 pl-4 gap-2" action="">
            <Profile profile={profile}></Profile>
            <div className="flex flex-col gap-2 w-5/6 ">
                <textarea className="bg-black placeholder-gray-600" placeholder="Quoi de neuf?" name="tweetText" id="tweetText"></textarea>
                <div className="flex justify-between w-full">
                    <div className="flex flex-row gap-2 text-blue-500 items-center">
                        <div className="w-8 h-8 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
                            <img className="" src={MediaSvg} alt="media" />
                        </div>
                        <div className="w-8 h-8 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
                            <img className="" src={gifIcon} alt="media" />
                        </div>
                        <div className="w-8 h-8 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
                            <img className="" src={pollIcon} alt="media" />
                        </div>
                        <div className="w-8 h-8 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
                            <img className="" src={emojiIcon} alt="media" />
                        </div>
                        <div className="w-8 h-8 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
                            <img className="" src={scheduleIcon} alt="media" />
                        </div>
                    </div>
                    <Button text="Poster" fontStyle="font-bold" color="primary"></Button>
                </div>
            </div>
        </form>
    )
}

export default TweetEditor