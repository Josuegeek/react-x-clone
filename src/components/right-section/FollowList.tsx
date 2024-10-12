import { profileInfo } from "../MiniProfileCard"
import MiniProfileCard from "../MiniProfileCard"

interface followList{
    list:profileInfo[]
}

function FollowList({list}:followList){
    return (
        <div className="flex flex-col gap-1 rounded-3xl border border-gray-700 p-3 mt-6">
            <p className="text-xl font-bold">Suggestions</p>
            {list.map((profileToFollow) => (
                <MiniProfileCard {...profileToFollow}></MiniProfileCard>
            ))}
        </div>
    )
}

export default FollowList