import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <TextField
      variant="outlined"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export { SearchBar };
