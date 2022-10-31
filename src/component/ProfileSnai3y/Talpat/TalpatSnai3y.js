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
    axios.get("http://localhost:7000/sanai3y/proposals",{headers:headers}).then(
      (res)=>{
        console.log(res)
        setData(res.data.Data)
      }
    )
  },[])

  return (
    <>
      <div className="parint_snai3y_talpat">
        <div className="containerr">
          {data.map((item, index) => (
            <div className="box" key={index}>
              <span className="badge badge-danger status">pending</span>
              <h1>{`${d.firstName} ${d.lastName}`}</h1>
              <span className="city">{d.skills}</span>
              <p>{item.sanai3yProposal}</p>
              <span className="category">{d.category}</span>
              <span className="ellipsis" onClick={() => compareId(index)}>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
              </span>
              <h1>{d.show}</h1>
              {/* Start ellipsis Option  */}
              {!item._id && (
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
              )}
              {/* End ellipsis Option  */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TalpatSnai3y;
