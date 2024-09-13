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

const profileToFollow : profileInfo[] =[
    {profile:profileIcon, name:"Profile Name", username:"username", certified:true, followLink:"link", link:""},
    {profile:profileIcon, name:"Profile Name", username:"username", certified:false, followLink:"link", link:""},
    {profile:profileIcon, name:"Profile Name", username:"username", certified:false, followLink:"link", link:""},
    {profile:profileIcon, name:"Profile Name", username:"username", certified:true, followLink:"link", link:""},
    {profile:profileIcon, name:"Profile Name", username:"username", certified:true, followLink:"link", link:""}
]

function RightSection() {
    return (
        <div className="flex flex-col gap-6 w-[350px] p-3 sticky">
            <SearchBar></SearchBar>
            <TrendList list={trendList}></TrendList>
            <FollowList list={profileToFollow}></FollowList>
        </div>
    )
}

export default RightSection