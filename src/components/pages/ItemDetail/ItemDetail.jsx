import Counter from "./../../common/Counter/Counter"

const ItemDetail = ({ item, agregarAlCarrito, totalInCart }) => {
    return (
      <div>
        <img src={item.imageUrl} id="imageItemDetail"/>
        <h2>{item.title}</h2>
        <h2>{item.description}</h2>

        <Counter 
        stock={item.stock} 
        agregarAlCarrito={agregarAlCarrito} 
        totalInCart={totalInCart}/>
      </div>
    );
  };
  
  export default ItemDetail;