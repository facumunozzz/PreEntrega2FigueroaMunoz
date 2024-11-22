import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {
  const {cart} = useContext(CartContext);

  

  return (
      <Link to="/cart">
        <ShoppingCartTwoToneIcon/>
        <span>{cart.length}</span>
      </Link>
  )
}

export default CartWidget