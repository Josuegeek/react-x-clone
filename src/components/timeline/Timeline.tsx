import Header from "./header"
import TweetEditor from "./TweetEditor"
import profileIcon from "../../assets/profile.svg"

function Timeline(){
    return(
        <div className="flex flex-col max-w-2xl border border-gray-700">
            <Header selected="recommended"></Header>
            <TweetEditor profile={profileIcon}></TweetEditor>
        </div>
    )
}

export default Timeline