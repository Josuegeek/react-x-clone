import moreIcon from "../assets/more.svg"
import Profile from "./profile"

interface profileInfo {
    profile: string,
    name: string,
    username: string
}

function MiniProfileCard({ profile, name, username }: profileInfo) {
    return (
        <div className="flex flex-row p-3 justify-between items-center cursor-pointer hover:bg-gray-600 hover:bg-opacity-50 rounded-full transition-all duration-200">
            <div className="flex flex-row gap-2 items-center">
                <Profile profile={profile}></Profile>
                <div className="flex flex-col">
                    <p className="font-bold">{name}</p>
                    <p className="text-opacity-65">{"@"+username}</p>
                </div>
            </div>
            <img className="w-4" src={moreIcon} alt="more Icon" />
        </div>
    )
}

export default MiniProfileCard
