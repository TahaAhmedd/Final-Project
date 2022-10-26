import "./Two-slide.css";

function TwoSlider() {
  return (
    <>
      <div className="navbar_right">
        {/* <h3>عمليات التحقق</h3> */}
        <ul>
          <li>
            <span>
              <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/gmzxduhd.json"
                trigger="hover"
                colors="primary:#121331,secondary:#ffb200"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
            </span>
            <span>الصفحة الرئيسية</span>
          </li>

          <li>
            <span>
              <script src="https://cdn.lordicon.com/qjzruarw.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/zpxybbhl.json"
                trigger="hover"
                colors="primary:#121331,secondary:#ffb200"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
            </span>
            <span>الرسائل</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TwoSlider;
