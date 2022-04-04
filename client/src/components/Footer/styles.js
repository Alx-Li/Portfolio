import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footer: {
        background: '#ffffff',
        height: '10rem',
    },
    logo: {
        height: '5em',
        margin: theme.spacing(2.5),
        marginRight: theme.spacing(4)
    },
    header: {
        background: '#ffffff',
        position: 'fixed',
        height: '4rem',
    },
    icoButton: {
        marginRight: theme.spacing(0.5),
        color: theme.palette.primary.light,
        fontSize: '1em',
    },
    listFormat: {
        fontFamily: 'Gill Sans MT',
        color: theme.palette.primary.light,
        fontSize: '1em',
        display: 'flex',
        justifyContent: 'center'
    },
    listIco:{
        fontFamily: 'Gill Sans MT',
        fontSize: '1em',
        display: 'flex',
        justifyContent: 'right'
    }
    
}));