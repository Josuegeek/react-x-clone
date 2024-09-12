import { TrendProps } from "./Trend"
import TrendList from "./TrendsList"


const trendList: TrendProps[] = [
    { type: "Tendances", link: "/lien", name: "Michael Smith", tweetsNumber: "2.5m" },
    { type: "Tendances", link: "/lien", name: "Michael Smith", tweetsNumber: "2.5m" },
    { type: "Tendances", link: "/lien", name: "Michael Smith", tweetsNumber: "2.5m" },
    { type: "Tendances", link: "/lien", name: "Michael Smith", tweetsNumber: "2.5m" }
]


function RightSection() {
    return (
        <div className="flex flex-col gap-4 w-[350px] p-3">
            <TrendList list={trendList}></TrendList>
        </div>
    )
}

export default RightSection