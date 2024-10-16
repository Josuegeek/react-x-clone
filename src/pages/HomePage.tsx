import MenuContainer from '../components/menu/MenuContainer'
import Timeline from '../components/timeline/Timeline'
import RightSection from '../components/right-section/RightSection'
import { useEffect, useState } from "react";
import axios from 'axios'
import { Tweet } from "../models/Tweet"


export default function Home(){

    const [tweets, setTweets] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchData = async () => {
        setLoading(true) // Commencer le chargement
        //setReload(true)
        setError(null) // Réinitialiser l'erreur
        console.log(tweets)
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

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className='text-textcolor font-twitter w-full flex flex-row justify-center h-fit gap-2'>
            <MenuContainer></MenuContainer>
            <Timeline loading={loading} tweets={tweets} error={error} onReloadClick={fetchData} headerType='home'></Timeline>
            <RightSection></RightSection>
        </div>
    )
}