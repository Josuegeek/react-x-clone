interface menuProps{
    selected:string
}

function Header({selected}:menuProps){
    const dividerClass = (selected=="recommended")? " border-b-4 border-blue-600 font-bold":""
    const dividerClass2 = (selected=="subscribe")? " border-b-4 border-blue-600 font-bold":""
    return(
        <div className="grid grid-cols-2 w-full min-w-fit h-14 border-b border-gray-700">
            <div className="flex items-center justify-center h-full cursor-pointer hover:bg-gray-600 hover:bg-opacity-50">
                <div className={"flex w-fit h-full items-center "+ dividerClass}>
                    <p className="">Pour vous</p>
                </div>
                
            </div>
            <div className="flex items-center justify-center h-full cursor-pointer hover:bg-gray-600 hover:bg-opacity-50">
                <div className={"flex w-fit h-full items-center "+ dividerClass2}>
                    <p className="">Abonnements</p>
                </div>
                
            </div>
        </div>
    )
}

export default Header