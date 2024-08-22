import React, { useEffect, useState, useMemo } from "react";
import { Container } from "@mui/material";
import ProductContent from "../components/ProductContent";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import { ProductContext } from "../context/productContext";
import { getProductsAction, updateProduct } from "../context/productAction";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Pagination from "@mui/material/Pagination";
import IProduct from "../context/product";
import BarCharts from "../components/BarChart";
const ProductContainer: React.FC = () => {
  const { dispatch, state } = React.useContext(ProductContext);
  const [error, setError] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [page, setPage] = useState<number>(1);
  const [rowsPerPage] = useState<number>(10);

  console.log(state.products.data[0]);
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    getProductsAction(dispatch, {});
  }, [dispatch]);

  useEffect(() => {
    if (state.products.error) {
      setOpenSnackbar(true);
      setError("An error occurred while searching.");
    } else {
      setOpenSnackbar(false);
      setError(null);
    }
  }, [state.products.error]);

  const searchFields = [
    "id",
    "credit_score",
    "data_source_modified_dt",
    "dba_name",
    "drivers",
    "duns_number",
    "entity_type",
    "legal_name",
    "m_city",
    "m_state",
    "m_street",
    "m_zip_code",
  ] as (keyof typeof IProduct)[];

  const pruducts = useMemo(() => {
    if (!searchQuery) {
      return state.products.data;
    }

    return state.products.data.filter((item) => {
      let matched = false;
      for (const field of searchFields) {
        if (
          `${item[field]}`.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          matched = true;
          break;
        }
      }
      return matched;
    });
  }, [searchQuery, state.products.data]);

  const paginatedProducts = useMemo(() => {
    return pruducts.slice(
      (page - 1) * rowsPerPage,
      (page - 1) * rowsPerPage + rowsPerPage
    );
  }, [page, rowsPerPage, pruducts]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleUpdate = (value: string, id: string, name: string) => {
    updateProduct(dispatch, state.products.data, { value, id, name });
  };

  return (
    <Container>
      {state.products.data.length > 0 ? (
        <>
          <SearchComponent value={searchQuery} handleSearch={handleSearch} />
          <ProductContent
            handleUpdate={handleUpdate}
            products={paginatedProducts}
          />
          <Pagination
            sx={{ mt: 4 }}
            count={Math.ceil(pruducts.length / rowsPerPage)}
            onChange={handleChangePage}
          />
          <BarCharts
            data={pruducts.filter((record) => record.out_of_service_date)}
          />
        </>
      ) : (
        <p>loader</p>
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="error"
          onClose={handleSnackbarClose}
        >
          {error}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default ProductContainer;
