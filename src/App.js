import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./MyContext";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import Pizza from "./pages/Pizza";
import Carrito from "./pages/Carrito";
import NotFound from "./pages/NotFound";

function App() {
  const [data, setData] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const getData = () => {
    fetch("./pizzas.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <>
        <MyContext.Provider value={{ data, setData, carrito, setCarrito }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </MyContext.Provider>
      </>
    </div>
  );
}

export default App;
