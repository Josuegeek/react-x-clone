
interface btnProps {
    text: string,
    color: string,
    fontStyle?: string
}


function Button({ text, color, fontStyle }: btnProps) {
    let btnColorClass = ""

    switch (color) {
        case "primary":
            btnColorClass= ` bg-blue-500 ${fontStyle}`
            break
        case "white":
            btnColorClass= ` bg-textcolor text-black ${fontStyle}`
            break
        default:
            btnColorClass= `bg-blue-500 ${fontStyle}`;
    }

    return (
        <button className={"p-3 font-bold rounded-3xl " + btnColorClass}>{text}</button>
    )
}

export default Button