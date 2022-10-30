import { Outlet } from 'react-router-dom';
import OneSlider from '../component/ProfileSnai3y/SideparProfile/One-slide'
import TwoSlider from '../component/ProfileSnai3y/SideparProfile/Two-slide'
import OneSection from '../component/ProfileSnai3y/DetailsUser/One-section'
import {  useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {  getSnai3y } from '../Redux/Slices/Snai3yReducer';


function ProfileSnai3y() {
    
    const dispatch = useDispatch()
    

    // useEffect(()=>{
        
    //     dispatch(getSnai3y())
    // },[])



    return (

        <div className="profil">
            <div className="container">


                <div className="row my-5">

                    {/* slider */}
                    <div className="col-3 mt-5">
                        <OneSlider /> 
                        <TwoSlider />
                    </div>

                    {/* body */}
                    <div className="col-9 mt-5"> 
                        <OneSection/>
                        {/* <BusinesFaire /> */}
                        <Outlet />
                    </div>


                </div>


            </div>
        </div>

    )

}

export default ProfileSnai3y;