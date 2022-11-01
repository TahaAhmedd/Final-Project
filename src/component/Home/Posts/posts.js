import "./posts.css";
import img from "../../../images/home/postOne.jpg";
import prfile from "../../../images/home/abdelhafez.jpg";
import { useState, useEffect } from "react";
import dateFormat, { masks } from "dateformat";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { NavLink } from "react-router-dom";
function Posts({ datas }) {
  let role = localStorage.getItem("snai3yRole");
  let token = localStorage.getItem("token");
  const [data, setData] = useState(datas)
  console.log(data)
  useEffect(() => {
    setData(datas)
  }, [datas])
  
  // Hidden of jops
  function showAndHidden(index) {
    data[index].show = !data[index].show;
    setData([...data]);
  }
  // Function Delete Post
  function delet(id) {
    setData((prev) => prev.filter((item) => item.id != id));
  }

  const [dis , setDis] = useState("")

  function disChange(event){
    setDis(event.target.value)
    // console.log(dis)
  }

  let headers={
      'Authorization': token
  }
  function sendid (id){
    let body ={
      sanai3yProposal: dis
    }
    console.log(body)
    axios.put(`http://localhost:7000/jobs/addproposal/${id}`,body,{headers:headers})
    .then(res=>{
      console.log(res)
    })
  }
  return (
    <>
      {data.map((data, index) => (
        <div className="post" key={index}>
          <div className="bolets">
            {/* Button Toggle Bettwen False And True  */}
            <span className="one" onClick={() => showAndHidden(index)}>
              <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </span>
          </div>

          {/* Show And Hidden With Button  */}
          {data.show && (
            <div className="popup hidd">
              <span>
                <i className="fa-regular fa-floppy-disk"></i>حفظ المنشور
              </span>
              <span>
                <i className="fa-regular fa-flag"></i>ابلاغ عن المنشور
              </span>

              <span onClick={() => delet(data._id)}>
                <i className="fa-regular fa-eye"></i>اخفاء المنشور
              </span>
            </div>
          )}
            <NavLink to={`/showprofileC/${data._id}`}>

              <div className="img_name">
                <div className="images">
                  {/* <img src={data.clintId.img} alt="" /> */}
                </div>

                <div className="name">
                  {/* <span>{`${data.clintId.firstName} ${data.clintId.lastName}`}</span> */}
                  <span>{dateFormat(data.hiredDate, " h:MM  TT")}</span>
                  {/* <span>{data.adressuder}</span> */}
                </div>
              </div>
            </NavLink>


          <div
            className="app_di_img"
            data-bs-toggle="modal"
            data-bs-target={`#Taha${data._id}`}
          >
            <div className="row p-2 ">
              <div className="dis">
                <strong>{data.title} </strong>
                <p>{data.description}</p>
                <p>
                  <strong>العنوان : </strong>
                  {data.city}
                </p>
                <p>
                  عدد الطلبات المقدمه:
                  <strong> 
                    {data.proposals.length}
                  </strong>
                </p>
              </div>

              <div className="col-12 post_image"></div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="suggestion_me">
                <span>{data.category}</span>
                {/* <span>{data.optiontwo}</span> */}
              </div>
            </div>

            <div className="buttons col-6">

              {role == "sanai3y" && <button
                data-bs-toggle="modal"
                data-bs-target={`#abdo${data._id}`}
                data-bs-whatever="@getbootstrap"
              >
                طلب
              </button>}

            </div>
          </div>

          <div
            className="modal fade"
            id={`abdo${data._id}`}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header mode_me">
                  <h5 className="modal-title" id="exampleModalLabel">
                    تفاصيل الطلب{" "}
                  </h5>
                </div>
                <div className="modal-body">

                  {/* Add probosal Form */}
                  <form >
                    <div className="mb-3">
                      <label
                        htmlFor="message-text"
                        className="col-form-label label_me"
                      >
                        ( وقت البدء - المتطلبات لتنفيذ العمل - وقت التنفيذ )
                      </label>
                      <textarea
                        className="form-control"
                        id="message-text"
                        name="description"
                        onChange={disChange}
                        value={dis}
                      ></textarea>
                    </div>
                  



                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary close_me"
                    data-bs-dismiss="modal"
                  >
                    اغلاق
                  </button>
                  <button
                    onClick={()=> sendid(data._id) }
                    type="button"
                    className="btn btn-primary button_me test"
                  >
                    ارسال الطلب
                  </button>


                </div>
                </form>
                </div>
              </div>
            </div>
          </div>

          {/* Show Details */}
          <div
            className="modal modal-xl fade"
            id={`Taha${data._id}`}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header edit_header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    التفاصيل حول العمل
                  </h1>

                  <button
                    type="button"
                    className="btn-close edit_close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body">
                  {/* data Snai3y In Details */}
                  <div className="some_edit_about_snai3y">
                    <div className="row">
                      <div className="col-1">
                        <div className="edit_image_about_job">
                          <img src={prfile} />
                        </div>
                      </div>

                      <div className="col-5 p-0">
                        <div className="edit_data_about_job">
                          <h5>{`${data.firstName} ${data.lastName}`}</h5>
                          <p>اسوان</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="card p-0 ">
                      <div className=" g-0 px-3 py-2">
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">
                              {data.description}
                            </p>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-6">
                              <img className="img-thumbnail" src={data.images} alt="" />
                            </div>
                            {/* <div className="col-6">
                              <img className="img-thumbnail" src={data.images} alt="" />
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer edit_footer_job p-0">
                  <button
                    type="button"
                    className="btn btn-secondary edit_close_button"
                    data-bs-dismiss="modal"
                  >
                    اغلاق
                  </button>

                  {role == "snai3y" && <button
                    type="button"
                    className="btn btn-primary edit_button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@getbootstrap"
                  >
                    طلب
                  </button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;
