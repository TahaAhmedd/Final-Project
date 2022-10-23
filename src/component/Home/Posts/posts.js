import "./posts.css";
import img from "../../../images/home/postOne.jpg";
import prfile from "../../../images/home/abdelhafez.jpg";
import { useState, useEffect } from "react";

function Posts() {
  // Fetch Fake Api   < Test >
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/2aa618ff-cb24-4151-9b13-7bf7af74dad6").then(
      (result) => {
        result.json().then((res) => {

          // let arr=res.map((item)=>{...item,show:false})
          let arr=[];
          for(var i=0;i<res.length;i++)
          {
            arr.push({...res[i],show:false})
          }
          setData(arr);
        });
      }
    );
  }, []);

  // Function Hidden Post
  // let [show, setShow] = useState(false);
  function showAndHidden(index) {
    // show ? setShow(false) : setShow(true);
    // console.log(data[index].show)
    data[index].show=! data[index].show;
    setData([...data])
  }

  // Function Delete Post
  function delet(id) {
    setData((prev) => prev.filter((item) => item.id != id));
  }

  return (
    <>
      {data.map((data, index) => (
        <div className="post" key={index}>
          <div className="bolets">
            {/* Button Toggle Bettwen False And True  */}
            <span className="one" onClick={() => showAndHidden(index)}>
              <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </span>
          </div>

          {/* Show And Hidden With Button  */}
          {data.show && (
            <div className="popup hidd">
              <span>
                <i className="fa-regular fa-floppy-disk"></i>حفظ المنشور
              </span>
              <span>
                <i className="fa-regular fa-flag"></i>ابلاغ عن المنشور
              </span>

              <span onClick={() => delet(data.id)}>
                <i className="fa-regular fa-eye"></i>اخفاء المنشور
              </span>
            </div>
          )}

          <div className="img_name">
            <div className="images">
              <img src={prfile} alt="" />
            </div>

            <div className="name">
              <span>{data.user}</span>
              <span>منذ دقيقة</span>
              {/* <span>{data.adressuder}</span> */}
            </div>
          </div>

          <div className="app_di_img">
            <div className="row p-2 ">
              <div className="dis">
                <p>{data.dis} </p>
                <p>
                  <strong>العنوان : </strong>
                  {data.adresswork}
                </p>
                <p>
                  <strong>مده التسليم : </strong>يوم
                </p>
              </div>

              <div className="col-12 post_image">
                <div className="row">
                  <div className="col-6">
                  <img src={img} alt="" />

                  </div>
                  <div className="col-6">

                <img src={img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="suggestion_me">
                <span>{data.optionone}</span>
                <span>{data.optiontwo}</span>
              </div>
            </div>

            <div className="buttons col-6">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@getbootstrap"
              >
                طلب
              </button>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header mode_me">
                  <h5 className="modal-title" id="exampleModalLabel">
                    تفاصيل الطلب{" "}
                  </h5>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="message-text"
                        className="col-form-label label_me"
                      >
                        ( وقت البدء - المتطلبات لتنفيذ العمل - وقت التنفيذ )
                      </label>
                      <textarea
                        className="form-control"
                        id="message-text"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary close_me"
                    data-bs-dismiss="modal"
                  >
                    اغلاق
                  </button>
                  <button type="button" className="btn btn-primary button_me test">
                    ارسال الطلب
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;
