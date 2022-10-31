import axios from "axios";
import { useEffect, useState } from "react";
// import ProfileClient from "../component/ProfileClient/ProfileClient";
import TalpatSending from "../component/ProfileClient/TalpatSending";
import '../component/ProfileClient/ProfileClient.css'
import dateFormat from "dateformat";
import { useDispatch, useSelector } from "react-redux";
import { getDataClient } from "../Redux/Slices/ClientReducer";
function ProfilesClients() {

  // const [Profile, setProfile] = useState();

  const Profile = useSelector(state => state.ClientReducer.clintdata)
  
  const [JobsClient, setJobsClient] = useState()
  
  return (
    <>
      <div className="container">
      <div className="app_profil_client">
      {Profile && <div className="row">
          
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
        </div>}
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
            <div className="modal-header change_  ed_image_client">
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
              <form>
                <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                اضافة
              </button>
            </div>
          </div>
        </div>
      </div>

      { Profile && <TalpatSending jobs={JobsClient} /> }
      </div>
    </>
  );
}

export default ProfilesClients;
