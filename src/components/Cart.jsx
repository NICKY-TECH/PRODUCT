import "../styles/destination.css"

function Cart(props) {
  return (
    <article className={props.class}>
      <div className="cart-title">
        <p>Cart</p>
      </div>
      <div className="cart-content">
        <p className="empty">Your cart is empty</p>
      </div>
    </article>
  );
}

export default Cart;
