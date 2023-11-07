import Image from "./components/Image";
import Main from "./pages/Main";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeOverLayState } from "./feature/over-lay";

function App() {
  const overlay = useSelector((state) => state.overlay.value);
  const disptach = useDispatch();
  {
    console.log("value");
  }
  {
    console.log(overlay);
  }

  return (
    <div className="container">
      <Main />
      {overlay ? (
        <div className={"body-over-lay"}>
          <div className="overlay-content">
            <article className="image-set-main-body-overlay">
              <div className="group close" >
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer fill-[#ffffff] group-hover:fill-[#ff7d1a]'  onClick={()=>{
                disptach(changeOverLayState());
              }} ><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd"/></svg>
             
              </div>
              <Image isOverlay="yes"/>
            </article>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;