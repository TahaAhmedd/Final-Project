import React from 'react'
import './BusinesFaire.css'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Busines_Picture from '../../../images/Profile/n2ash_one.jpg'
function BusinesFaire() {
        return (
                <>
                        <div className="cardinfo3 col-12" id="worke">
                                <div className="container">
                                        <div className="cardinfo3_edit">
                                                <h3 className="special-header"> معرض الاعمال</h3>
                                                <div className="edit">
                                                        <button>
                                                                <i className="fa-solid fa-plus"></i>
                                                                أضافة المزيد
                                                        </button>

                                                </div>
                                        </div>


                                        {/* Slider From Swiper Liprary */}
                                        <Swiper
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
                                                <div className='container '>

                                                        <SwiperSlide>
                                                                <div className="cardWork">
                                                                        <img src={Busines_Picture} alt="" />
                                                                        <div className="info_Card_Work">
                                                                                <h3> التأسيس لدهانات الحائط</h3>
                                                                                <p>افضل ديكور نقاشه بطريقه سهله يتم تنفيذها عن طريق التطبيع بالقماش وهي
                                                                                        ياحدث ديكور نقاشه يمكنك تنفيذه بطريقه سهله وبألوان رائعه ...</p>
                                                                        </div>
                                                                </div>

                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                                <div className="cardWork">
                                                                        <img src={Busines_Picture} alt="" />
                                                                        <div className="info_Card_Work">
                                                                                <h3> التأسيس لدهانات الحائط</h3>
                                                                                <p>افضل ديكور نقاشه بطريقه سهله يتم تنفيذها عن طريق التطبيع بالقماش وهي
                                                                                        ياحدث ديكور نقاشه يمكنك تنفيذه بطريقه سهله وبألوان رائعه ...</p>
                                                                        </div>
                                                                </div>

                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                                <div className="cardWork">
                                                                        <img src={Busines_Picture} alt="" />
                                                                        <div className="info_Card_Work">
                                                                                <h3> التأسيس لدهانات الحائط</h3>
                                                                                <p>افضل ديكور نقاشه بطريقه سهله يتم تنفيذها عن طريق التطبيع بالقماش وهي
                                                                                        ياحدث ديكور نقاشه يمكنك تنفيذه بطريقه سهله وبألوان رائعه ...</p>
                                                                        </div>
                                                                </div>

                                                        </SwiperSlide>
                                                </div>

                                        </Swiper>

                                </div>
                        </div>
                </>
        )
}

export default BusinesFaire


// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// // import required modules
// import { Pagination, Navigation } from "swiper";

// export default function Swiper() {
//         return (
//                 <>

//                 </>
//         );
// }
