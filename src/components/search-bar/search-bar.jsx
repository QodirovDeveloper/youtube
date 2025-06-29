import { useState } from "react";
import { Paper, IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import { colors } from "../../constants/colors";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch && searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: { xs: "100%", sm: 500 },
        borderRadius: "24px",
        boxShadow: "0 1px 6px rgba(0,0,0,0.2)",
        backgroundColor: colors.primary,
        border: `1px solid ${colors.secondary}`,
      }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1, color: "black" }}
        placeholder="Search"
        inputProps={{ "aria-label": "search youtube" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: colors.secondary,
          "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
        }}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
