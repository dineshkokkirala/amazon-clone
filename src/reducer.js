export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// export const getBasketTotal = (basket) => {
//   let amount = 0;
//   for (let i = 0; i < basket.length; i++) {
//     amount += i.price;
//   }
//   return amount;
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //loginc for item to add to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //logic for remove from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Item not removed");
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
