import './App.css';

import Landing from './pages/Landing';
import Navpar from './component/navpar/Navpar';
import Footer from './component/footer/Footer';
import Register from './component/Account/Register/Register';
import { Route, Routes } from 'react-router-dom';
import AuthGuard from './component/Guard/AuthGuard';
import Login from './component/Account/Login/Login';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Chat from './component/Chat/Chat'
import Totop from './component/Totop/Totop';
import { useEffect, useState } from 'react';
import Snai3yCardPage from './pages/Snai3yCardPage';
import Addjops from './component/AddJops/Addjops';

function App() {
  
 let [scroll,setScroll]= useState()
 useEffect(()=>{window.addEventListener("scroll",()=>{setScroll(window.scrollY)})} ,[])
  return (
    <>
      <Navpar/>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path='/index' element={<Landing/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/chat' element={<Chat />}/>
        <Route path='/allsnai3y' element={<Snai3yCardPage />}/>
        <Route path='/addjops' element={<Addjops />}/>
        <Route path='/regiser' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      {scroll>400 && <Totop />}
      <Footer/>
    </>
  );
}

export default App;
