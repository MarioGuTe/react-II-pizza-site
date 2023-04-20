import React from "react";
import { useContext } from "react";
import MyContext from "../MyContext";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data, setData } = useContext(MyContext);
  const { carrito, setCarrito } = useContext(MyContext);

  // const [id, setId] = useState();
  const navigate = useNavigate();
  const irAPizzas = (id) => {
    navigate(`/pizza/${id}`);
  };
  const agregarPizza = (item) => {
    setCarrito([...carrito, item]);
  };

  return (
    <div className="pizza-container">
      {data.map((item) => (
        <div className="pizza-card" key={item.id}>
          <img src={item.img} alt="" />
          <h2>{item.name}</h2>
          <div className="info-container">
            <p>Ingredientes:</p>
          </div>
          <div className="list-container">
            <ul>
              <li>{item.ingredients[0]}</li>
              <li>{item.ingredients[1]}</li>
              <li>{item.ingredients[2]}</li>
              <li>{item.ingredients[3]}</li>
            </ul>
          </div>
          <div className="card-footer">
            <div className="price">
              <h3>${item.price}</h3>
            </div>
            <div className="btn-container">
              <button value={item.id} onClick={() => irAPizzas(item.id)}>
                Ver Más
              </button>
              <button onClick={() => agregarPizza(item)}>Añadir</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
