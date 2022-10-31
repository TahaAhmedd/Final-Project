import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import dateFormat from "dateformat";
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import "./One-section.css";

function OneSection() {
  const [open, setOpen] = useState(false); // state with modal

  let token = localStorage.getItem("token")
  let role = localStorage.getItem("snai3yRole")
  let [flag, setFlag] = useState(false)

  let Profile = useSelector(state => state.Snai3yReducer.data) // redux for snai3y Data

  // Formik in use add profile pictchre
  const formik = useFormik({
    initialValues: {
      sanai3yImage: ""
    },
    onSubmit: (values) => {
      const formData = new FormData()
      formData.append('sanai3yImage', values.photo);


      let header = {
        "Authorization": token
      }
      console.log(values)
      axios.post("http://localhost:7000/sanai3y/addimage", formData, { headers: header }).then
        ((res) => {
          if (res.status == 200) {
            // console.log(res)
            // setFlag(true)
            window.location.reload(true)
          }
        })

    }
  });


  return (
    <>
      <div className="container">
        {Profile && <div className="row" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding: "20px" }}>

          <div className="col-lg-4 col-sm-4">
            <div className="image_profile">
              <img src={Profile.img} />
                <span className="text-center">
                <Button variant="" color="neutral" onClick={() => setOpen(true)}>
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
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#ffffff1a", backdropFilter: "blur(2px) " }}
                >
                  <Sheet
                    variant="outlined"
                    sx={{
                      maxWidth: 500,
                      borderRadius: 'md',
                      p: 3,
                      boxShadow: 'lg',
                      backgroundColor: "#fff"
                    }}
                  >
                    <ModalClose
                      variant="outlined"
                      sx={{
                        top: 'calc(-0.1/4 * var(--IconButton-size))',
                        right: 'calc(-1/15 * var(--IconButton-size))',
                        boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                        borderRadius: '50%',
                        bgcolor: 'background.body',
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
                      أضافة صور من أعمالك
                    </Typography>
                    <div>

                      <Typography id="modal-desc" textColor="text.tertiary">
                        <form onSubmit={formik.handleSubmit} className='Add_image_snai3y' encType="multipart/form-data">
                          <input type="file"
                            accept='image/*'
                            // defaultValue="ubload"
                            name='workImage'
                            // value={formik.values.workImage}
                            onChange={(e) =>
                              formik.setFieldValue('photo', e.currentTarget.files[0])
                            }
                          ></input>
                          
                          
                          <div className='w-100 mt-3 text-start'>

                            <button type='submit' >إضافة</button>
                          </div>
                        </form>
                      </Typography>
                    </div>
                  </Sheet>
                </Modal>

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
    </>
  );
}

export default OneSection;
