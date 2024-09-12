
interface props{
    profile :string
}

function Profile({profile}:props){
    return (
        <img className="w-10 h-10 rounded-full bg-blue-700" src={profile} alt="Profile image" />
    )
}

export default Profile