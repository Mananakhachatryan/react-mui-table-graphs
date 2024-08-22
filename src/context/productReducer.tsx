import { IProduct, ActionMap } from "./product";

export enum ProductTypes {
  GET_SUCCESS = "GET_SUCCESS",
  GET_ERROR = "GET_ERROR",
}

export type ProductState = {
  data: IProduct[];
  error: string | null;
};

type ProductPayload = {
  [ProductTypes.GET_SUCCESS]: IProduct[];
  [ProductTypes.GET_ERROR]: string | null;
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const ProductReducer = (state: ProductState, action: ProductActions) => {
  switch (action.type) {
    case ProductTypes.GET_SUCCESS: {
      return {
        data: action.payload,
        error: null,
      };
    }
    case ProductTypes.GET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
