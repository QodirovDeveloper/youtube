import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../constants";
import { colors } from "../../constants/colors";
import { Searchbar } from "../";

const Navbar = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems={{ xs: "flex-start", sm: "center" }}
      justifyContent={{ xs: "center", sm: "space-between" }}
      p={2}
      gap={{ xs: 2, sm: 0 }}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: colors.primary,
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo" height={30} />
      </Link>
      <Searchbar />
      <Box />
    </Stack>
  );
};

export default Navbar;
