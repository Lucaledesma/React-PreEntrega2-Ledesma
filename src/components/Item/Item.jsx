import React from "react";
import "./item.css";

import { Link } from "react-router-dom";

function Item({ id, titulo, precio, imagen }) {
  const urlDetail = `/item/${id}`;

  return (
    <div className="producto">
        <img src={imagen} alt={titulo}></img>
        <div className="producto-descripcion">
            <p><b>{titulo}</b></p>
            <p>${precio}</p>
            <Link to={urlDetail}>
                <button className="producto-agregar" id={id}>Ver Detalle</button>
            </Link>
        </div>
    </div>
  );
}

export default Item;