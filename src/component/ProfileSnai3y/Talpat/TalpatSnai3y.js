import "./TalpatSnai3y.css";
// import img from "../../../images/home/postOne.jpg";
import prfile from "../../../images/home/abdelhafez.jpg";
import { useState, useEffect } from "react";
import dateFormat from "dateformat";
import axios from "axios";
import { Snai3ycontext } from "../context";
import { useSelector } from "react-redux";


function TalpatSnai3y() {
  let role = localStorage.getItem("snai3yRole");
  let token = localStorage.getItem("token");
  let d = useSelector(state => state.Snai3yReducer.data)

  let [data,setData] = useState([])
  let headers = {
    'Authorization': token
}
  // console.log(data)
  // Function Delete Post
  
  function showAndHidden(index) {
    data[index].show = !data[index].show;
    setData([...data]);
  }

  function compareId(i) {
    data[i]._id = !data[i]._id;  
    setData([...data])
   
  }

  useEffect(()=>{
    axios.get("http://localhost:7000/sanai3y/jobs",{headers:headers}).then(
      (res)=>{
        // console.log(res)
        setData(res.data.Data)
      }
    )

  },[])
  
  console.log(data)
  return (
    <>
      <div className="parint_snai3y_talpat">
        <div className="containerr">
          {data.map((item, index) => (
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

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TalpatSnai3y;
