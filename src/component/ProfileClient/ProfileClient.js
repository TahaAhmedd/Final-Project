// import { useEffect, useState } from 'react';
// import dateFormat from "dateformat";

// import './ProfileClient.css'

// function ProfileClient({prop}) {
 
//     const [Profile, setProfile] = useState({})

//     useEffect(() => {

//       setProfile(prop)
  
      
//       console.log(Profile.firstName)
//     }, [])
   
//   return (
//     <>
   
//       <div className="app_profil_client">
//         <div className="row">
//           <div className="col-4">
//             <div className="image_profile">
//               <img src={'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png'} />
//               <div>
//                 <span>
//                   <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
//                   <lord-icon
//                     data-bs-toggle="modal"
//                     data-bs-target="#exampleModal"
//                     src="https://cdn.lordicon.com/vixtkkbk.json"
//                     trigger="hover"
//                     colors="primary:#121331,secondary:#ffb200"
//                     style={{ width: "50px", height: "50px" }}
//                   ></lord-icon>
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="col-8">
//             <div className="data_profile_client">
//            {/* { Profile  && <h4>{Profile.firstName}</h4> } */}
//               <ul>
//                 <li>
//                 <i class="fa-solid fa-at ed_fonts"></i>
//                   <span className='ed_text_c'> البريد الالكتروني :</span>
//                   <span><strong> {Profile.email} </strong></span>
//                 </li>
//                 <li>
//                 <i class="fa-solid fa-location-dot ed_fonts"></i>
//                   <span className='ed_text_c'> العنوان :</span>
//                   <span><strong> {Profile.address}</strong></span>

//                 </li>
//                 <li>
//                 <i class="fa-solid fa-mobile-screen-button ed_fonts"></i>
//                   <span className='ed_text_c'> رقم الهاتف :</span>
//                   <span><strong> {Profile.phoneNumber}</strong></span>

//                 </li>
//                 <li>
//                 <i class="fa-solid fa-circle-info ed_fonts"></i>
//                   <span className='ed_text_c'> العمر :</span>
//                   <span><strong> {Profile.age} </strong></span>

//                 </li>
//                 <li>
//                 <i class="fa-solid fa-circle-info ed_fonts"></i>
//                   <span className='ed_text_c'> تاريخ التسجيل :</span>
//                   <span><strong> {dateFormat(Profile.joinedDate, "fullDate")}</strong></span>

//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* add Iamge With User */}
//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header change_">
//               <h1 className="modal-title fs-5" id="exampleModalLabel">
//                 اضافة صورة
//               </h1>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>

//             <div className="modal-body">
//               <form>
//                 <div className="mb-3">
//                   <input
//                     type="file"
//                     className="form-control"
//                     id="recipient-name"
//                   />
//                 </div>
//               </form>
//             </div>

//             <div className="modal-footer">
//               <button type="button" className="btn btn-primary">
//                 اضافة
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // export default ProfileClient;
