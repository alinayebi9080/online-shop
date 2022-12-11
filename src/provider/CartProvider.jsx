import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CartContext = createContext();
const CartDispatchContext = createContext();

export const useCart = () => useContext(CartContext);
export const useCartDispatch = () => useContext(CartDispatchContext);

let worker;

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_PRODUCT": {
      const newState = [...state, payload];
      worker.port.postMessage(newState);
      return newState;
    }
    case "RESET":
      return payload;
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [basket, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    worker = new SharedWorker(new URL("../CartWorker", import.meta.url));
    worker.port.onmessage = (e) => {
      if (e.data) {
        dispatch({ type: "RESET", payload: JSON.parse(e.data) });
      }
    };
  }, []);

  return (
    <CartContext.Provider value={basket}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;
