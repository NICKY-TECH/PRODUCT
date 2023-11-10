import "../styles/destination.css";
import im9 from "../images/image-product-1-thumbnail.jpg";
import {FaTrashAlt} from "react-icons/fa"

function Item (){
  return  <article className="cart-item">
  <div className="item-image">
    <img src={im9}/>
  </div>
    <div>
        <p>Fall Limited Edition
Sneakers</p>
        <div className="item-price"> <p>$125.00 x unknown</p><span className="final-price">result</span></div>
    </div>
    <FaTrashAlt className="trash"/>

    </article>

}

export default Item