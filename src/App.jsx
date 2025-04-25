
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Watchhistory from './Pages/Watchhistory'
import Home from './Pages/Home'
import Landingpage from './Pages/Landingpage'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
     <Header/>
<Routes>
<Route path='/' element={<Landingpage/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/watch-history' element={<Watchhistory/>}/>






</Routes>

     <Footer/>
    </>
  )
}

export default App
