import MenuItem, { menuItem } from "./MenuItem"
import homeIcon from "/imgs/home.fill.svg"
import exploreIcon from "/imgs/search.svg"
import notificationIcon from "/imgs/notifications.svg"
import messageIcon from "/imgs/message.svg"
import profileIcon from "/imgs/profile.svg"
import listIcon from "/imgs/list.svg"
import moreRoundedIcon from "/imgs/more.circle.svg"
import MiniProfileCard from "../MiniProfileCard"
import Button from "../Button"

const menuList : menuItem[]=[
    {icon:homeIcon, link:"/home", text:"Home", toRead:0},
    {icon:exploreIcon, link:"/explore", text:"Explore", toRead:0},
    {icon:notificationIcon, link:"/notifications", text:"Notifications", toRead:2},
    {icon:messageIcon, link:"/mesages", text:"Messages", toRead:5},
    {icon:listIcon, link:"/lists", text:"Lists", toRead:0},
    {icon:profileIcon, link:"/profile/1", text:"Profile", toRead:0},
    {icon:moreRoundedIcon, link:"/more", text:"More", toRead:0}
]

function MenuContainer() {

    return (
        <div className=" absolute min-[500px]:relative min-[500px]:flex -bottom-1 flex-col justify-between p-3 
                            sm:w-[70px] xl:w-[260px] md:ml-4 md:mr-4 min-[500px]:w-[60px] min-[500px]:h-[100vh] bg-black z-50 max-[499px]:w-full">
            <div className="flex min-[500px]:flex-col justify-between">
                <svg className=" h-6 w-6 ml-3 mb-3 max-[499px]:absolute max-[499px]:-top-[86vh] max-[499px]:w-full 
                                max-[499px]:left-0 max-[499px]:m-0"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" />
                </svg>
                {menuList.map((menuItem) => (
                    <MenuItem {...menuItem}></MenuItem>
                ))}
                <Button text="Poster" color="primary menu" fontStyle="font-bold mt-4"></Button>
            </div>
            <MiniProfileCard userId={1} ></MiniProfileCard>
        </div>
    )
}

export default MenuContainer