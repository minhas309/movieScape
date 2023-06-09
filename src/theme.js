import { createTheme } from "@mui/material";

export const theme = createTheme({

    palette: {
        background:{
            default:"#FFFFFF",
            main:"#673ab7",
        },
        primary: {
            main: "#1e88e5",
            postColor: "#24292f",
        },
        secondary: {
            main: "#3f51b5",
        },
        transp:{
            main: "#ffc107"
        },
    },
    typography: {
        fontFamily: "Roboto",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1:{
            fontSize:"10px",
            fontWeight: "900px",
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
            variants: [
                {
                    props: { variant: "contained", color: "secondary" },
                    style: {
                        color: "white",
                    },
                },
            ],
        },
    },
});