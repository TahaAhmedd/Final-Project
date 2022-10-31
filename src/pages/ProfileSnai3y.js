import { Outlet } from 'react-router-dom';
import OneSlider from '../component/ProfileSnai3y/SideparProfile/One-slide'
import TwoSlider from '../component/ProfileSnai3y/SideparProfile/Two-slide'
import OneSection from '../component/ProfileSnai3y/DetailsUser/One-section'


function ProfileSnai3y() {


    return (

        <div className="profil">
            <div className="container">


                <div className="row my-5">

                    {/* slider */}
                    {/* <div className="col-3 mt-5">
                        <OneSlider /> 
                    </div> */}

                    {/* body */}
                    <div className="col-12 mt-5"> 
                        <OneSection/>

                        <div className='row'>
                            <div className='col-3'>
                                <TwoSlider />

                            </div>
                            <div className='col-9'>

                                <Outlet />
                            </div>

                        </div>
                        {/* <BusinesFaire /> */}
                    </div>


                </div>


            </div>
        </div>

    )

}

export default ProfileSnai3y;