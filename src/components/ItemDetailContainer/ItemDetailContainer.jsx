import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../data/asyncMockPromise";
import "./itemdetailcontainer.css";

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);

  let {itemid} = useParams();

  useEffect(() => {
    getSingleItem(itemid)
      .then((response) => {
        setProducto(response);
      })
      .catch((error) => {
        alert(`Error: ${error}`
      )});
  }, [itemid]);

  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={producto.imagen} alt={producto.titulo}></img>
      </div>
      <div className="card-detail_detail">
        <h1>{producto.titulo}</h1>
        <h2 className="priceTag">$ {producto.precio}</h2>
        <small>{producto.detalle}</small>
      </div>
    </div>
  );
}

export default ItemDetailContainer;