import React from "react";
import Box from "@mui/material/Box";
import { Input } from "./styles.SearchComponent";

const SearchComponent = ({
  value,
  handleSearch,
}: {
  value: string;
  handleSearch: (value: string) => void;
}) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ marginBottom: "10px" }}
    >
      <Input
        placeholder="Search"
        value={value}
        data-testid="search-input"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </Box>
  );
};

export default SearchComponent;
