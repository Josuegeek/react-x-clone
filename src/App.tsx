import { useState } from 'react'
import MenuContainer from './components/menu/MenuContainer'
import './App.css'
import Timeline from './components/timeline/Timeline'
import RightSection from './components/right-section/RightSection'

function App() {

  return (
    <>
      <div className='text-textcolor font-twitter w-full flex flex-row justify-center h-fit gap-2'>
        <MenuContainer></MenuContainer>
        <Timeline></Timeline>
        <RightSection></RightSection>
      </div>
    </>
  )
}

export default App
