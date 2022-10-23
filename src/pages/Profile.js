import OneSlider from '../component/Profile/SideparProfile/One-slide'
import TwoSlider from '../component/Profile/SideparProfile/Two-slide'
import OneSection from '../component/Profile/DetailsUser/One-section'
import BusinesFaire from '../component/Profile/BusnisFaire/BusinesFaire';


function Profile() {

    return (

        <div className="profil">
            <div className="container">


                <div className="row my-5">

                    {/* slider */}
                    <div className="col-4 mt-5">
                        <OneSlider /> 
                        <TwoSlider />
                    </div>

                    {/* body */}
                    <div className="col-8 mt-5"> 
                        <OneSection />
                        <BusinesFaire />
                    </div>


                </div>


            </div>
        </div>

    )

}

export default Profile;