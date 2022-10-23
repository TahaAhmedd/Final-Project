import "./headerHome.css";

function HeaderHome() {
  return (
    <div className="one mt-5">
      <div className="container">
        <div className="only_flex row">
          <div className="tittle_page col-sm-12 col-md-6">
            <h1>الرئيسية</h1>
            <h2>صناعة وتطوير</h2>
            <p>
              استعن بخدمات أفضل المبرمجين والمطورين لبناء مواقع وتطبيقات
              احترافية
            </p>
          </div>

          <div className="col-sm-12 col-md-6 position-relative">
            <div className="box_search">
              <div className="search">
                <input
                  type="text"
                  id="#"
                  placeholder="نوع المشكلة اللتي تواجهك"
                />
                <button>بحث</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Lines */}
      <div className="container">
        <div className="border_me_right"></div>
        <div className="border_me_left"></div>
      </div>


      
    </div>
  );
}

export default HeaderHome;
