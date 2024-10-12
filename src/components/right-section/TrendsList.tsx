import { useState } from "react";
import { TrendProps } from "./Trend";
import Trend from "./Trend";
import settingsIcon from "/imgs/settings.svg"

interface listProps {
    list: TrendProps[]
    reload?:boolean
}

function TrendList({ list, reload }: listProps) {

    const [reloading, setReloading]=useState<boolean>(false)

    return (
        <div className="flex flex-col gap-1 rounded-3xl border border-gray-700 p-3 mt-6">
            <div className="flex justify-between">
                <p className="text-xl font-bold">Trends for you</p>
                <img className="w-4" src={settingsIcon} alt="settings icon" />
            </div>
            {list.map((trend) => (
                <Trend {...trend}></Trend>
            ))}
        </div>
    )

}

export default TrendList