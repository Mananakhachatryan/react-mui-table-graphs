import React from "react";
import axios from "axios";
import Papa from "papaparse";
import { ProductTypes, ProductActions } from "./productReducer";
import { IProduct } from "./product";

// const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&id=${SHEET_ID}&gid=${SHEET_GID}`;
const CSV_URL = `https://docs.google.com/spreadsheets/d/1hB_LjBT9ezZigXnC-MblT2PXZledkZqBnvV23ssfSuE/export?format=csv`;
export const getProductsAction = (
  dispatch: React.Dispatch<ProductActions>,
  { search }: { search?: string }
) => {
  axios({
    // url: `https://dummyjson.com/products${search ? `/search?q=${search}` : ""}`,
    url: CSV_URL,
  })
    .then((result: { data: any }) => {
      // Use PapaParse to parse the CSV data
      Papa.parse(result.data, {
        header: true,
        complete: (parsedResult: any) => {
          dispatch({
            type: ProductTypes.GET_SUCCESS,
            payload: parsedResult.data,
          });
        },
        error: (error: any) => {
          console.error("CSV parsing error:", error);
          // dispatch({
          //   type: ProductTypes.GET_ERROR,
          //   payload: "An error occurred while parsing data.",
          // });
        },
      });
    })
    .catch((error) => {
      debugger;
      dispatch({
        type: ProductTypes.GET_ERROR,
        payload: "An error occurred while fetching data.",
      });
    });
};

export const updateProduct = (
  dispatch: React.Dispatch<ProductActions>,
  state: IProduct[],
  { value, id, name }: { value: string; id: string; name: string }
) => {
  const products = state.map((node) => {
    if (node.id === id) {
      return { ...node, [name]: value };
    } else {
      return node;
    }
  });
  dispatch({
    type: ProductTypes.GET_SUCCESS,
    payload: products,
  });
};
