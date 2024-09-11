import { useState } from 'react'
import MenuContainer from './components/menu/MenuContainer'
import './App.css'

function App() {

  return (
    <>
      <div className='text-textcolor font-twitter w-full flex flex-row justify-center'>
        <MenuContainer></MenuContainer>
      </div>
    </>
  )
}

export default App
