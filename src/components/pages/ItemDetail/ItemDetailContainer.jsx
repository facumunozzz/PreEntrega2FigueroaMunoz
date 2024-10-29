import { useState, useEffect } from "react"
import {products} from "./../../../products"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const {id} = useParams(); //PARA CAMBIAR EL ID CUANDO CAMBIAS DE PAGINA
    const [item, setItem] = useState({});

    useEffect(() => {
        let productSelected = products.find((producto) => producto.id === id);
        setItem(productSelected);
    }, [id]) 

  return <ItemDetail item={item} />
}

export default ItemDetailContainer