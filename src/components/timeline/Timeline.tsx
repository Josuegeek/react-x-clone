import Header from "./Header"
import TweetEditor from "./TweetEditor"
import TweetItem from "../post/TweetComponent"
import Loader from "../Loader"
import { Tweet } from "../../models/Tweet"
import Button from "../Button"

interface TimelineProps {
    tweets?: Tweet[]
    headerType?: string
    loading?: boolean
    error?: string | null
    onReloadClick?: () => void
    className?: string
}

function Timeline({ tweets, headerType, loading, error, onReloadClick, className }: TimelineProps) {

    return (
        <div className={`${className} flex flex-col relative max-w-[600px] max-[768px]:flex-1 max-[768px]:min-w-[25rem] h-full hide-scrollbar max-[499px]:mb-20
            overflow-y-scroll scrollbar-hidden max-[499px]:w-full max-[499px]:border-none`}>

            <Header headerType={headerType}></Header>
            <div className="max-[499px]:hidden">
                <TweetEditor profile={"https://randomuser.me/api/portraits/men/3.jpg"}></TweetEditor>
            </div>
            {(loading) ? <Loader /> : (!error && tweets) && tweets.map((tweet) => (
                <TweetItem {...tweet}></TweetItem>
            ))}
            {error &&
                <div className="w-full flex flex-col gap-3 items-center">
                    <p className="text-red-500 p-4 w-full text-center">{error}</p>
                    <Button text="Actualiser" color="primary" onClick={onReloadClick} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8s3.663-8 
                                                                                                    8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10"/>
                    </svg>} />
                </div>
            }
            <div className="flex flex-col flex-1 ">

            </div>
        </div>
    )
}

export default Timeline