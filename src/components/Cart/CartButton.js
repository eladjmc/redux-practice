import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { toggleCartShow } from "../../store/cartSlice";

const CartButton = (props) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  
  const handleToggleShow = () => {
    dispatch(toggleCartShow());
  };
  return (
    <button className={classes.button} onClick={handleToggleShow}>
      <span>My Cart</span>
      {!!items.length && <span className={classes.badge}>{totalQuantity}</span>}
    </button>
  );
};

export default CartButton;
