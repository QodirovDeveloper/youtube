import { useState } from "react";
import { Paper, IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Searching for:", value);
    if (value) {
      navigate(`/search/${value}`);
      setValue('')
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={submitHandler}
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
        sx={{ ml: 2, flex: 1, color: colors.text }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
