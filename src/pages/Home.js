import Sidepar from "../component/Home/Sidepar/Sidepar";
import Posts from "../component/Home/Posts/posts";
import HeaderHome from "../component/Home/Header/Headerhome";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {

  const [data, setData] = useState([]);
  const[alldata,setAll]=useState([])

  const[flag,setFlag]=useState(false);
  useEffect(() => {

    axios.get("http://localhost:7000/jobs/all").then(
      (result)=>{
        let res = result.data.data;
        console.log(res)
        setAll([...res]);
        setData([...res])
      }
      )
      // console.log(date)
    }, []);

    function fliterCategory(type)
    {
    
      var arrr=alldata.filter((item)=>item.category==type)
      setData([...arrr]);
      setFlag(true);
    }
    function fliterAddress(add)
    {
      if(flag)
      {
        var arrr=data.filter((item)=>item.city==add)
        setData([...arrr]);
      }
      else
      {
        var arrr=alldata.filter((item)=>item.city==add)
        setData([...arrr]);
      }

    }


  return (
    <>
      <HeaderHome />

      <div className="container">

        <div className="row">
          <div className="col-md-3">
            <Sidepar  press={fliterCategory} press2={fliterAddress}/>
          </div>

          <div className="col-md-9 twoBody">
              <Posts  datas={data}/>
          </div>
        </div>


        <div className="row">

          {/* <Customers /> */}
        </div>


      </div>
    </>
  );
}

export default Home;
