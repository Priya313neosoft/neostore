import React from 'react';
import {useContext} from "react";

function Contextcart() {
    return (
        <>
          <header>
          <div className="continue-shopping">
            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            {/* <p>{totalItem}</p> */}
          </div>
        </header>

        <section className="main-cart-section">
          <h2>shopping Cart</h2>
          {/* <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p> */}
        </section>
            
        </>
    )
}

export default Contextcart
