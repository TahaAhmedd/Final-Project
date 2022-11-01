import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import dateFormat from 'dateformat'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Modal, ModalClose, Sheet, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import Button from "@mui/joy/Button";
function ShowClientProfile() {
    let [Profile,setProfile] = useState({})
    let [data , setData] = useState([])
    const [oopeen, setOpenUp] = useState(false)
    const [open, setOpen] = useState(false);
    let params = useParams().data
    // console.log(params)

    useEffect(()=>{
        axios.get(`http://localhost:7000/client/clients/${params}`).then(
            (res)=>{
              setProfile(res.data.Data)
              setData(res.data.Data.jobs)
              // console.log(data)
            }
        )
    },[])

      // Style material-ui
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "2px solid #000",
    backgroundColor: "#FFF",
    boxShadow: 24,
    p: 4,
  };
  const styleButton = {
    position:"absolute",
    bottom:"20px",
    left:"20px",
    cursor: "pointer",
    background: "#FFF", 
    color: "#fff",
    borderRadius: "10px",
    borderTop:"3px",
    borderLeft:"10px",
    borderRight:"10px",
    borderWidth: "2px",
    borderColor: "#ffb200",
    color:"#ffb200",
    borderStyle: "solid",
    transitionProperty: "all",
    transitionDuration: ".5s",
    '&:hover': {
      background: "#ffb200",
      color:"#FFF"
   },
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <div className='container' style={{marginTop:"100px"}}>

        <div className="row">
          
          <div className="col-lg-4 col-sm-4">
            <div className="image_profile">
              <img src={Profile.img} />
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
        </div>
    </div>



        
    </>
  )
}

export default ShowClientProfile