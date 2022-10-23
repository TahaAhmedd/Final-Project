import './About.css'
import Carousel from '../../../images/landing/whyus.jpg'
import axios from 'axios'
import { useEffect, useState } from 'react'
function About() {
    let [crafts, setCrafts] = useState([])
    useEffect(()=>{
    
        axios.get("http://localhost:7000/sanai3y/all").then((res) => {
        // console.log(res.data.Data)
        let x= res.data.Data
        // let arr =[]
        // arr.push(x[1])
        // arr.push(x[2])
        // arr.push(x[4])
        // console.log()
        setCrafts(x.slice(-3))
        // console.log(crafts)
    })
    },[])
    return (
        <div>
            <div className='AboutUs'>
                <div className='OverLay'></div>
                <h2 className='About_Title'>
                    أحدث الحرفين
                </h2>
                <div className='container AboutUs_content'>
                    <div className='row parent_aboutUs'>
                    {crafts.map((item ,index) =>  
                        <div className='card_About col-lg-4 col-md-12' key={index}>
                            <div className='img_About'>
                                <img src={Carousel}></img>
                            </div>

                            <div className='About_name'>
                                <h5>{`${item.firstName} ${item.lastName}`}</h5>
                                <p> {item.skills}</p>
                            </div>
                        </div>

                    )}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default About