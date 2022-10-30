import axios from "axios";
import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import "./TalpatSending.css";





function TalpatSending({ jobs }) {

const [Job, setJobs] = useState(jobs)

useEffect(() => {
  setJobs(jobs)
}, [])
// console.log(Job)


// Show And Hidden Box Option 
function compareId(i) {
  Job[i].show = !Job[i].show;

  setJobs([...Job])
 
}
  return (
    <>
      <div>
        <div className="containerr">
          {Job.map((d, index) => (
            <div className="box" key={index}>
              <span className="badge badge-danger status">pending</span>
              <h1>{d.title}</h1>
              <span className="city">{d.city}</span>
              <p>{d.description}</p>
              <span className="category">{d.category}</span>
              <span className="ellipsis" onClick={() => compareId(index)}>
                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
              </span>
              <h1>{d.show}</h1>
              {/* Start ellipsis Option  */}
              {d.show && (
                <div className="popup hidd">
                  <span  data-toggle="modal" data-target="#exampleModal">
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
                  <span>
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
