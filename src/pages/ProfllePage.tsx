import { useParams } from "react-router";
import MenuContainer from '../components/menu/MenuContainer'
import Timeline from '../components/timeline/Timeline'
import RightSection from '../components/right-section/RightSection'
import { useEffect, useState } from "react";
import axios from 'axios'
import { Tweet } from "../models/Tweet"
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";


export default function Profile() {
    const { username } = useParams()

    const [tweets, setTweets] = useState<any[]>([])
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchData = async () => {
        setLoading(true) // Commencer le chargement
        //setReload(true)
        setError(null) // Réinitialiser l'erreur
        try {
            const response = await axios.get(import.meta.env.VITE_URL_API + `tweets?userId=${username}`);
            //setTweets(response.data); // Mettre à jour les données
            setTweets(response.data.sort((a: Tweet, b: Tweet) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))

            // Récupérer les informations de l'utilisateur
            const userResponse = await axios.get(`${import.meta.env.VITE_URL_API}users?id=${username}`);
            setUser(userResponse.data[0]); // Mettre à jour l'état de l'utilisateur

        } catch (err) {
            setError('Erreur lors de la récupération des données'); // Gérer l'erreur
        } finally {
            setLoading(false); // Terminer le chargement
        }
    }

    useEffect(() => {
        fetchData()
    }, [username]);

    return (
        <div className='text-textcolor font-twitter w-full flex flex-row h-screen justify-center gap-2'>
            <MenuContainer></MenuContainer>
            <div className="flex flex-col border-l border-r border-gray-700 w-[602px] overflow-y-scroll">
                <div className="flex flex-row h-[7rem] items-center gap-1 sticky top-0 z-30 bg-black bg-opacity-25 backdrop-blur-sm">
                    <Link to="/home" className="p-2 ml-2 cursor-pointer w-fit rounded-full hover:bg-slate-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z" />
                        </svg>
                    </Link>
                    {user && 
                        <div className="flex flex-col">
                            <div className="flex flex-row gap-1 items-center">
                                <p className="font-bold text-[1.4rem] p-0">{user.name}</p>
                                {user.certified && <svg fill="currentColor" className="text-blue-500 w-4" viewBox="0 0 22 22" aria-label="Compte certifié" role="img"
                                        data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 
                                        1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 
                                        1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 
                                        1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>}
                            </div> 
                            <p className="text-gray-600 -mt-2 text-sm">{tweets.length} Posts</p>
                        </div>
                    }
                </div>
                {user &&
                    <div className="flex flex-col mb-5">
                        <div className="w-full h52 relative">
                            {loading && <Loader className=" absolute bg-gray-600"></Loader>}
                            <img className="w-full h-52" src={user.coverPicture} alt="Photo de couverture" />
                        </div>
                        <div className="flex flex-row relative justify-between pr-5 pl-5">
                            <div className="bg-black p-1 rounded-full -mt-16 relative">
                                {loading && <Loader className=" absolute bg-gray-600 rounded-full left-0 top-0"></Loader>}
                                <img className="rounded-full" src={user.profilePicture} alt="profile pic" />
                            </div>
                            <Button text="Éditer le profil" color="outlined" fontStyle="font-bold h-fit mt-3">

                            </Button>
                        </div>

                        <div className="flex flex-col gap-2 pl-8 ">
                            <div className="flex flex-col">
                                <p className="font-bold text-[1.4rem] p-0">{user.name}</p>
                                <p className="text-gray-600 p-0">@{user.username}</p>
                            </div>
                            <p>{user.bio}</p>
                            <div className="flex flex-row text-gray-600 gap-4">
                                <p>Kinshasa</p>
                                <p>A rejoint Twitter en juin 2023</p>
                            </div>
                            <div className="flex flex-row gap-4">
                                <p>{user.followingCount} <span className="text-gray-600">Abonnements</span></p>
                                <p>{user.followersCount} <span className="text-gray-600">Abbonés</span></p>
                            </div>
                        </div>
                    </div>
                }
                <Timeline tweets={tweets} headerType="profile" loading={loading} error={error} onReloadClick={fetchData}></Timeline>
            </div>
            <RightSection></RightSection>
        </div>
    )
}