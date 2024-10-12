
import profileIcon from "/imgs/profile.svg"


interface props{
    profile ?:string,
    className ?:string 
}

function Profile({profile, className}:props){
    return (
        <img className={`w-[2.5rem] h-[2.5rem] min-w-[2.5rem] rounded-full bg-blue-700 ${className}`} 
            src={profile? profile:profileIcon} alt="Profile image"/>
    )
}

export default Profile