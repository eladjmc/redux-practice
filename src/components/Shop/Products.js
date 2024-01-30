import { storeItems } from "../../data/items";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {storeItems.map((item) => (
          <ProductItem
            key={item.name + Math.random()}
            title={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
