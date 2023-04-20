import React from "react";
import { useContext } from "react";
import MyContext from "../MyContext";
import { useState, useEffect } from "react";

const Carrito = () => {
  const { carrito, setCarrito } = useContext(MyContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalCalculado = 0;
    for (const pizza of carrito) {
      console.log(pizza);
      totalCalculado += pizza.price;
    }
    setTotal(totalCalculado);
  }, [carrito]);

  return (
    <div>
      <h3>Detalles del pedido:</h3>

      {carrito.map((pizza) => {
        return (
          <div>
            <div className="pedido-container">
              <img src={pizza.img} alt="" />
              <div className="pedido-container-info">
                <h3>{pizza.name}</h3>
                <h4>${pizza.price}</h4>
              </div>
            </div>
          </div>
        );
      })}
      <div className="pedido-total">
        <h1>Total: ${total}</h1>
      </div>
    </div>
  );
};

export default Carrito;
