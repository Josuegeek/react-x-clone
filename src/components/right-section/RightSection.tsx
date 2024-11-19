import { TrendProps } from "./Trend"
import TrendList from "./TrendsList"
import FollowList from "./FollowList"
import SearchBar from "../SearchBar"
import { profileInfo } from "../MiniProfileCard"


const trendList: TrendProps[] = [
    { type: "Tendances", link: "/lien", name: "Michael Smith", tweetsNumber: "2.5m" },
    { type: "Tendances", link: "/lien", name: "Michael Smith", tweetsNumber: "2.5m" },
    { type: "Tendances", link: "/lien", name: "Michael Smith", tweetsNumber: "2.5m" },
    { type: "Tendances", link: "/lien", name: "Michael Smith", tweetsNumber: "2.5m" }
]

const profileToFollow: profileInfo[] = [
    { userId:3, type:""},
    { userId:5,type:""},
    { userId:2,type:""},
    { userId:4,type:""},
    { userId:6,type:""}
]

function RightSection() {

    return (
        <div className="lg:flex flex-col hidden p-3 pb-0 mb-2 h-[100vh] overflow-y-scroll scrollbar-hidden lg:w-[350px]">
            <SearchBar></SearchBar>
            <div className="flex flex-col flex-1 overflow-auto scrollbar-hidden ">
                <TrendList list={trendList}></TrendList>
                <FollowList list={profileToFollow}></FollowList>
            </div>
        </div>
    )
}

export default RightSection