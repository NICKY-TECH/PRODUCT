import "../styles/destination.css";
import logo from "../images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import avatar from "../images/image-avatar.png"
import Cart from "./Cart";

function Header() {
const [active,setActive]=useState(false)
const [cart,setCart]=useState(false)
  function activate (){
setActive(!active)
  }

  function displayCart(){
    setCart(!cart)
  }
  return (
    <header>
      <div className="logo-set">
        <img src={logo} className="logo"/>
        <nav>
         <ul>
         <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
         </ul>
        </nav>
      </div>
   <div className="cart-set">
   <AiOutlineShoppingCart className="cart" onClick={displayCart}/>
   {console.log(active)}
      <div className={active?"active-picture":"profile-picture"} onClick={activate}>
        <img src={avatar} className="avatar"/>
      </div>
   </div>
  {cart?     <Cart/>:''}
    </header>
  );
}

export default Header;
