import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../MyContext";

const Pizza = () => {
  const { data, setData } = useContext(MyContext);
  const { id } = useParams();

  return (
    <div>
      <div>
        {data
          .filter((item) => item.id === id)
          .map((pizza) => (
            <div className="ver-mas-container">
              <div className="ver-mas-img-container">
                <img src={pizza.img} alt="" />
              </div>
              <div className="ver-mas-info">
                <h2>{pizza.name}</h2>
                <p>{pizza.desc}</p>
                <h4>Ingredientes:</h4>
                <ul>
                  <li>{pizza.ingredients[0]}</li>
                  <li>{pizza.ingredients[1]}</li>
                  <li>{pizza.ingredients[2]}</li>
                  <li>{pizza.ingredients[3]}</li>
                </ul>
                <h3>Precio: ${pizza.price}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Pizza;
