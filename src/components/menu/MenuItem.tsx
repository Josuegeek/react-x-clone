

interface menuItem{
    link:string,
    icon:string,
    text:string
}

function MenuItem({link, icon, text}:menuItem){
    return(
        <a href={link} className="flex flex-row relative gap-2 p-3 rounded-3xl items-center hover:bg-gray-600 hover:bg-opacity-50 transition-all duration-200">
            <div className="flex text-center justify-center items-center bg-blue-500 rounded-full w-5 h-5 text-xs absolute left-5 bottom-7">1</div>
            <img className="w-6 h-6 text-textcolor" src={icon} alt="menuIcon-" />
            <p className="text-sm">{text}</p>
        </a>
    )
}

export default MenuItem