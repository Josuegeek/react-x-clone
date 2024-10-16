import { useParams } from "react-router";
import MenuContainer from '../components/menu/MenuContainer'
import Timeline from '../components/timeline/Timeline'
import RightSection from '../components/right-section/RightSection'
import { useEffect, useState } from "react";
import axios from 'axios'
import { Tweet } from "../models/Tweet"


export default function Profile() {
    const { username } = useParams()

    const [tweets, setTweets] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchData = async () => {
        setLoading(true) // Commencer le chargement
        //setReload(true)
        setError(null) // Réinitialiser l'erreur
        console.log(tweets)
        try {
            const response = await axios.get(import.meta.env.VITE_URL_API +`tweets?userId=${username}`);
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
            {username}
            <Timeline tweets={tweets} headerType="profile" loading={loading} error={error} onReloadClick={fetchData}></Timeline>
            <RightSection></RightSection>
        </div>
    )
}