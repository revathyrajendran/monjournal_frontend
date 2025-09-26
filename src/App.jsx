import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Diary from './Pages/Diary'
import { Route, Routes } from 'react-router-dom'
import Write from './Pages/Write'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/mydiary'} element={<Diary/>}/>
      <Route path={'/write'} element={<Write/>}/>
      
    </Routes>
     <Footer/>
    
      
    </>
  )
}

export default App
