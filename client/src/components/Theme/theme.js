import { createTheme } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary:{ // for headers
            light: '#525252', // body text
            main: '#424242', // sub headers
            dark: '#222222' // main headers
        },
        secondary: {
            main: "#878787", // body
            light: "#bcbcbc" // light body
        }
    },
    typography: {
        fontFamily: `"Arial Rounded MT","Gill Sans MT"`,
        button: {
            fontFamily: "Gill Sans MT",
            textTransform: undefined
            
        },
    },
    zIndex: {
        drawer: '1100',
        modal: '1200',
        snackbar:'1300',
        appBar: '1400'
    },
});

export default theme;