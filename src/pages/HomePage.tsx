import MenuContainer from '../components/menu/MenuContainer'
import Timeline from '../components/timeline/Timeline'
import RightSection from '../components/right-section/RightSection'


export default function Home(){
    return (
        <div className='text-textcolor font-twitter w-full flex flex-row justify-center h-fit gap-2'>
            <MenuContainer></MenuContainer>
            <Timeline headerType='home'></Timeline>
            <RightSection></RightSection>
        </div>
    )
}