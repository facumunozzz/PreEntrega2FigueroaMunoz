import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const CartContainer = () => {

  const {cart, resetCart, removeById, getTotalAmount} = useContext(CartContext)

  let totalEnElCarrito = getTotalAmount();

  return (
    <>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>Cantidad:{product.quantity}</h3>
            <button onClick={() => removeById(product.id)}>Elminar</button>
          </div>
        );
      })}

      

      {cart.length > 0 && 
        <button onClick={resetCart}>Limpiar carrito</button> 
      }

      <h2>El total a pagar es {totalEnElCarrito}</h2>

      <Link to="/checkout">Finalizar compra</Link>

    </>
  );
};
