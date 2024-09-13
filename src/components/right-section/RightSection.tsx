import { TrendProps } from "./Trend"
import TrendList from "./TrendsList"
import FollowList from "./FollowList"
import SearchBar from "../SearchBar"
import profileIcon from "../../assets/profile.fill.svg"
import { profileInfo } from "../MiniProfileCard"


const trendList: TrendProps[] = [
    { type: "Tendances", link: "/lien", name: "Michael Smith", tweetsNumber: "2.5m" },
    { type: "Tendances", link: "/lien", name: "Michael Smith", tweetsNumber: "2.5m" },
    { type: "Tendances", link: "/lien", name: "Michael Smith", tweetsNumber: "2.5m" },
    { type: "Tendances", link: "/lien", name: "Michael Smith", tweetsNumber: "2.5m" }
]

const profileToFollow: profileInfo[] = [
    { profile: profileIcon, name: "Profile Name", username: "username", certified: true, followLink: "link", link: "" },
    { profile: profileIcon, name: "Profile Name", username: "username", certified: false, followLink: "link", link: "" },
    { profile: profileIcon, name: "Profile Name", username: "username", certified: false, followLink: "link", link: "" },
    { profile: profileIcon, name: "Profile Name", username: "username", certified: true, followLink: "link", link: "" },
    { profile: profileIcon, name: "Profile Name", username: "username", certified: true, followLink: "link", link: "" }
]

function RightSection() {
    return (
        <div className="lg:flex flex-col hidden p-3 pb-0 mb-2 h-[100vh] overflow-y-scroll hide-scrollbar lg:w-[350px]">
            <SearchBar></SearchBar>
            <div className="flex flex-col flex-1 overflow-auto hide-scrollbar ">
                <TrendList list={trendList}></TrendList>
                <FollowList list={profileToFollow}></FollowList>
            </div>
        </div>
    )
}

export default RightSection