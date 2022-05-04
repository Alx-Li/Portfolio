import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    body: {
        height: '100vh',
        width: '100vw',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: 'white',
    },
    image: {
        height: '50vh',
    },
    spacer: {
        height: '25vh',
    },
    Title: {
        fontSize: '4vh',
        fontFamily: 'Arial Rounded MT',
        color: theme.palette.primary.dark,
        justifyContent: 'center',
        textAlign: 'center',
    },
}));