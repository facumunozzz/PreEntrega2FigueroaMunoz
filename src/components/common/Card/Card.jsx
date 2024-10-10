export const Card = ({greeting, title, price, stock}) => {
  return (
    <div className="Card">
        <h1>Greeting: {greeting}</h1>
        <h2>Titulo: {title}</h2>
        <h3>Precio: {price}</h3>
        <h3>Stock: {stock}</h3>
    </div>
  )
}
