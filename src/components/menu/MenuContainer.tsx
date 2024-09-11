import MenuItem from "./MenuItem"
import homeIcon from "../../assets/home.fill.svg"
import exploreIcon from "../../assets/explore.svg"
import notificationIcon from "../../assets/notifications.svg"
import messageIcon from "../../assets/message.svg"
import bookmarksIcon from "../../assets/bookmarks.svg"
import profileIcon from "../../assets/profile.svg"
import listIcon from "../../assets/list.svg"
import moreRoundedIcon from "../../assets/more.circle.svg"

function MenuContainer() {
    return (
        <div className="flex flex-col justify-between p-3">
            <div className="flex flex-col gap-2">
                <svg className=" w-10 ml-3 mb-5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" />
                </svg>
                <MenuItem icon={homeIcon} link="" text="Home"></MenuItem>
                <MenuItem icon={exploreIcon} link="" text="Explore"></MenuItem>
                <MenuItem icon={notificationIcon} link="" text="Notification"></MenuItem>
                <MenuItem icon={messageIcon} link="" text="Message"></MenuItem>
                <MenuItem icon={bookmarksIcon} link="" text="Bookmarks"></MenuItem>
                <MenuItem icon={listIcon} link="" text="Lists"></MenuItem>
                <MenuItem icon={profileIcon} link="" text="Profile"></MenuItem>
                <MenuItem icon={moreRoundedIcon} link="" text="More"></MenuItem>
            </div>

        </div>
    )
}

export default MenuContainer