
interface btnProps{
    text:string, 
    color : string,
    fontStyle:string
}


function Button({text, color, fontStyle}:btnProps){
    const btnColorClass = (color=="primary")? " bg-blue-500 " + fontStyle : "bg-gray-500"
    return (
        <button className={"p-3 font-bold rounded-3xl " + btnColorClass}>{text}</button>
    )
}

export default Button