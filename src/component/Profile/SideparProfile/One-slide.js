import "./One-slide.css";

function OneSlider() {
  return (
    <>
      <div className="navbar_right">
        <h3>عمليات التحقق</h3>
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa-regular fa-credit-card"></i>
              </span>
              <span className="titel">بطاقة الدفع</span>
              <span className="check_title">
                <i className="fa-solid fa-check"></i>
              </span>
            </a>
          </li>
          <li>
            <a href="/#" />
            <span className="icon">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <span className="titel">الايميل </span>
            <span className="check_title">
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <a href="/#" />
            <span className="icon">
              <i className="fa-solid fa-phone"></i>
            </span>
            <span className="titel">رقم الموبايل</span>
            <span className="check_title">
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <a href="/#" />
            <span className="icon">
              <i className="fa-solid fa-id-card-clip"></i>
            </span>
            <span className="titel">الرقم القومي</span>
            <span className="check_title">
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <a href="/#" />
            <span className="icon">
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span className="titel">حساب فيسبوك</span>
            <span className="check_title">
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default OneSlider;
