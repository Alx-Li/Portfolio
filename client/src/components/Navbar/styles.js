import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    header: {
        background: '#ffffff',
        position: 'fixed',
        height: '4rem',
    },
    logo: {
        height: '2.5em',
        margin: theme.spacing(1.5),
        marginRight: theme.spacing(4)
    },
    navButton: {
        marginLeft: theme.spacing(1.3),
        marginRight: theme.spacing(1.3),
        fontSize: 'large',
        color: theme.palette.primary.light,
    },
    icoButton: {
        marginRight: theme.spacing(0.5),
        color: theme.palette.primary.light,
        fontSize: '1.5em',
    },
    listFormat: {
        fontFamily: 'Gill Sans MT',
        color: theme.palette.primary.light,
        fontSize: '1.25em',
        display: 'flex',
        justifyContent: 'center'
    },
    listIco:{
        fontFamily: 'Gill Sans MT',
        fontSize: '1.5em',
        display: 'flex',
        justifyContent: 'right'
    }
}));