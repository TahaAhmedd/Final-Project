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
  let data = useSelector(state => state.Snai3yReducer.data)

  console.log(data)
  // Function Delete Post
  function delet(id) {
    // setData((prev) => prev.filter((item) => item.id != id));
  }


  return (
    <>

      <div className="post" >
        <div className="bolets">
          {/* Button Toggle Bettwen False And True  */}
          {/* {/* <span className="one" onClick={() => showAndHidden()}>
              <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </span> */}
        </div>

        {/* Show And Hidden With Button  */}


        <div className="popup hidd">
          <span>
            <i className="fa-regular fa-floppy-disk"></i>حفظ المنشور
          </span>
          <span>
            <i className="fa-regular fa-flag"></i>ابلاغ عن المنشور
          </span>

          {/* <span onClick={() => delet(data._id)}>
            <i className="fa-regular fa-eye"></i>اخفاء المنشور
          </span> */}
        </div>


        <div className="img_name">
          <div className="images">
            <img src={prfile} alt="" />
          </div>

          <div className="name">
            <span>{`${data.firstName} ${data.lastName}`}</span>
            <span>{dateFormat(data.hiredDate, " h:MM  TT")}</span>
            <span>{data.address}</span>
          </div>
        </div>

        <div className="app_di_img">
          <div className="row p-2 ">
            <div className="dis">
              <p>{data.description} </p>
              <p>
                <strong>العنوان : </strong>
                {/* {data.city} */}
              </p>
              <p>
                عدد الطلبات المقدمه:
                {/* <strong> {data.proposals.length}</strong> */}
              </p>
            </div>

            <div className="col-12 post_image"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="suggestion_me">
              {/* <span>{data.category}</span> */}
              {/* <span>{data.optiontwo}</span> */}
            </div>
          </div>

          <div className="buttons col-6">

            {role == "sanai3y" && <button
              data-bs-toggle="modal"
              // data-bs-target={`#abdo${data._id}`}
              data-bs-whatever="@getbootstrap"
            >
              طلب
            </button>}

          </div>
        </div>

        <div
          className="modal fade"
          // id={`abdo${data._id}`}
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
                    // onChange={}
                    // value={dis}
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
                      // onClick={() => sendid(data._id)}
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

      </div >

    </>
  );
}

export default TalpatSnai3y;
