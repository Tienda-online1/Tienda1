import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Cart from "../cart/Cart";
import React, { useState } from 'react';
import {Outlet} from "react-router-dom";



function Principal() {
    const [cart, setCart] = useState([]);

    const updateCart = (udatedCart) => {
        setCart(udatedCart);
    }


    return (
      <div className="top-section">
          <div className="main-content" id="main-content">
              <div className="background-top">
                  <Header cart={cart} updateCart={updateCart} />
              </div>
              <div className="bottom-section">
                  <main>
                      <Outlet context={{ cart, updateCart }}/>
                  </main>
              </div>
          </div>
      </div>
    );
}

export default Principal;