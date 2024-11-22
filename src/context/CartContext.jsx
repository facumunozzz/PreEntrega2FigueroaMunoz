import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addToCart = (product) => {
    let isInCart = cart.some((el) => el.id === product.id); //hay algun elemento cuyo id sea igual al producto.id, devuelve boolean

    if (isInCart) {
      let nuevoArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(nuevoArray);
    } else {
      setCart([...cart, product]);
    }
  }; 

  const removeById = (id) => {
    let arrayFiltrado = cart.filter((elemento) => elemento.id !== id);
    setCart(arrayFiltrado);
  };

  const resetCart = () => {
    setCart([]);
  };

  const getTotalQuantity = (id) => {
    const product = cart.find(elemento => elemento.id===id)
    if(product) {
      return product.quantity
    } else {
      return 0
    }
  }

  const getTotalAmount = () => {

    let total = cart.reduce( ( acumulador, elemento) => {
      return acumulador + (elemento.price * elemento.quantity)
    }, 0 )

    return total

  };


  let data = {
    cart: cart,
    addToCart: addToCart,
    removeById: removeById,
    resetCart: resetCart,
    getTotalQuantity: getTotalQuantity, 
    getTotalAmount: getTotalAmount,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
