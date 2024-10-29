import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <ShoppingCartTwoToneIcon/>
        <span>0</span>
      </Link>
      
    </div>
  )
}

export default CartWidget