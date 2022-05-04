import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    bodyH: {
        height: '100vh',
        width: '100vw',
        flexDirection: 'row',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    bodyV: {
        height: '100vh',
        width: '100vw',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        },
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    spacer: {
        height: '25vh',
    },
    animation: {
        width: '50vw',
    },
    animationH: {
        height: '95vh',
    },
    bodyTitleV: {
        fontSize: '8vw',
        fontFamily: 'Arial Rounded MT',
        color: theme.palette.primary.dark,
        justifyContent: 'center',
        textAlign: 'center',
    },
    bodyTextV:{
        fontFamily: 'Gill Sans MT',
        fontSize: '4vw',
        color: theme.palette.primary.main,
        textAlign: 'center',
    },
    bodyTitleH: {
        fontSize: '5vw',
        fontFamily: 'Arial Rounded MT',
        color: theme.palette.primary.dark,
        textAlign: 'right',

    },
    bodyTextH:{
        fontFamily: 'Gill Sans MT',
        fontSize: '1.5em',
        color: theme.palette.primary.main,
        textAlign: 'right',
    },

}));