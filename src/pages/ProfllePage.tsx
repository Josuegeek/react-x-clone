import { useParams } from "react-router";
import MenuContainer from '../components/menu/MenuContainer'
import Timeline from '../components/timeline/Timeline'
import RightSection from '../components/right-section/RightSection'
import { useEffect, useState } from "react";
import axios from 'axios'
import { Tweet } from "../models/Tweet"
import Button from "../components/Button";
import { Link } from "react-router-dom";


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
        <div className='text-textcolor font-twitter w-full flex flex-row justify-center h-fit gap-2'>
            <MenuContainer></MenuContainer>
            <div className="flex flex-col border-l border-r border-gray-700">
                <div className="flex flex-row h-[3.2rem] items-center ">
                    <Link to="/home" className="p-2 ml-2 cursor-pointer w-fit rounded-full hover:bg-slate-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z" />
                        </svg>
                    </Link>

                </div>
                {user &&
                    <div className="flex flex-col">
                        <img className="w-full h-52" src={user.coverPicture} alt="Photo de couverture" />
                        <div className="flex flex-row relative justify-between pr-5 pl-5">
                            <div className="bg-black p-1 rounded-full -mt-16">
                                <img className="rounded-full" src={user.profilePicture} alt="profile pic" />
                            </div>
                            <Button text="Éditer le profil" color="outlined" fontStyle="font-bold h-fit mt-3">

                            </Button>
                        </div>

                        <div className="flex flex-col gap-2 pl-8 ">
                            <div className="flex flex-col">
                                <p className="font-bold text-[1.6rem] p-0">{user.name}</p>
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