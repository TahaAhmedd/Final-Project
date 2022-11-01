import './App.css';

import Landing from './pages/Landing';
import Navpar from './component/navpar/Navpar';
import Footer from './component/footer/Footer';
import Register from './component/Account/Register/Register';
import { Route, Routes } from 'react-router-dom';
import AuthGuard from './component/Guard/AuthGuard';
import Login from './component/Account/Login/Login';
import Home from './pages/Home';
import Chat from './component/Chat/Chat'
import Totop from './component/Totop/Totop';
import { useEffect, useState } from 'react';
import Snai3yCardPage from './pages/Snai3yCardPage';
import Addjops from './component/AddJops/Addjops';
import AddjopsIcon_fixed from './component/AddJops/AddjopsIcon_fixed';
import BusinesFaire from './component/ProfileSnai3y/BusnisFaire/BusinesFaire'
import TalpatSnai3y from './component/ProfileSnai3y/Talpat/TalpatSnai3y';
import ProfileSnai3y from './pages/ProfileSnai3y';
import ProfilesClients from './pages/ProfilesClients';
import { getDataClient } from './Redux/Slices/ClientReducer';
import { useDispatch } from 'react-redux';
import { getSnai3y } from './Redux/Slices/Snai3yReducer';
import Showprofile from './component/UserShowProfile/ShowProfile';
import ShowClientProfile from './component/UserShowProfile/ShowClientProfile';
import Notfound from './component/notfound/Notfound';
import Loader from './component/Loader/Loader';
import Terms from './component/Terms/Terms';
function App() {
  let [scroll, setScroll] = useState()
  useEffect(() => { window.addEventListener("scroll", () => { setScroll(window.scrollY) }) }, [])

  const dispatch = useDispatch()
  useEffect(() => {
    // Get Client By Id    
    dispatch(getDataClient())
    dispatch(getSnai3y())
  }, []);


  return (
    <>
      <Navpar />
      <AddjopsIcon_fixed />
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/index' element={<Landing />} />


        <Route path='/profileS' element={<AuthGuard><ProfileSnai3y /></AuthGuard>}>

          <Route index element={<BusinesFaire />} />
          <Route path='one' element={<BusinesFaire />} />
          <Route path='two' element={< TalpatSnai3y />} />

        </Route>

        <Route path='/profileC' element={<AuthGuard><ProfilesClients /></AuthGuard>}></Route>
        <Route path='/home' element={<AuthGuard><Home /></AuthGuard>} />
        <Route path='/chat' element={<AuthGuard><Chat /></AuthGuard>} />
        <Route path='/showprofile/:data' element={<AuthGuard><Showprofile /></AuthGuard>} />
        <Route path='/showprofileC/:data' element={<AuthGuard><ShowClientProfile /></AuthGuard>} />
        <Route path='/allsnai3y' element={<Snai3yCardPage />} />
        <Route path='/addjops' element={<Addjops />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/regiser' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
      {scroll > 400 && <Totop />}
      <Footer />

      
    </>
  );
}

export default App;
