import axios from "axios";
import PaypalCheckoutButton from "../../Landing/Payment/PaypalCheckoutButton";
import { useFormik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import dateFormat from "dateformat";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import "./One-section.css";
import { color } from "@mui/system";



// function Pay With Paypal 
function OneSection() {
  const product = {
    description: "Design+Code React Hooks Course",
    price: 150,
  };

  const [open, setOpen] = useState(false); // state with modal

  let token = localStorage.getItem("token");
  let role = localStorage.getItem("snai3yRole");
  let [errflag, setErrflag] = useState(false);

  let Profile = useSelector((state) => state.Snai3yReducer.data); // redux for snai3y Data
  // console.log(Profile.jobs.length)
  // Formik in use add profile pictchre
  const formik = useFormik({
    initialValues: {
      sanai3yImage: "",
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("sanai3yImage", values.photo);

      let header = {
        Authorization: token,
      };
      console.log(values);
      axios
        .post("http://localhost:7000/sanai3y/addimage", formData, {
          headers: header,
        })
        .then((res) => {
          if (res.status == 200) {
            // console.log(res)
            // setFlag(true)
            window.location.reload(true);
          }
        })
        .catch((err) => {
          if (err) {
            setErrflag(true);
          }
        });
    },
  });

  return (
    <>
      <div className="container">
        {Profile && (
          <div
            className="row"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "20px",
            }}
          >
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
                        أضف صورتك الشخصية
                      </Typography>
                      <div>
                        <Typography id="modal-desc" textColor="text.tertiary">
                          {errflag && (
                            <span className="my-4 p-0 d-flex justify-content-center alert alert-danger">
                              هناك خطأ يرجي المحاولة مرة أخري
                            </span>
                          )}

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
                              <button type="submit" disabled={!formik.isValid}>
                                إضافة
                              </button>
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
                        <strong className="ed_text_c">
                          {" "}
                          البريد الالكتروني :
                        </strong>
                        <span className="data_client">
                          <span> {Profile.email}</span>
                        </span>
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-info ed_fonts"></i>
                        <strong className="ed_text_c"> تاريخ التسجيل :</strong>
                        <span className="data_client">
                          <span>
                            {" "}
                            {dateFormat(Profile.joinedDate, "fullDate")}
                          </span>
                        </span>
                      </li>
                      <li>
                        <i className="fa-solid fa-mobile-screen-button ed_fonts"></i>
                        <strong className="ed_text_c"> رقم الهاتف :</strong>
                        <span className="data_client">
                          <span> {Profile.phoneNumber}</span>
                        </span>
                      </li>
                    </div>

                    <div className="col-md-4 col-xl-6">
                      <li>
                      <i class="fa-solid fa-screwdriver-wrench ed_fonts"></i>
                        <strong className="ed_text_c">الحرفة : </strong>
                        <span className="data_client">
                          <span> {Profile.skills}</span>
                        </span>
                      </li>

                      <li>
                        <i className="fa-solid fa-circle-info ed_fonts"></i>
                        <strong className="ed_text_c"> العمر :</strong>
                        <span className="data_client">
                          <span> {Profile.age} </span>
                        </span>
                      </li>
                      <li>
                        <i className="fa-solid fa-location-dot ed_fonts"></i>
                        <strong className="ed_text_c"> العنوان :</strong>
                        <span className="data_client">
                          <span> {Profile.address}</span>
                        </span>
                      </li>
                    </div>
                  </div>
                  <div style={{display:'flex', justifyContent:'space-between'}}>
                  <li style={{borderTop:'2px solid #EEE', paddingTop:'5px'}}>

                <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
                <lord-icon
                src="https://cdn.lordicon.com/uqpazftn.json"
                trigger="loop"
                delay="500"
                colors="primary:#121331,secondary:#ffb200"
                style={{width:'50px',height:'50px'}}>
                </lord-icon>



                    <strong className="ed_text_c">
                      {" "}
                      المتبقي من فرص العمل :
                    </strong>
                    <span className="data_client">
                      <strong>
                        {" "}
                     (   {Profile?.jobcount && Profile.jobcount > 5
                          ? "unlimted"
                          : Profile.jobcount} )
                      </strong>
                    </span>
                  </li>
                  <li>
                  <i class="fa-solid fa-award" style={{paddingTop:10, color:Profile.jobs.length > 3 ? "#ffb200": '#999'}}></i>
                  </li>
                  </div>
                </ul>

                {/* Edite Data In Profile  */}
                <div className="child_edite_in_profile">
                  <i class="fa-solid fa-gear"></i>
                </div>

             
                <PaypalCheckoutButton  product={product} />
               

              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default OneSection;
