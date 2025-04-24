import PRODUCTS from "../data";

const initialState = {
  cartItems: [],
  cartTotal: 0,
  products: PRODUCTS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cartItems.find(
        (product) => product.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
          cartTotal: state.cartTotal + action.payload.price, // تحديث السعر الإجمالي
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          cartTotal: state.cartTotal + action.payload.price,
        };
      }

    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
        cartTotal: state.cartItems.reduce(
          (total, product) =>
            product.id === action.payload.id
              ? total + action.payload.quantity * product.price
              : total + product.quantity * product.price,
          0
        ),
      };

    case "REMOVE_FROM_CART":
      const itemToRemove = state.cartItems.find(
        (product) => product.id === action.payload
      );
      return {
        ...state,
        cartItems: state.cartItems.filter((product) => product.id !== action.payload),
        cartTotal: state.cartTotal - (itemToRemove?.quantity || 0) * (itemToRemove?.price || 0),
      };

    default:
      return state;
  }
};

export default reducer;
