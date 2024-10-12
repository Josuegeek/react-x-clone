import Header from "./Header"
import TweetEditor from "./TweetEditor"
import profileIcon from "/imgs/profile.svg"
import TweetItem from "../post/TweetComponent"
//import { Tweet } from "../../models/Tweet"
import { useEffect, useState } from "react"
import axios from 'axios'
import Loader from "../Loader"
import { Tweet } from "../../models/Tweet"
import Button from "../Button"

interface TimelineProps{
    tweetss?:Tweet[]
    headerType?:string
}

function Timeline({tweetss, headerType}:TimelineProps) {

    const [tweets, setTweets] = useState<any[]>([])
    //const [sortedTweets, setSortedTweets] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchData = async () => {
        setLoading(true); // Commencer le chargement
        setError(null); // Réinitialiser l'erreur
        console.log(tweetss)
        try {
            const response = await axios.get(import.meta.env.VITE_URL_API +`tweets`);
            //setTweets(response.data); // Mettre à jour les données
            setTweets(response.data.sort((a:Tweet, b:Tweet) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
        } catch (err) {
            setError('Erreur lors de la récupération des données'); // Gérer l'erreur
        } finally {
            setLoading(false); // Terminer le chargement
        }
    }

    // Utiliser useEffect pour appeler fetchData au chargement du composant
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col relative max-w-2xl border-l border-r border-gray-700 timeline h-[100vh] 
        overflow-y-scroll hide-scrollbar max-[499px]:w-full max-[499px]:border-none">

            <div className="flex flex-col flex-1 overflow-y-auto hide-scrollbar max-[499px]:mb-20">
                <Header headerType="home"></Header>
                <TweetEditor profile={"https://randomuser.me/api/portraits/men/3.jpg"}></TweetEditor>
                {(loading)? <Loader/> : (!error) && tweets.map((tweet) => (
                    <TweetItem {...tweet}></TweetItem>
                ))}
                {error && 
                    <div className="w-full flex flex-col gap-3 items-center">
                        <p className="text-red-500 p-4 w-full text-center">{error}</p>
                        <Button text="Actualiser" color="primary" onClick={fetchData} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
                                                                                                <path fill="currentColor"
                                                                                                    d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8s3.663-8 
                                                                                                    8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10"/>
                                                                                            </svg>}/>
                    </div>
                }    
            </div>
        </div>
    )
}

export default Timeline