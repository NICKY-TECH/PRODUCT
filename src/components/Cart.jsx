import "../styles/destination.css"
import Item from "./Item";
import { useSelector } from "react-redux";
import useSound from "use-sound";
import sound from "../resource/audio/announcement-sound-4-21464.mp3";

function Cart(props) {
  const [playSound] = useSound(sound);
  function play (){
    playSound()
  }
  const totalNumber = useSelector((state) => state.total.value);
  const localStorageArray = Array.from({ length: localStorage.length }, (_, index) => {
    const key = localStorage.key(index);
    const value = localStorage.getItem(key);
    console.log("value-top")
    console.log(value)
    const parsedValue = JSON.parse(value);
    return { key, parsedValue };
  });

  function checkOut(){
    localStorage.clear()
  }

  return (
    <article className={localStorageArray.length>0 ?"cart-list":"cart-empty-list"}>
      <div className="cart-title">
        <p>Cart</p>
      </div>
      <article className="cart-content">
{ 
  localStorageArray.length>0 ?
 
localStorageArray.map(item => {
  // Perform mapping operations here
  {console.log("value dey")}
  {console.log(item)}
  return <Item title={item.parsedValue.title} key={item.parsedValue.id} number={item.parsedValue.total} id={item.parsedValue.id} sound={playSound}/>
}):<p className="cart-empty">Your cart is empty </p>
}


        <button className="check-out" onClick={()=>{
          checkOut(),
         
        }}>Checkout</button>
    
      </article>
    </article>
  );
}

export default Cart;
