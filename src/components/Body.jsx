import "../styles/destination.css";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Image from "./Image";

function Body() {
  const [amount, setAmount] = useState(0);
  function increment() {
    setAmount((amount) => {
      return amount + 1;
    });
  }

  function decrement() {
    if (amount > 0) {
      setAmount((amount) => {
        return amount - 1;
      });
    } else if (amount === 0) {
      setAmount(0);
    }
  }
  return (
    <article className="main-body">
      <article className="image-set-main-body">
        <Image />
      </article>
      <article className="set-cart">
        <div className="inner-set-cart">
          <p className="sneaker-company">Sneaker Company</p>
          <h1>
            Fall Limited Edition <br />
            Sneakers
          </h1>
          <p className="text-content">
            {" "}
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="price-container">
            <div className="price">
              <div className="group-prices">
                <p className="current-price">
                  {" "}
                  <span className="current-price-value"> $125.00</span>{" "}
                  <span className="discount"> 50%</span>
                </p>
                <p className="original-price">$250.00</p>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="control">
              <img src={minus} className="minus" onClick={decrement} />{" "}
              <span>{amount}</span>
              <img src={plus} className="plus" onClick={increment} />
            </button>
            <button className="add-to-cart">
              <AiOutlineShoppingCart /> Add to cart
            </button>
          </div>
        </div>
      </article>
    </article>
  );
}

export default Body;
