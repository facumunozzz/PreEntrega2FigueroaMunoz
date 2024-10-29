import { Link } from "react-router-dom"

export const Card = ({title, price, stock, image, id}) => {
  return (
    <div className="Card">
        <img src={image} alt="" />
        <h2>Titulo: {title}</h2>
        <h3>Precio: {price}</h3>
        <h3>Stock: {stock}</h3>
        <Link to={`/ItemDetail/${id}`}>
          <button>Ver detalle</button>
        </Link>
    </div>
  )
}
