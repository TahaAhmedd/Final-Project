import axios from "axios";
import { useEffect, useState } from "react";
import TalpatSending from "../component/ProfileClient/TalpatSending";
import "../component/ProfileClient/ProfileClient.css";
import dateFormat from "dateformat";
import { useFormik } from "formik";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import Modal from "@mui/joy/Modal";
import Button from "@mui/joy/Button";
import { useDispatch, useSelector } from "react-redux";
import { getDataClient } from "../Redux/Slices/ClientReducer";

function ProfilesClients() {
  const [open, setOpen] = useState(false);
  let token = localStorage.getItem("token");

  const Profile = useSelector((state) => state.ClientReducer.clintdata);
  // console.log(Profile.jobs)
  // Formik in use add profile pictchre
  const formik = useFormik({
    initialValues: {
      clientImage: "",
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("clientImage", values.photo);

      let header = {
        Authorization: token,
      };
      console.log(values);
      axios
        .post("http://localhost:7000/client/addimage", formData, {
          headers: header,
        })
        .then((res) => {
          if (res.status == 200) {
            // console.log(res)
            // setFlag(true)
            window.location.reload(true);
          }
        });
    },
  });

  return (
    <>
      <div className="container">
        <div className="app_profil_client">
          {Profile && (
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="image_profile">
                  <img src={Profile.img} />
                  <span className="text-center">
                    <Button
                      variant=""
                      color="neutral"
                      onClick={() => setOpen(true)}
                    >
                      <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
                      <lord-icon
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        src="https://cdn.lordicon.com/vixtkkbk.json"
                        trigger="hover"
                        colors="primary:#121331,secondary:#ffb200"
                        style={{ width: "50px", height: "50px" }}
                      ></lord-icon>
                    </Button>
                  </span>
                  <div>
                    <Modal
                      aria-labelledby="modal-title"
                      aria-describedby="modal-desc"
                      open={open}
                      onClose={() => setOpen(false)}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#ffffff1a",
                        backdropFilter: "blur(2px) ",
                      }}
                    >
                      <Sheet
                        variant="outlined"
                        sx={{
                          maxWidth: 500,
                          borderRadius: "md",
                          p: 3,
                          boxShadow: "lg",
                          backgroundColor: "#fff",
                        }}
                      >
                        <ModalClose
                          variant="outlined"
                          sx={{
                            top: "calc(-0.1/4 * var(--IconButton-size))",
                            right: "calc(-1/15 * var(--IconButton-size))",
                            boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                            borderRadius: "50%",
                            bgcolor: "background.body",
                          }}
                        />
                        <Typography
                          component="h2"
                          id="modal-title"
                          level="h4"
                          textColor="inherit"
                          fontWeight="lg"
                          mb={1}
                          className="titleForm_Snai3y"
                        >
                          أضافة صورة شخصية{" "}
                        </Typography>
                        <div>
                          <Typography id="modal-desc" textColor="text.tertiary">
                            <form
                              onSubmit={formik.handleSubmit}
                              className="Add_image_snai3y"
                              encType="multipart/form-data"
                            >
                              <input
                                type="file"
                                accept="image/*"
                                // defaultValue="ubload"
                                name="workImage"
                                // value={formik.values.workImage}
                                onChange={(e) =>
                                  formik.setFieldValue(
                                    "photo",
                                    e.currentTarget.files[0]
                                  )
                                }
                              ></input>

                              <div className="w-100 mt-3 text-start">
                                <button type="submit">إضافة</button>
                              </div>
                            </form>
                          </Typography>
                        </div>
                      </Sheet>
                    </Modal>
                  </div>
                </div>
              </div>

              <div className="col-lg-8  col-sm-12">
                <div className="data_profile_client test">
                  <h4>{Profile.firstName + " " + Profile.lastName}</h4>
                  <ul>
                    <div className="row">
                    <div className="col-md-8 col-xl-6 bordr_box_data">
                    <li>
                      <i className="fa-solid fa-at ed_fonts"></i>
                      <strong className="ed_text_c"> البريد الالكتروني :</strong>
                      <span className="data_client">
                        <span> {Profile?.email}</span>
                      </span>
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-info ed_fonts"></i>
                      <strong className="ed_text_c"> تاريخ التسجيل :</strong>
                      <span className="data_client">
                        <span>
                          {" "}
                          {dateFormat(Profile?.joinedDate, "fullDate")}
                        </span>
                      </span>
                    </li>
                    <li>
                    <i className="fa-solid fa-circle-info ed_fonts"></i>
                      <strong className="ed_text_c">الرقم القومي :</strong>
                      <span className="data_client">
                        <span> {Profile?.nationalId}</span>
                      </span>
                    </li>
                    <li>
                      <i className="fa-solid fa-mobile-screen-button ed_fonts"></i>
                      <strong className="ed_text_c"> رقم الهاتف :</strong>
                      <span className="data_client">
                        <span> {Profile?.phoneNumber}</span>
                      </span>
                    </li>
                    </div>

                    <div className="col-md-4 col-xl-6">

                    <li>
                      <i className="fa-solid fa-location-dot ed_fonts"></i>
                      <strong className="ed_text_c"> العنوان :</strong>
                      <span className="data_client">
                        <span> {Profile?.address}</span>
                      </span>
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-info ed_fonts"></i>
                      <strong className="ed_text_c"> العمر :</strong>
                      <span className="data_client">
                        <span> {Profile?.age} </span>
                      </span>
                    </li>
                    </div>
                    </div>
                  </ul>

                {/* Edite Data In Profile  */}
                <div className="child_edite_in_profile">
                  <i class="fa-solid fa-gear"></i>
                </div>
                <div>
                  عدد المنشورات 
                (   {Profile?.jobs?.length})
                   </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div style={{ backgroundColor: "#eee", marginTop: "50px" }}>
          <TalpatSending />
        </div>
      </div>
    </>
  );
}

export default ProfilesClients;
