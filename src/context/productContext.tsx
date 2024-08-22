import * as React from "react";
import { ProductState, ProductReducer, ProductActions } from "./productReducer";

type InitialStateType = {
  products: ProductState;
};

const mainReducer = (
  { products }: InitialStateType,
  action: ProductActions
) => ({
  products: ProductReducer(products, action),
});

const initialState = () => {
  return {
    products: {
      data: [],
      error: null,
    },
  } as InitialStateType;
};

export const ProductContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<ProductActions>;
}>({
  state: initialState(),
  dispatch: () => null,
});

const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState());

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Provider;
