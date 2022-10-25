import "./One-section.css";
import profilImage from "./person_profil.jpg";
function OneSection() {
  return (
    <>
      <div className="app_profil">
        <div className="row">
          <div className="col-4">
            <div className="image_profile">
              <img src={profilImage} />
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
              <h4>احمد محمد احمد علي</h4>
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <span> السيل </span>
                </li>
                <li>
                  <i className="fa-solid fa-network-wired"></i>
                  <span> نقاش </span>
                </li>
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
    </>
  );
}

export default OneSection;
