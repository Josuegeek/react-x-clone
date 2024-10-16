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
    { userId:3},
    { userId:5},
    { userId:2},
    { userId:4},
    { userId:6}
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