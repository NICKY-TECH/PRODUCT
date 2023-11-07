import "../styles/destination.css"

function Cart() {
  return (
    <article className="cart-list">
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
