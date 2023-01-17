import React, { useState, useEffect } from "react";
import getItems from "../../data/asyncMockPromise";
import ItemList from "../ItemList/ItemList";
import './itemlistcontainer.css';

function ItemListContainer () {

    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      getItems().then((respuesta) => {
          setProductos(respuesta);
        });
      }, []);
  
    return (
      <>
        <ItemList productos={productos} />
      </>
    );
}

export default ItemListContainer;