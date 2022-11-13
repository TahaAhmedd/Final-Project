import "./TalpatSnai3y.css";
// import img from "../../../images/home/postOne.jpg";
import prfile from "../../../images/home/abdelhafez.jpg";
import { useState, useEffect } from "react";
import dateFormat from "dateformat";
import axios from "axios";
import { Snai3ycontext } from "../context";
import { useSelector } from "react-redux";
import Notfind from "../../notfind/Notfind";


function TalpatSnai3y() {
  let role = localStorage.getItem("snai3yRole");
  let token = localStorage.getItem("token");
  let d = useSelector(state => state.Snai3yReducer.data)

  let [data,setData] = useState([])
  let headers = {
    'Authorization': token
}

  useEffect(()=>{
    axios.get("http://localhost:7000/sanai3y/jobs",{headers:headers}).then(
      (res)=>{
        console.log(res.data.Data)
        setData(res.data.Data)

      }
    )

  },[])

  function compeleteJob(){
    axios.put("http://localhost:7000/sanai3y/jobcompelete",{},{headers:headers}).then(
      (res)=>{
        console.log(res)
        if(res.status == 200){
          console.log("succes")
        }
      }
    ).catch((err)=> console.log(err))
  }
  // console.log(data)
  return (
    <>
      <div className="parint_snai3y_talpat">
        <div className="containerr">
          {data.length > 0 && data.map((item, index) => (
            <div className="box" key={index}>
              <div className="container_image_and_name_client">
                <div className="images_client">
                  <img src={item.clientData.img} alt="" />
                </div>
                <div className="data_client">
                  <h1>{`${item.clientData.firstName} ${item.clientData.lastName}`}</h1>
                  <span className="city" style={{ paddingRight: "10px" }}>
                    {item.city}
                  </span>
                </div>
              </div>

              <div className="conatiner-body_post_client">
                <p>{item.description}</p>
                
                <div className="proposels_sanai3y">
                <p>طلبك المقدم</p>
                  {item.proposals.map((one) => (
                    <span>
                      {one.sanai3yProposal}
                    </span>                
                  ))}
                </div>

              </div>
              <div className="d-flex justify-content-end">
                <button onClick={compeleteJob} className={item.status == "compelete"?"btn btn-secondary": "finish_btn"}>
                  تم الانتهاء
                  {item.status == "compelete" &&<i class="fa-solid fa-lock me-1" style={{color:"#000"}}></i>}
                </button>
              </div>
            </div>
          ))}
        </div>
        {data.length == 0 && <Notfind data={"لاتوجد طلبات مقدمة"}/>}
      </div>
    </>
  );
}

export default TalpatSnai3y;
