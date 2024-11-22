import { useEffect, useState } from "react";
// import {products} from "./../../../products"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc} from "firebase/firestore"
// import { products } from "../../../products";

const ItemListContainer = () => {

  const {name} = useParams ();

  const [items, setItems] = useState([]);
  
  useEffect(() => {
//                                        base  collection 
    const productsCollection = collection( db, "products")

    let docsRef = productsCollection;

    if (name) {
      docsRef = query(productsCollection, where("category", "==", name))
    }

    getDocs(docsRef).then((res) => {
      let arraySimplificado = res.docs.map( (doc) => {
        return {...doc.data(), id: doc.id}
      });

      setItems(arraySimplificado);
    });
    // const unaFraccion = products.filter(producto => producto.category === name)

    // const getProducts = new Promise((resolve) => {
    //   resolve(name ? unaFraccion : products)
    // });
    // getProducts.then((res) => {
    //   setTimeout(() => {
    //     setItems(res);
    //   }, 1500);
    // })
  }, [name]);

  // if (items.length === 0) {
  //   return ;
  // }

  // const funcionParaAgregar = () => {
  //   const productsCollection = collection(db, "products");
    
  //   products.forEach((product) => {
  //     addDoc(productsCollection, product)
  //   })
  // }

  return <div> 
    {items.length === 0 ? <h1>Loading... Please wait</h1> : <ItemList items={items} /> }

    {/* <button onClick={funcionParaAgregar}>boton</button> */}


  </div> 
}

export default ItemListContainer