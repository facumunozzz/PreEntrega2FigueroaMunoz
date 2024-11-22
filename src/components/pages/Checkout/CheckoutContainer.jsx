import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

const CheckoutContainer = () => {

  const {cart, getTotalAmount, resetCart} = useContext(CartContext)
  
  const [orderId, setOrderId] = useState(null);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phonenumber: ""
  });


  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    
    const total = getTotalAmount();

    const order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    let refCollection = collection(db, "orders");

    addDoc(refCollection, order).then((res) => {
      setOrderId(res.id)
      resetCart()
    });

    let refCol = collection (db, "products")

    order.items.forEach((item) => {
      let refDoc = doc(refCol, item.id)
      updateDoc(refDoc, {stock: item.stock - item.quantity});
    });
  };

  const capturarInfo = (evento) => {
    setUserInfo({...userInfo, [evento.target.name]: evento.target.value})
  }

  if (orderId) {
    return <h2>Gracias por tu compra. Tu orden es: {orderId}</h2>
  }

  return (
    <div>
      <form onSubmit={funcionDelFormulario}>
      <input type="text" placeholder="Nombre" name="name" onChange={capturarInfo}/>
        <input type="text" placeholder="name@domain.com" name="email" onChange={capturarInfo}/>
        <input type="text" placeholder="1234567890" name="phonenumber" onChange={capturarInfo}/>
        <button>comprar</button>
        <button type="button">cancelar</button>
      </form>
    </div>
  )
}

export default CheckoutContainer