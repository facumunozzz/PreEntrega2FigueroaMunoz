import { useEffect, useState } from "react";
import {products} from "./../../../products"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const {name} = useParams ();

  const [items, setItems] = useState([]);
  useEffect(() => {

    const unaFraccion = products.filter(producto => producto.category === name)

    const getProducts = new Promise((resolve) => {
      resolve(name ? unaFraccion : products)
    });
    getProducts.then((res) => {
      setItems(res);
    })
  }, [name]);

  return <ItemList items={items} />
}

export default ItemListContainer