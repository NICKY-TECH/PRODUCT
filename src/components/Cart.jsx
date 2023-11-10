import "../styles/destination.css"
import Item from "./Item";

function Cart(props) {
  return (
    <article className={props.class}>
      <div className="cart-title">
        <p>Cart</p>
      </div>
      <article className="cart-content">
        <Item/>
        <Item/>
        <button className="check-out">Checkout</button>
    
      </article>
    </article>
  );
}

export default Cart;
