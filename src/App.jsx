import {Navbar} from "./components/layout/Navbar/Navbar"
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
// import Counter from "./components/common/Counter/Counter"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound/NotFound";
import {CartContainer} from "./components/pages/Cart/CartContainer";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
import CheckoutContainer from "./components/pages/Checkout/CheckoutContainer"
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />

          <Route path="/cart" element={<CartContainer />} />

          <Route path="itemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="/checkout" element={<CheckoutContainer />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
