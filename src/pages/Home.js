import Sidepar from "../component/Home/Sidepar/Sidepar";
import Posts from "../component/Home/Posts/posts";
import HeaderHome from "../component/Home/Header/Headerhome";



function Home() {

 


  return (
    <>
      <HeaderHome />

      <div className="container">

        <div className="row">
          <div className="col-md-3">
            <Sidepar />
          </div>

          <div className="col-md-9 twoBody">
              <Posts/>
            
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
