import logo from "./helmet.webp";
import "./Chat.css";
function Chat() {
  return (
    <div className="chats">
      <div className="container">
        <div className="res-wid">
          {/* Start right chat */}
          <div className="right-ch">
            <div className="back-sec1">
              <section className="sec1">
                <img src={logo} alt="" />

                <p>محمد احمد محمود </p>
              </section>
            </div>
            {/* main left chat  */}
            <section className="scrols messages">
              <ul>
                <li className="sent">
                  <img src={logo} alt="" />
                  <p>
                    السلام عليكم اخبارك اى انا كنت عاوزك تشتغل على السباكة الى
                    عندى علشان فيه حاجات عاوزة تتظبط فيها
                    <small>10:20pm</small>
                  </p>
                </li>
                <li className="replies">
                  <img src={logo} alt="" />
                  <p>
                    {" "}
                    وعليكم السلام ان شاء الله هظبطلك السباكة الى عندك بس قولى
                    بالظبط اى الى عاوز يتصلح عنك
                    <small>10:20pm</small>
                  </p>
                </li>
                <li className="sent">
                  <img src={logo} alt="" />
                  <p>
                    انا عندى الدش بينقط ومش عاوز يتقفل خالص
                    <small>10:20pm</small>
                  </p>
                </li>
                <li className="replies">
                  <img src={logo} alt="" />
                  <p>
                    ممكن تبعتلى صورة للدش بالظبط علشان اعرف اى المكان الى بينقط
                    فيه
                    <small>10:20pm</small>
                  </p>
                </li>
                <li className="sent">
                  <img src={logo} alt="" />
                  <p>
                    بعتلك الصورة ياريت تشوفها وتقولى اى الى هيحصل دلوقتى
                    <small>10:20pm</small>
                  </p>
                </li>
                <li className="replies">
                  <img src={require("./helmet.webp")} alt="" />
                  <p>
                    تمم كده ممكن نغير الجلدة الى فى الشاور وهيبقى تمم
                    <small>10:20pm</small>
                  </p>
                </li>
              </ul>
            </section>
            <section className="sec3">
              <input type="text" placeholder="اكتب رسالتك هنا....." />

              <div>
                <div>
                  <label htmlFor="upload-files">
                    <i
                      className="fa fa-paperclip attachment"
                      aria-hidden="true"
                    ></i>
                  </label>
                  <input
                    type="file"
                    name="upload"
                    placeholder="uplaod"
                    id="upload-files"
                  />
                </div>

                <button type="submit">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </section>
          </div>
          {/* End Right Chat */}
          {/* Start Left chat  */}
          <div className=" left-ch">
            <div className="search-chat">
              <i className="fa-solid fa-search"></i>
              <input type="search" placeholder="ابحث هنا" />
            </div>
            <div className="scrols messages">
              <div>
                <img src={logo} alt="" />
                <h3>على احمد </h3>
                <p>السلام عليكم.....</p>
              </div>
              <div>
                <img src={logo} alt="" />
                <h3>على احمد </h3>
                <p>السلام عليكم.....</p>
              </div>
              <div>
                <img src={logo} alt="" />
                <h3>على احمد </h3>
                <p>السلام عليكم.....</p>
              </div>
              <div>
                <img src={logo} alt="" />
                <h3>على احمد </h3>
                <p>السلام عليكم.....</p>
              </div>
              <div>
                <img src={logo} alt="" />
                <h3>على احمد </h3>
                <p>السلام عليكم.....</p>
              </div>
              <div>
                <img src={logo} alt="" />
                <h3>على احمد </h3>
                <p>السلام عليكم.....</p>
              </div>
            </div>
          </div>
          {/* End left chat */}
        </div>
      </div>
    </div>
  );
}
export default Chat;
