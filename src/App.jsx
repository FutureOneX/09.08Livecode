import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BeerItem from './components/BeerItem/BeerItem'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BeerList from './components/BeerList/BeerList'
import Home from './pages/Home'
import BeerDetail from './components/BeerDetail/BeerDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail/:id' element={<BeerDetail/>} />
        <Route path='/all' element={<BeerList/>} />
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
