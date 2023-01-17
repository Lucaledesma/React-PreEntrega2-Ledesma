import React from "react";
import Item from "../Item/Item";
import "./itemlist.css";

function ItemList(props) {
  return (
    <div className="main-productos">
      {props.productos.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          titulo={item.titulo}
          precio={item.precio}
          imagen={item.imagen}
        />
      ))}
    </div>
  );
}

export default ItemList;