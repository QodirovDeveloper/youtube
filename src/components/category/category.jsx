import { Stack } from "@mui/material";
import { category } from "../../constants";
import { colors } from "../../constants/colors";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowX: "auto",
        flexWrap: { xs: "nowrap", sm: "wrap" },
        gap: { xs: 1, sm: 2 },
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            borderRadius: "7px",
            padding: "8px 12px",
            background: item.name === selectedCategory && colors.secondaryyy,
            color: item.name === selectedCategory && "#000",
            minWidth: "max-content",
            fontSize: "14px",
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span
            style={{
              color:
                item.name === selectedCategory ? "#000" : colors.secondaricon,
              marginRight: "10px",
              fontSize: "16px",
            }}
          >
            {item.icon}
          </span>
          <span style={{ opacity: 1, fontWeight: 500 }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
