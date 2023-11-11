import "../styles/destination.css";
import im9 from "../images/image-product-1-thumbnail.jpg";
import {FaTrashAlt} from "react-icons/fa";
import useSound from "use-sound";
import sound from "../resource/audio/announcement-sound-4-21464.mp3";
// import { useSelector } from "react-redux";

function Item (props){
  // const totalNumber = useSelector((state) => state.total.value);
  const [playSound] = useSound(sound);
function deleteItem(id){
  localStorage.removeItem(id);
  playSound()

}

  return  <article className="cart-item">
  <div className="item-image">
    <img src={im9}/>
  </div>
    <div>
        <p>{props.title}</p>
        <div className="item-price"> <p>$125.00 x {props.number}</p><span className="final-price">${125.00 * props.number}.00</span></div>
    </div>
    <FaTrashAlt className="trash" onClick={()=>{
      deleteItem(props.id)
    }}/>
    </article>

}

export default Item