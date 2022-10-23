import About from '../component/Landing/AboutUs/About'
import Contuctus from '../component/Landing/ContuctUs/Contuctus'
import Header from '../component/Landing/Header/Header'
import Payment from '../component/Landing/Payment/Payment'
import Services from '../component/Landing/services/Services'
import Whyus from '../component/Landing/WhyUs/Whyus'

function Landing(){
    return(
        <>
            <Header/>
            <Services/>
            <Whyus/>
            <Payment/>
            <About/>
            <Contuctus/>
        </>
    )
}

export default Landing