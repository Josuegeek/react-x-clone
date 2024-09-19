interface menuProps{
    selected:string
}

function Header({selected}:menuProps){
    const dividerClass = (selected=="recommended")? " border-b-4 border-blue-600 font-bold":""
    const dividerClass2 = (selected=="subscribe")? " border-b-4 border-blue-600 font-bold":""
    return(
        <div className="grid grid-cols-2 w-full border-b border-gray-700 min-w-14 max-[499px]:pt-14
                    bg-black bg-opacity-25 backdrop-blur-sm sticky top-0">
            <div className="flex items-center justify-center cursor-pointer bg-transparent hover:bg-gray-600 hover:bg-opacity-50">
                <div className={"flex w-fit h-full items-center pt-4 pb-4"+ dividerClass}>
                    <p className="">Pour vous</p>
                </div>
                
            </div>
            <div className="flex items-center justify-center cursor-pointer hover:bg-gray-600 hover:bg-opacity-50">
                <div className={"flex w-fit h-full items-center pt-4 pb-4"+ dividerClass2}>
                    <p className="">Abonnements</p>
                </div>
                
            </div>
        </div>
    )
}

export default Header