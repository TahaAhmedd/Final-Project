import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import dateFormat from "dateformat";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Notfind from '../notfind/Notfind';

function Showprofile(props) {

  // let Profile = useSelector((state) => state.Snai3yReducer.data)
  let params = useParams().data
  let [Profile, setProfile] = useState({})
  let [photo, setPhoto] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:7000/sanai3y/sanai3ies/${params}`)
      .then((res) => {
        // console.log(res.data.Data.workStore)
        setPhoto(res.data.Data.workStore)
        setProfile(res.data.Data)
      })

      window.scrollY=0;
  }, [])


  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        {Profile && <div className="row" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding: "20px" }}>

          <div className="col-lg-4 col-sm-4">
            <div className="image_profile">
              <img src={Profile.img} />
            </div>
          </div>

          <div className="col-lg-8  col-sm-8">
            <div className="data_profile_client">
              <h4>{Profile.firstName + " " + Profile.lastName}</h4>
              <ul>
                <li>
                  <i className="fa-solid fa-at ed_fonts"></i>
                  <span className='ed_text_c'> البريد الالكتروني :</span>
                  <span className="data_client"><strong> {Profile.email}</strong></span>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot ed_fonts"></i>
                  <span className='ed_text_c'> العنوان :</span>
                  <span className="data_client"><strong> {Profile.address}</strong></span>

                </li>
                <li>
                <i class="fa-solid fa-screwdriver-wrench ed_fonts"></i>
                  <span className='ed_text_c'>الحرفة :</span>
                  <span className="data_client"><strong> {Profile.skills}</strong></span>

                </li>
                <li>
                  <i className="fa-solid fa-circle-info ed_fonts"></i>
                  <span className='ed_text_c'> العمر :</span>
                  <span className="data_client"><strong> {Profile.age} </strong></span>

                </li>
                <li>
                  <i className="fa-solid fa-circle-info ed_fonts"></i>
                  <span className='ed_text_c'> تاريخ التسجيل :</span>
                  <span className="data_client"><strong> {dateFormat(Profile.joinedDate, "fullDate")}</strong></span>

                </li>
              </ul>


            </div> {/* end Div Ul */}

          </div>

        </div>} {/* end parint details */}
      </div> {/* end Div Container */}


      <div className='container'>
        <div className="cardinfo3 col-12" id="worke">
          <div className="container">
            <div className="cardinfo3_edit justify-content-center">
              <h3 className="special-header text-center"> معرض الاعمال</h3>
            </div>


            {/* Slider From Swiper Liprary */}
           {photo.length > 0 && <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >

              {photo.map((item, index) =>

                <SwiperSlide key={index}>
                  <div className="cardWork">

                    <div className='cardWork_img'>
                      <img src={item.img} alt="" />
                    </div>

                    <div className="info_Card_Work">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>

                  </div>

                </SwiperSlide>
              )}


            </Swiper>}
              { photo.length == 0 &&<Notfind data={"لايوجد صور حاليا"}/>}
          </div>
        </div>
      </div>



    </>
  )
}

export default Showprofile