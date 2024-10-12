import Header from "./Header"
import TweetEditor from "./TweetEditor"
import profileIcon from "/imgs/profile.svg"
import TweetItem from "../post/TweetComponent"
//import { Tweet } from "../../models/Tweet"
import { useEffect, useState } from "react"
import axios from 'axios'
import Loader from "../Loader"
import { Tweet } from "../../models/Tweet"

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
                {(loading)? <Loader/>: tweets.map((tweet) => (
                    <TweetItem {...tweet}></TweetItem>
                ))}
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    )
}

export default Timeline