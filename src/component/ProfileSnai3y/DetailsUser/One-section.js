import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./One-section.css";

function OneSection() {
  let token = localStorage.getItem("token")
  let role = localStorage.getItem("snai3yRole")
  let [flag,setFlag]=useState(false)

  let data = useSelector(state => state.Snai3yReducer.data) // redux for snai3y Data

  // Formik in use add profile pictchre
  const formik = useFormik({
    initialValues:{
      sanai3yImage:""
    },
    onSubmit:(values)=>{
      const formData = new FormData()
      formData.append('sanai3yImage', values.photo);


      let header={
        "Authorization":token
      }
      console.log(values)
      axios.post("http://localhost:7000/sanai3y/addimage",formData,{headers:header}).then
      ((res)=>{
            if(res == 200){
              // console.log(res)
              // setFlag(true)
            }
      })
      
    }
  });


  return (
    <>
      <div className="app_profil">
        <div className="row">
          <div className="col-4">
            <div className="image_profile">
              <img src={data.img} />
              <div>
                <span>
                  <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
                  <lord-icon
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                    src="https://cdn.lordicon.com/vixtkkbk.json"
                    trigger="hover"
                    colors="primary:#121331,secondary:#ffb200"
                    style={{ width: "50px", height: "50px" }}
                  ></lord-icon>
                </span>
              </div>
            </div>
          </div>

          <div className="col-8">
            <div className="data_profile">
              <h4>{`${data.firstName} ${data.lastName}`}</h4>
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{data.address}</span>
                </li>
                {role == "snai3y" && <li>
                  <i className="fa-solid fa-network-wired"></i>
                  <span> { data.skills}</span>
                </li>}

                <li>
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span>
                    التوصيات :<strong> 12</strong>{" "}
                  </span>
                </li>

              </ul>
              <h6>الوصف المهني</h6>
              <p className="_ditails_snai3y">
                انا المعلم افشه اقوم بتصبليح ودهان ابلشقق والشقف والابواب الخشب
                ودهان والموبليا وتجديد الشقق والبنايات القديمة ودهان المعجون
                وتركيب الجشيبس بورد وهكذا أمور بسيطه
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* add Iamge With User */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header change_">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                اضافة صورة
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">


              <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                  <input
                    type="file"
                    value={formik.values.sanai3yImage}
                      //  onChange={formik.handleChange("sanai3yImage")}
                    
                    name="sanai3yImage"
                    // defaultValue="upload"
                    id="upload-files"
                    accept="image/*"
                    multiple
                    onChange={(e) =>
                     formik.setFieldValue('photo', e.currentTarget.files[0])
                    }
                  />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"
                    aria-label={flag ? "Close":""}>
                    اضافة
                  </button>
                </div>
              </form>


            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default OneSection;
