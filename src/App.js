import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isCartShowing = useSelector(state=>state.cart.isCartShowing)
  return (
    <Layout>
      {isCartShowing && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
