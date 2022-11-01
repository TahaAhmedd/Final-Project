import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import dateFormat from 'dateformat'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function ShowClientProfile() {
    let [Profile,setProfile] = useState({})
    let params = useParams().data
    console.log(params)

    useEffect(()=>{
        axios.get(`http://localhost:7000/client/clients/${params}`).then(
            (res)=>{
                console.log(res)
                setProfile(res.data.Data)
            }
        )
    },[])

  return (
    <>
    <div className='container' style={{marginTop:"100px"}}>

        {/* <div className="row">
          
          <div className="col-lg-4 col-sm-4">
            <div className="image_profile">
              <img src={'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png'} />
              <div>
                <span>
                  <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
                  <lord-icon
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    src="https://cdn.lordicon.com/vixtkkbk.json"
                    trigger="hover"
                    colors="primary:#121331,secondary:#ffb200"
                    style={{ width: "50px", height: "50px" }}
                  ></lord-icon>
                </span>
              </div>
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
                <i className="fa-solid fa-mobile-screen-button ed_fonts"></i>
                  <span className='ed_text_c'> رقم الهاتف :</span>
                  <span className="data_client"><strong> {Profile.phoneNumber}</strong></span>

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
            </div>
          </div>
        </div> */}
    </div>



        <div className='container'> {/* Talpat */}
        <div className="box" >

              <span className="badge badge-danger status">pending</span>
              {/* <h1>{d.title}</h1> */}
              {/* <span className="city">{d.city}</span> */}
              {/* <p>{d.description}</p> */}
              {/* <span className="category">{d.category}</span> */}
              {/* <span className="ellipsis" onClick={() => compareId(index)}> */}
                {/* <i className="fa fa-ellipsis-h" aria-hidden="true"></i> */}
              {/* </span> */}
              {/* <h1>{d.show}</h1> */}

              {/* Start ellipsis Option  */}
              {/* {d.show && (
                <div className="popup hidd">
                  <span  data-toggle="modal" data-target="#exampleModal">
                    <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
                    <lord-icon
                      src="https://cdn.lordicon.com/wloilxuq.json"
                      trigger="loop"
                      delay="500"
                      colors="primary:#121331,secondary:#ffb200"
                      style={{ width: "30px", height: "30px" }}
                    ></lord-icon>
                    تعديل
                  </span>
                  <span>
                    <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
                    <lord-icon
                      src="https://cdn.lordicon.com/gsqxdxog.json"
                      trigger="loop"
                      delay="500"
                      colors="primary:#121331,secondary:#ffb200"
                      style={{ width: "30px", height: "30px" }}
                    ></lord-icon>
                    حزف المنشور
                  </span>
                </div>
              )} */}
              {/* End ellipsis Option  */}
            </div>
        </div>
    </>
  )
}

export default ShowClientProfile