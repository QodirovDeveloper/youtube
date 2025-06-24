import { Stack } from "@mui/material";
import { category } from "../../constants";
import { colors } from "../../constants/colors";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            borderRadius: "7px",
            background: item.name === selectedCategory && colors.secondaryyy,
            color: item.name === selectedCategory && "#000",
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span
            style={{
              color:
                item.name === selectedCategory ? "#000" : colors.secondaricon,
              marginRight: "15px",
              fontSize: "18px",
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
