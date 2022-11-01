import Sidepar from "../component/Home/Sidepar/Sidepar";
import Posts from "../component/Home/Posts/posts";
import HeaderHome from "../component/Home/Header/Headerhome";
import axios from "axios";
import { useState, useEffect } from "react";
import Notfind from "../component/notfind/Notfind";
import Loader from "../component/Loader/Loader";
function Home() {

  const [data, setData] = useState([]);
  const [alldata, setAll] = useState([])
  const [loader, setLoader] = useState(true)
  const [flag, setFlag] = useState(false);
  useEffect(() => {

    axios.get("http://localhost:7000/jobs/all").then(
      (result) => {
        let res = result.data.data;
        // console.log(res)
        // if(result.status == 200){
          setTimeout(()=>{
            
            setLoader(false)
            setAll([...res]);
            setData([...res])
            // console.log("sadshdih")
          },1000)
        }
        )
        return ()=> {
          // Side-effect cleanup...
          // console.log("mount Home")
          setLoader(true)
        };
    // console.log(date)
  }, []);

  function fliterCategory(type) {

    var arrr = alldata.filter((item) => item.category == type)
    setData([...arrr]);
    setFlag(true);
  }
  function fliterAddress(add) {
    if (flag) {
      var arrr = data.filter((item) => item.city == add)
      setData([...arrr]);
    }
    else {
      var arrr = alldata.filter((item) => item.city == add)
      setData([...arrr]);
    }

  }


  function search(type) {
    let arr = alldata.filter((item) => {
      return item.description.includes(type)
    }
    )
    setData([...arr])
  }

  useEffect(() => { }, [data])


  return (
    <>
      {/* {console.log(data)} */}
      {!loader && <HeaderHome data={search} />}

      <div className="container">

        <div className="row">
          <div className="col-md-3">
            {!loader && <Sidepar press={fliterCategory} press2={fliterAddress} />}
          </div>

          <div className="col-md-9 twoBody">
            {!loader && <Posts datas={data} />}
            {!loader && data.length == 0 && <Notfind />}
          </div>
        </div>


        <div className="row">

          {/* <Customers /> */}
        </div>


      </div>

        
        {loader && <Loader />}
    </>
  );
}

export default Home;
