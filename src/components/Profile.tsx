
interface props{
    profile :string,
    className ?:string 
}

function Profile({profile, className}:props){
    return (
        <img className={`w-[40px] h-[40px] rounded-full bg-blue-700 ${className}`} src={profile} alt="Profile image"/>
    )
}

export default Profile