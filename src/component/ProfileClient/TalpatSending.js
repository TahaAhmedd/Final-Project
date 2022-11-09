import axios from "axios";
import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import "./TalpatSending.css";

import { Modal, ModalClose, Sheet, Typography } from "@mui/joy";

import Notfind from "../notfind/Notfind";

function TalpatSending() {
  const [Job, setJobs] = useState([]);
  const [open, setOpen] = useState(false);
  const [oopeen, setOpenUp] = useState(false);
  const [flagNoMore, setFlagNoMore] = useState(false);

  function huntJob(i) {
    console.log(i);
    axios.put(`http://localhost:7000/sanai3y/huntjob/${i}`).then((res) => {
      console.log(res);

      if (res.status == 200) {
        setFlagNoMore(true);
      }
    });
  }

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
      });
  }, []);

  console.log(Job);

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
      {Job.length > 0 && (
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

                {/* Start Model */}

                <button
                  className="edit_button_jobs_client"
                  data-bs-toggle="modal"
                  data-bs-target={`#id${d._id}`}
                  disabled={d.proposals.length == 0 ? true : ""}
                >
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
                </button>

                <div
                  className="modal fade"
                  id={`id${d._id}`}
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header edit_header_job_client">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          المتقدمين للعمل
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>

                      <div className="modal-body">
                        <div className="row">
                          {d.proposals.map((one, index) => (
                            <div className="col-12" key={index}>
                              <div
                                className="card"
                                style={{ marginBottom: "10px" }}
                              >
                                <div className="card-body edit_body_jobs_client">
                                  <h5 className="card-title">
                                    {one.sanai3yId.firstName +
                                      " " +
                                      one.sanai3yId.lastName}
                                  </h5>
                                  <p
                                    className="card-text"
                                    style={{
                                      color: "#555",
                                      padding: "5px",
                                      marginBottom: "5px",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {one.sanai3yProposal}
                                  </p>
                                  <span className="parent_two_button">
                                    <span>{one.sanai3yId.skills}</span>

                                    {d.status == "in progress" ? (
                                      <button
                                        
                                        className="btn btn-info edit_button_no"
                                      >
                                        تم التاكيد
                                      </button>
                                    ) : (
                                      <button
                                        className="btn btn-primary edit_button_ac"
                                        onClick={() => huntJob(one._id)}
                                      >
                                        تاكيد
                                      </button>
                                    )}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* End Model */}

                <span className="category">{d.category}</span>

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
      )}

      {Job.length == 0 && <Notfind data={"لايوجد طلبات مقدمة"} />}
    </>
  );
}

export default TalpatSending;
