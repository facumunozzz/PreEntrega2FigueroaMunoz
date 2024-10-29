const ItemDetail = ({ item }) => {
    return (
      <div>
        <img src={item.imageUrl} id="imageItemDetail"/>
        <h2>{item.title}</h2>
        <h2>{item.description}</h2>
      </div>
    );
  };
  
  export default ItemDetail;