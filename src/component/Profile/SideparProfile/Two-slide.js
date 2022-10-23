import "./Two-slide.css";

function TwoSlider() {
  return (
    <>
      <div className="navbar_right_secend">
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-house-user"></i>
              </span>
              <span className="titel">الصفحة الرئيسية </span>{" "}
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-house-user"></i>
              </span>
              <span className="titel"> المهام </span>{" "}
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-sharp fa-solid fa-backward"></i>
              </span>
              <span className="titel">الطلبات المقدمة</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-solid fa-message"></i>
              </span>
              <span className="titel">الرسائل</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TwoSlider;
