import { useState } from 'react'
import MenuContainer from './components/menu/MenuContainer'
import './App.css'
import Timeline from './components/timeline/Timeline'

function App() {

  return (
    <>
      <div className='text-textcolor font-twitter w-full flex flex-row justify-center h-full'>
        <MenuContainer></MenuContainer>
        <Timeline></Timeline>
      </div>
    </>
  )
}

export default App
