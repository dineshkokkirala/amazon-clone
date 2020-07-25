import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import ChekoutProduct from "./ChekoutProduct";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt="ad"
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping basket is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="classname__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <ChekoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
