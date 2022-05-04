import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footer: {
        background: '#ffffff',
        height: '7.2rem',
        [theme.breakpoints.down('sm')]: {
            height: '20rem',
        },
        [theme.breakpoints.down(682)]: {
            height: '22rem',
        },
        [theme.breakpoints.down(419)]: {
            height: '26rem',
        },
        [theme.breakpoints.down(330)]: {
            height: '28rem',
        },
        [theme.breakpoints.down(296)]: {
            height: '30rem',
        },
        [theme.breakpoints.down(281)]: {
            height: '34rem',
        },
    },
    logo: {
        height: '5em',
        margin: theme.spacing(2.5),
        marginRight: theme.spacing(4)
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
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.secondary.light,

    },
    footerContentBox: {
        width: '13rem',
    },
    footerContentText: {
        fontSize: '0.75em',
        fontFamily: 'Gill Sans MT',
        color: theme.palette.secondary.light,
    },
    listFormatTitle: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '0',
    },
    listFormatBody: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '0',

    },
    listText: {
        color: theme.palette.secondary.light,
        fontSize: '1.2em',
        fontFamily: 'Gill Sans MT',
    }
    
}));