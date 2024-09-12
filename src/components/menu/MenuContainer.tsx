import MenuItem, { menuItem } from "./MenuItem"
import homeIcon from "../../assets/home.fill.svg"
import exploreIcon from "../../assets/search.svg"
import notificationIcon from "../../assets/notifications.svg"
import messageIcon from "../../assets/message.svg"
import profileIcon from "../../assets/profile.svg"
import listIcon from "../../assets/list.svg"
import moreRoundedIcon from "../../assets/more.circle.svg"
import MiniProfileCard from "../MiniProfileCard"
import user from "../../assets/profile.fill.svg"
import Button from "../Button"

const menuList : menuItem[]=[
    {icon:homeIcon, link:"/home", text:"Home", toRead:0},
    {icon:exploreIcon, link:"/explore", text:"Explore", toRead:0},
    {icon:notificationIcon, link:"/notifications", text:"Notifications", toRead:2},
    {icon:messageIcon, link:"/mesages", text:"Messages", toRead:5},
    {icon:listIcon, link:"/lists", text:"Lists", toRead:0},
    {icon:profileIcon, link:"/profile", text:"Profile", toRead:0},
    {icon:moreRoundedIcon, link:"/more", text:"More", toRead:0}
]

function MenuContainer() {
    return (
        <div className="flex flex-col justify-between p-3 xl:w-[260px] ml-4 mr-4">
            <div className="flex flex-col">
                <svg className=" h-6 w-6 ml-3 mb-3"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" />
                </svg>
                {menuList.map((menuItem) => (
                    <MenuItem {...menuItem}></MenuItem>
                ))}
                <Button text="Poster" color="primary" fontStyle="font-bold mt-4"></Button>
            </div>
            <MiniProfileCard link="" certified={true} profile={user} username="username" name="user name" ></MiniProfileCard>
        </div>
    )
}

export default MenuContainer