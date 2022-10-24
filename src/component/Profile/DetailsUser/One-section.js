import "./One-section.css";
import profilImage from './person_profil.jpg'
function OneSection() {
  return (
    <>
      <div className="app_profil">
        <div className="row">
          <div className="col-4">
            <div className="image_profile">
              <img src={profilImage} />
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
              <p>
                انا المعلم افشه اقوم بتصبليح ودهان ابلشقق والشقف والابواب الخشب
                ودهان والموبليا وتجديد الشقق والبنايات القديمة ودهان المعجون
                وتركيب الجشيبس بورد وهكذا أمور بسيطه
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneSection;
