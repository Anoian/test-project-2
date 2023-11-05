import "@fontsource/vazirmatn";
import "@fontsource/dm-sans";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Vazirmatn, sans-serif",
    body1: {
      fontFamily: "Vazirmatn, sans-serif",
      fontSize: 13,
      lineHeight: "18px",
    },
    body2: {
      fontFamily: "Vazirmatn, sans-serif",
      fontSize: 18,
      lineHeight: "28px",
    },
    h1: {
      fontFamily: "Vazirmatn, sans-serif",
      fontSize: 25,
      lineHeight: "39px",
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "Vazirmatn, sans-serif",
      fontSize: 23,
      lineHeight: "36px",
      fontWeight: "medium",
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#F2F2F2",
          borderRadius: "6px",
          outline: "none",
          "&:hover": {
            backgroundColor: "lightgrey",
          },
          "& .MuiInputBase-input": {
            padding: 13,
            fontFamily: "Vazirmatn, sans-serif",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent",
            },
          },
        },
      },
    },
  },
});

export default theme;
