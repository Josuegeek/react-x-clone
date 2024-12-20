import moreIcon from "/imgs/more.svg"
import { Tweet } from "../../models/Tweet"
import Profile from "../Profile"
import { useEffect, useState } from "react";
import axios from 'axios';
import { User } from "../../models/User";
import Loader from "../Loader";
import moment from 'moment';
import { Link } from "react-router-dom";

function TweetItem({ createdAt, retweets, likes, comments, numberShare, content, userId, image }: Tweet) {

    const [user, setUser] = useState<User>()

    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)


    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(import.meta.env.VITE_URL_API + `users/${userId}`);
            setUser(response.data);
        } catch (err) {
            setError('Erreur lors de la récupération des données');
        } finally {
            setLoading(false);
        }
    }

    //formater la date
    const formatDate = (date: string) => {
        const now = moment()
        const tweetDate = moment(date)
        const daysDiff = now.diff(tweetDate, 'days')
        const hourDiff = now.diff(tweetDate, 'hours')
        const minDiff = now.diff(tweetDate, 'minutes')

        if (daysDiff <= 2 && daysDiff > 0) {
            return `il y a ${daysDiff} jour${daysDiff > 1 ? 's' : ''}`
        }
        else if (daysDiff < 1 && hourDiff >= 1) {
            return `il y a ${hourDiff} heure${hourDiff > 1 ? 's' : ''}`
        }
        else if (hourDiff < 1 && minDiff >= 1) {
            return `il y a ${minDiff} minute${minDiff > 1 ? 's' : ''}`
        }
        else if (minDiff < 1) {
            return "A l'instant"
        }

        return tweetDate.format('DD MMMM YYYY');
    }

    // Utiliser useEffect pour appeler fetchData au chargement du composant
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="w-full border-b border-b-gray-700">
            {
                (loading) ? <Loader /> :
                    <div className="flex flex-row pl-4 pt-1 pr-4 pb-2 gap-2 w-full border-b border-b-gray-700">
                        <Link to={"/profile/" + userId}>
                            <Profile profile={user?.profilePicture}></Profile>
                        </Link>


                        <div className="flex flex-col gap-1 pr-5">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex items-center flex-wrap gap-1">
                                    <Link to={"/profile/" + userId}><p className="font-bold text-[1.03rem]">{user?.name} </p></Link>

                                    {(user?.certified) && <svg fill="currentColor" className="text-blue-500 w-4" viewBox="0 0 22 22" aria-label="Compte certifié" role="img"
                                        data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 
                         1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 
                         1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 
                         1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>}
                                    <p className="text-gray-600 text-[0.91rem]">@{user?.username} . {formatDate(createdAt)}</p>
                                </div>
                                <img className="w-4" src={moreIcon} alt="more Icon" />
                            </div>
                            <p>{content}</p>
                            {(image) ? <img className="w-full border rounded-3xl" src={image} alt="more Icon" /> : ''}
                            <div className="flex justify-between p-1 ">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 p-2 rounded-full hover:bg-gray-600 hover:bg-opacity-30 cursor-pointer ">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.0459 0.242002L7.89795 0.232002H7.89595C3.52195 0.232002 0.0959473 3.659 0.0959473 8.034C0.0959473 
                                        12.132 3.28195 15.24 7.56095 15.404V19.232C7.56095 19.34 7.60495 19.518 7.68095 19.635C7.82295 19.86 8.06495 
                                        19.982 8.31295 19.982C8.45095 19.982 8.58995 19.944 8.71495 19.864C8.97895 19.696 15.1879 15.724 16.8029 14.358C18.7049 
                                        12.748 19.8429 10.388 19.8459 8.046V8.029C19.8399 3.662 16.4159 0.242002 12.0459 0.241002V0.242002ZM15.8329 13.214C14.6989 
                                        14.174 10.9709 16.619 9.06095 17.857V14.67C9.06095 14.256 8.72595 13.92 8.31095 13.92H7.91495C4.25495 13.92 1.59695 11.444 
                                        1.59695 8.034C1.59695 4.5 4.36495 1.732 7.89695 1.732L12.0439 1.742H12.0459C15.5779 1.742 18.3459 4.508 18.3479 8.038C18.3449 
                                        9.948 17.4059 11.882 15.8339 13.214H15.8329Z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-600 text-sm">{comments}</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 p-2 rounded-full hover:bg-gray-600 hover:bg-opacity-30 cursor-pointer ">
                                        <svg width="16" height="16" viewBox="0 0 24 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.77 12.67C23.478 12.377 23.003 12.377 22.71 12.67L20.49 14.89V4.65C20.49 2.582 18.807 
                                        0.899998 16.74 0.899998H10.89C10.476 0.899998 10.14 1.236 10.14 1.65C10.14 2.064 10.476 2.4 10.89 
                                        2.4H16.74C17.98 2.4 18.99 3.41 18.99 4.65V14.89L16.77 12.67C16.477 12.377 16.002 12.377 15.71 
                                        12.67C15.418 12.963 15.416 13.438 15.71 13.73L19.21 17.23C19.355 17.377 19.547 17.45 19.74 17.45C19.933 
                                        17.45 20.123 17.378 20.27 17.23L23.77 13.73C24.064 13.438 24.064 12.963 23.77 12.67ZM13.11 15.95H7.25997C6.01997 
                                        15.95 5.00997 14.94 5.00997 13.7V3.46L7.22997 5.68C7.37797 5.827 7.56997 5.9 7.76197 5.9C7.95397 5.9 8.14597 
                                        5.827 8.29197 5.68C8.58497 5.387 8.58497 4.912 8.29197 4.62L4.79197 1.12C4.49897 0.825998 4.02397 0.825998 
                                        3.73197 1.12L0.231975 4.62C-0.0620254 4.912 -0.0620254 5.387 0.231975 5.68C0.525975 5.973 0.998975 5.973 1.29197 
                                        5.68L3.51197 3.46V13.7C3.51197 15.768 5.19497 17.45 7.26197 17.45H13.112C13.526 17.45 13.862 17.114 13.862 
                                        16.7C13.862 16.286 13.525 15.95 13.112 15.95H13.11Z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-600 text-sm">{retweets}</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 p-2 rounded-full hover:bg-gray-600 hover:bg-opacity-30 cursor-pointer ">
                                        <svg width="16" height="16" viewBox="0 0 22 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 19.638H10.986C8.40295 19.59 0.949951 12.856 0.949951 6.478C0.949951 3.414 3.47495 
                                        0.723999 6.35295 0.723999C8.64295 0.723999 10.183 2.304 10.999 3.454C11.813 2.306 13.353 0.723999 
                                        15.644 0.723999C18.524 0.723999 21.048 3.414 21.048 6.479C21.048 12.855 13.594 19.589 11.011 
                                        19.636H11V19.638ZM6.35395 2.225C4.27395 2.225 2.45095 4.213 2.45095 6.48C2.45095 12.22 9.48495 
                                        18.076 11.001 18.138C12.519 18.076 19.551 12.221 19.551 6.48C19.551 4.213 17.728 2.225 15.648 
                                        2.225C13.12 2.225 11.708 5.161 11.696 5.19C11.466 5.752 10.54 5.752 10.309 5.19C10.295 5.16 
                                        8.88395 2.225 6.35495 2.225H6.35395Z"/>
                                        </svg>
                                    </div>
                                    <p className="text-gray-600 text-sm">{likes}</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 p-2 rounded-full hover:bg-gray-600 hover:bg-opacity-30 cursor-pointer ">
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.222 7.16H16.888C16.903 7.07 16.916 6.978 16.916 6.883V4.57C16.916 3.59 16.119 2.793 15.138 
                                        2.793H1.5V1.358C1.5 0.944002 1.164 0.608002 0.75 0.608002C0.336 0.608002 0 0.944002 0 1.358V18.83C0 
                                        19.245 0.336 19.58 0.75 19.58C1.164 19.58 1.5 19.245 1.5 18.83V17.396H12.056C13.036 17.396 13.834 
                                        16.599 13.834 15.619V13.306C13.834 13.211 13.82 13.119 13.806 13.028H18.223C19.203 13.028 20.001 
                                        12.23 20.001 11.25V8.94C20.001 7.957 19.204 7.16 18.223 7.16H18.222ZM15.14 4.293C15.292 4.293 
                                        15.417 4.417 15.417 4.57V6.88C15.417 7.034 15.292 7.16 15.139 7.16H1.5V4.29H15.14V4.293ZM12.333 
                                        13.307V15.619C12.333 15.772 12.208 15.896 12.055 15.896H1.5V13.028H12.056C12.209 13.028 12.333 
                                        13.154 12.333 13.308V13.307ZM18.5 11.25C18.5 11.403 18.375 11.527 18.222 11.527H1.5V8.66H18.222C18.375 
                                        8.66 18.5 8.784 18.5 8.937V11.25Z"/>
                                        </svg>
                                    </div>
                                    <p className="text-gray-600 text-sm">{numberShare}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            {error && <p className="text-red-700">{error}</p>}

        </div>
    )
}

export default TweetItem