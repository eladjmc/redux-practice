import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.name}
              item={{
                title: cartItem.name,
                quantity: cartItem.amount,
                total: cartItem.totalPrice,
                price: cartItem.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
