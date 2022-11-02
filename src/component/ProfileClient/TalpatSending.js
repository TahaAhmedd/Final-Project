import axios from "axios";
import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import "./TalpatSending.css";
import Button from "@mui/joy/Button";

import { Modal, ModalClose, Sheet, Typography } from "@mui/joy";
import { Box } from "@mui/system";

function TalpatSending() {
  const [Job, setJobs] = useState([]);
  const [open, setOpen] = useState(false);
  const [oopeen, setOpenUp] = useState(false)

  // Style material-ui
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "2px solid #000",
    backgroundColor: "#FFF",
    boxShadow: 24,
    p: 4,
  };

  const styleButton = {
    position:"absolute",
    bottom:"20px",
    left:"20px",
    cursor: "pointer",
    background: "#FFF", 
    color: "#fff",
    borderRadius: "10px",
    borderTop:"3px",
    borderLeft:"10px",
    borderRight:"10px",
    borderWidth: "2px",
    borderColor: "#ffb200",
    color:"#ffb200",
    borderStyle: "solid",
    transitionProperty: "all",
    transitionDuration: ".5s",
    '&:hover': {
      background: "#ffb200",
      color:"#FFF"
   },
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Get Token From Storage And Create Object Containe Title And Description
  const token = localStorage.getItem("token");
  const [state, setState] = React.useState({
    title: "",
    description: "",
  });
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  let headers = {
    authorization: token,
  };

  function updateJobWithClient(i) {
    // console.log(i);
    // console.log(state)

    axios
      .put(`http://localhost:7000/jobs/update/${i}`, state, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          // window.location.reload(true);
        }
      });
  }

  // Get Jobs The Client
  useEffect(() => {
    let token = localStorage.getItem("token");
    axios
      .get("http://localhost:7000/client/jobs/", {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        let jobClient = res.data.Data;
        setJobs([...jobClient]);

        // console.log(Job) // When Get All Data About Sanai3y
        // this Logic
      });
  }, []);

  // console.log(Job);

  // Show And Hidden Box Option Up And Remove In DataBase
  function compareId(i) {
    Job[i].show = !Job[i].show;
    setJobs([...Job]);
  }

  let header = {
    authorization: token,
  };
  function sendIdJob(id) {
    axios
      .put(`http://localhost:7000/jobs/delete/${id}`, {}, { headers: header })
      .then((res) => {
        // console.log(res);
        if (res.status == 200) {
          window.location.reload(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div>
        <div className="containerr">
          {Job.map((d, index) => (
            <div className="box" key={index}>
              <h1>{d.title}</h1>
              <span className="city">{d.city}</span>
              <span className="formatDate">
                {dateFormat(d.hiredDate, "UTC:h:MM:ss TT ")}
              </span>
              <p className="diss">{d.description}</p>

              {/* Start Model Matireal ui */}
              <div>
                <Button sx={styleButton} onClick={handleOpen}>
                  {" "}
                  المتقدمين
                  <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/qvzrpodt.json"
                    trigger={d.proposals.length != 0 ? "loop" : "hover"}
                    delay={d.proposals.length != 0 ? "500" : ""}
                    // colors="primary:#121331,secondary:#121331"
                    style={{ width: "30px", height: "30px" }}
                  ></lord-icon>
                  <span> ( {d.proposals.length} ) </span>
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      المتقدمين
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">
                                Special title treatment
                              </h5>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <a href="#" class="btn btn-primary">
                                Go somewhere
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">
                                Special title treatment
                              </h5>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <a href="#" class="btn btn-primary">
                                Go somewhere
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </Box>
                </Modal>
              </div>
              {/* End Model Matireal ui */}

              <span className="category">{d.category}</span>
              <span className="badge badge-danger status">pending</span>

              <span className="ellipsis" onClick={() => compareId(index)}>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
              </span>
              <h1>{d.show}</h1>
              {/* Start ellipsis Option  */}
              {d.show && (
                <div className="popup hidd">
                  <span onClick={() => setOpenUp(true)}>
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

                  <span
                    onClick={() => {
                      sendIdJob(d._id);
                    }}
                  >
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

                  <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={oopeen}
                    onClose={() => setOpenUp(false)}
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
                        اضافة تعديل
                      </Typography>
                      <div>
                        <Typography id="modal-desc" textColor="text.tertiary">
                          <form
                            className="Add_image_snai3y"
                            encType="multipart/form-data"
                          >
                            <input
                              type="text"
                              placeholder="المشكلة (العنوان الرئيسي)"
                              name="title"
                              required
                              value={state.title}
                              onChange={handleChange}
                            ></input>
                            <textarea
                              type="text"
                              placeholder="وصف المشكلة"
                              name="description"
                              required
                              value={state.description}
                              onChange={handleChange}
                            ></textarea>
                            <div className="w-100 mt-3 text-start">
                              <button
                                onClick={() => {
                                  updateJobWithClient(d._id);
                                }}
                              >
                                إضافة
                              </button>
                            </div>
                          </form>
                        </Typography>
                      </div>
                    </Sheet>
                  </Modal>
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

export default TalpatSending;
