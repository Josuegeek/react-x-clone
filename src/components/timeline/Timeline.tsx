import Header from "./header"
import TweetEditor from "./TweetEditor"
import profileIcon from "../../assets/profile.svg"

function Timeline(){
    return(
        <div className="flex flex-col max-w-2xl border-l border-r border-gray-700 timeline">
            <Header selected="recommended"></Header>
            <TweetEditor profile={profileIcon}></TweetEditor>
        </div>
    )
}

export default Timeline