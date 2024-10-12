import { useParams } from "react-router";
import MenuContainer from '../components/menu/MenuContainer'
import Timeline from '../components/timeline/Timeline'
import RightSection from '../components/right-section/RightSection'
import { useState } from "react";

export default function Profile(){
    const {username} = useParams()

    const [tweets, setTweets]=useState<any[]>([])

    

    return (
        <div className='text-textcolor font-twitter w-full flex flex-row justify-center h-fit gap-2'>
            <MenuContainer></MenuContainer>
            {username}
            <RightSection></RightSection>
        </div>
    )
}