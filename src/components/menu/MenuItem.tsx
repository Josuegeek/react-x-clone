

export interface menuItem{
    link:string;
    icon:string;
    text:string;
    toRead:number
}

function MenuItem({link, icon, text, toRead}:menuItem){
    
    const classList =  (toRead<=0)?"invisible absolute":"flex text-center justify-center items-center bg-blue-500 rounded-full w-5 h-5 text-xs absolute left-5 bottom-7"

    return(
        <a href={link} className="flex flex-row relative gap-2 p-3 rounded-3xl items-center hover:bg-gray-600 hover:bg-opacity-50 transition-all duration-200">
            <div className={classList}>{toRead}</div>
            <img className="w-6 h-6 text-textcolor" src={icon} alt="menuIcon-" />
            <p className="text-lg">{text}</p>
        </a>
    )
}

export default MenuItem