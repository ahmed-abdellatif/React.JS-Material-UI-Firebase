import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HighlightIcon from '@material-ui/icons/Highlight';
import SimpleCard from '../components/SimpleCard';
import withRoot from '../../withRoot';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import LoginWithIcon from '../components/LoginWithIcon';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
      flex: '1 0 100%',
    },
    container: {
   display: 'flex',
 },
 paper: {
   margin: theme.spacing.unit,
     textAlign: 'center',
 },
    hero: {
      minHeight: '80vh',
      flex: '0 0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.type === 'light' ? theme.palette.primary.dark : theme.palette.primary.main,
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      letterSpacing: '.3rem',
      textIndent: '.3rem',
      flexDirection: 'column',
      fontWeight: theme.typography.fontWeightLight,
      marginBottom: theme.spacing.unit,
      [theme.breakpoints.only('xs')]: {
        fontSize: 28,
      },
      whiteSpace: 'nowrap',
    },
    headline: {
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      fontWeight: theme.typography.fontWeightLight,
      marginTop: theme.spacing.unit ,
      letterSpacing: '.1rem',
      maxWidth: 500,
      textAlign: 'center',
    },
    content: {
      paddingBottom: theme.spacing.unit * 8,
      paddingTop: theme.spacing.unit * 8,
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing.unit * 12,
      },
    },
    button: {
      margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 4}px`,
        textAlign: 'center',
    },
    steps: {
      maxWidth: theme.spacing.unit * 130,
      margin: 'auto',
    },
    step: {
      padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    },
    stepIcon: {
      marginBottom: theme.spacing.unit,
    },
    markdownElement: {},

  //{/* card component style class */}
  containCard: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 4}px`,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  labelStyle: {
  fontSize: 24,
  },
  iOSBar: {
   borderRadius: 13,
   width: 42,
   height: 26,
   marginTop: -13,
   marginLeft: -21,
   border: 'solid 1px',
   borderColor: theme.palette.grey[400],
   backgroundColor: theme.palette.grey[50],
   opacity: 1,
   transition: theme.transitions.create(['background-color', 'border']),
 },
 iOSIcon: {
   width: 24,
   height: 24,
 },
 iOSIconChecked: {
   boxShadow: theme.shadows[1],
 },
});

class Login extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.hero}>
          <div className={classes.content}>
            <div className={classes.text}>

            <Typography
              variant="display3"
              align="center"
              component="h2"
              color="primary"
              gutterBottom
              className={classes.title}
            >
              {'Login'}
            </Typography>

            <Typography
              variant="headline"
              component="h2"
              color="primary"
              gutterBottom
              className={classes.headline}
            >
              {"Welcome Back!"}
            </Typography>
          <br />
          <br />




      <LoginWithIcon />
      </div>
      </div>

      </div>

      </div>

    );
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles, { withTheme: true })(Login));
