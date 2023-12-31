import { changeOverLayState } from "../feature/over-lay";
import { layContentState } from "../feature/lay-content";
import { thumbnail } from "../resource/data";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/destination.css";
import { useState } from "react";

function Image(props) {
  const dispatch = useDispatch();
  // const cart = useSelector((state)=>state.displayCart.value)
  const [show, setShow] = useState({
    pic: thumbnail[0].parents,
    id: thumbnail[0].index,
  });

  function display(id) {
    setShow(id);
  }


  function prev() {
const showIt = show.id;
if(showIt<0 || showIt==0){
setShow({
    pic: thumbnail[0].parents,
    id: thumbnail[0].index, 
})
}else{
    const value = show.id-1
   setShow({
    pic: thumbnail[value].parents,
    id: thumbnail[value].index,
 
})
}
  }

  

  function go() {
    const showIt = show.id;
    if(showIt>thumbnail.length-1||showIt===thumbnail.length-1){
    setShow({
        pic: thumbnail[thumbnail.length-1].parents,
        id: thumbnail[thumbnail.length-1].index, 
    })
    }else{
        const value = show.id+1
       setShow({
        pic: thumbnail[value].parents,
        id: thumbnail[value].index,
     
    })
    }
  }


  return (
    <div className="image-component">
      <div className="full-image-view">
        <LazyLoadImage
          src={show.pic}
          onClick={() => {
            dispatch(changeOverLayState(true));
            dispatch(layContentState(false))
          }}
        />
        <div className="image-controls">
          <div className="group previous cursor-pointer" onClick={prev}>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"  className='cursor-pointer max-[639px]:ml-4 group-hover:stroke-[#ff7d1a] stroke-[#000000]'><path d="M11 1 3 9l8 8" fill="none"  strokeWidth="3" fillRule="evenodd"/></svg>
          </div>
          <div className="group next" onClick={go}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer group-hover:stroke-[#ff7d1a] stroke-[#000000]'><path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
          </div>
        </div>
      </div>
      <div className="sub-images">
        {thumbnail.map((item) => {
          return (
            < div key={item.id}>
              {props.isOverlay === "yes" ? (
                <div
                  className="sub-image"
                  key={item.id}
                  id={item.id}
                  onClick={() => {
                    display({ pic: item.parents, id: item.index });
                  }}
                >
                  <img src={item.url} />
                  <div className="over-lay" onClick={()=>{
                    display({ pic: item.parents, id: item.index })
                  }}></div>
                </div>
              ) : (
                <div className="sub-image" key={item.id} id={item.id}>
                  <img src={item.url} />
                  <div className="over-lay"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Image;
