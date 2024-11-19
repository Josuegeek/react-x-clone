import { useEffect, useState } from "react"


interface menuProps {
    selected?: string,
    headerType?: string
}

function Header({ selected, headerType }: menuProps) {
    const selectedMenuClass = " border-b-4 border-blue-600 font-bold"

    const [selectedMenu, setSelectedMenu] = useState<string>("")

    useEffect(() => {
        if (selected) {
            setSelectedMenu(selected)
        }
        else {
            if (headerType === "home") setSelectedMenu("foryou")
            else setSelectedMenu("posts")
        }
    }, [])

    return (
        (headerType == "home") ?
            <div className="grid grid-cols-2 w-full border-b border-gray-700 max-[499px]:pt-14
                            bg-black bg-opacity-25 backdrop-blur-sm sticky top-0">
                <div className="flex items-center justify-center cursor-pointer bg-transparent hover:bg-gray-600 hover:bg-opacity-50"
                    onClick={() => {
                        setSelectedMenu("foryou")
                    }}>
                    <div className={`flex w-fit h-full items-center pt-4 pb-3 " ${(selectedMenu === "foryou") && selectedMenuClass}`}>
                        <p className="">Pour vous</p>
                    </div>

                </div>
                <div onClick={() => {
                    setSelectedMenu("following")
                }}
                    className="flex items-center justify-center cursor-pointer hover:bg-gray-600 hover:bg-opacity-50">
                    <div className={`flex w-fit h-full items-center pt-4 pb-3 " ${(selectedMenu === "following") && selectedMenuClass}`}>
                        <p className="">Abonnemens</p>
                    </div>

                </div>
            </div>
            :
            <div className="grid grid-cols-3 w-full border-b border-gray-700 min-w-14 max-[499px]:pt-14
                            bg-black bg-opacity-25 backdrop-blur-sm sticky top-0">
                <div className="flex items-center justify-center cursor-pointer bg-transparent hover:bg-gray-600 hover:bg-opacity-50"
                    onClick={() => {
                        setSelectedMenu("posts")
                    }}>
                    <div className={`flex w-fit h-full items-center pt-4 pb-3 " ${(selectedMenu === "posts") && selectedMenuClass}`}>
                        <p className="">Posts</p>
                    </div>

                </div>
                <div onClick={() => {
                    setSelectedMenu("responses")
                }}
                    className="flex items-center justify-center cursor-pointer hover:bg-gray-600 hover:bg-opacity-50">
                    <div className={`flex w-fit h-full items-center pt-4 pb-3 " ${(selectedMenu === "responses") && selectedMenuClass}`}>
                        <p className="">Responses</p>
                    </div>

                </div>
                <div onClick={() => {
                    setSelectedMenu("medias")
                }}
                    className="flex items-center justify-center cursor-pointer hover:bg-gray-600 hover:bg-opacity-50">
                    <div className={`flex w-fit h-full items-center pt-4 pb-3 " ${(selectedMenu === "medias") && selectedMenuClass}`}>
                        <p className="">Medias</p>
                    </div>

                </div>
            </div>
    )
}

export default Header