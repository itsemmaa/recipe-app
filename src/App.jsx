import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import DropdownMenu from './components/DropdownMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Searchbar/>
      <DropdownMenu/>
    </>
  )
}

export default App
