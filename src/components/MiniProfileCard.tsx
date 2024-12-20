import moreIcon from "/imgs/more.svg"
import Button from "./Button"
import Profile from "./Profile"
import { useEffect, useState } from "react";
import axios from 'axios';
import { User } from "../models/User";
import { Link } from "react-router-dom";
import Loader from "./Loader";

export interface profileInfo {
    userId: number,
    type:string
}

function MiniProfileCard({ userId, type }: profileInfo) {

    const [user, setUser] = useState<User>()

    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    let padding = (type!="menu")? "p-3":"max-[499px]:mb-5 max-[499px]:p-0", 
        profileClass = (type=="menu")? " max-[499px]:absolute max-[499px]:pl-2 max-[499px]:-top-[89.5vh]":"",
        profileNamesClass=(type=="menu")? "hidden xl:flex xl:flex-col":""

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(import.meta.env.VITE_URL_API + `users/${userId}`);
            setUser(response.data)
        } catch (err) {
            setError('Erreur lors de la récupération des données');
        } finally {
            setLoading(false);
        }
    }

    // Utiliser useEffect pour appeler fetchData au chargement du composant
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={`flex flex-row ${padding} ${profileClass} justify-between gap-2 items-center cursor-pointer hover:bg-gray-600 hover:bg-opacity-50 rounded-full transition-all duration-200`}>
            {(loading) ? <Loader /> : (!error) &&
                <div className={`flex flex-row justify-between gap-2 items-center cursor-pointer w-full`}>
                    <div className="flex flex-row gap-2 items-center">
                        <Link to={`/profile/${user?.id}`}><Profile profile={user?.profilePicture}></Profile></Link>
                        <div className={profileNamesClass}>
                            <Link to={`/profile/${user?.id}`} >
                                <p className="flex gap-1 font-bold">{user?.name} {(user?.certified) && <svg fill="currentColor" className="text-blue-500 w-4" viewBox="0 0 22 22" aria-label="Compte certifié" role="img"
                                    data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 
                         1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 
                         1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 
                         1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>} </p>
                            </Link>

                            <p className="text-gray-600 text-sm">{"@" + user?.username}</p>
                        </div>
                    </div>

                    {(user?.id != 1) ? <Button text="Follow" color="white"></Button> : <img className={"w-4 " + profileNamesClass} src={moreIcon} alt="more Icon" />}

                </div>
            }
            {error && <p className="text-red-500">{error}</p>}

        </div>
    )
}

export default MiniProfileCard
