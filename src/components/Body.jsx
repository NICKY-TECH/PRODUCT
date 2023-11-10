import "../styles/destination.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Image from "./Image";
import useSound from "use-sound";
import sound from "../resource/audio/announcement-sound-4-21464.mp3";

function Body() {
  const [playSound] = useSound(sound);
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
  function play() {
    playSound();
  }
  return (
    <article className="main-body">
      <article className="image-set-main-body">
        <Image />
      </article>
      <article className="set-cart">
        <div className="inner-set-cart">
          <div>
            <p className="sneaker-company">Sneaker Company</p>
            <h1>
              Fall Limited Edition <br />
              Sneakers
            </h1>
          </div>
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
          <div className="group buttons">
            <button className="control">
              <svg
                width="12"
                height="4"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                onClick={decrement}
              >
                <defs>
                  <path
                    d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                    id="a"
                  />
                </defs>
                <use
                  className="fill-[#FF7E1B] group-hover:fill-[#FFBF00FF]"
                  fillRule="nonzero"
                  xlinkHref="#a"
                />
              </svg>
              <span>{amount}</span>
              <svg
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                onClick={increment}
              >
                <defs>
                  <path
                    d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                    id="b"
                  />
                </defs>
                <use
                  className="fill-[#FF7E1B] group-hover:fill-[#FFBF00FF]"
                  fillRule="nonzero"
                  xlinkHref="#b"
                />
              </svg>
            </button>
            {/* <span className="total">{amount}</span> */}
            <button className="add-to-cart" onClick={play}>
              <AiOutlineShoppingCart /> Add to cart
            </button>
          </div>
        </div>
      </article>
    </article>
  );
}

export default Body;
