import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/LockOutline';
import Paper from '@material-ui/core/Paper';
import MailIcon from '@material-ui/icons/MailOutline';
import PersonIcon from '@material-ui/icons/PersonOutline';
import PermIcon from '@material-ui/icons/PermIdentity';
import AccountBoxIcon from '@material-ui/icons/AccountBox';



const styles = theme => ({
  root: {
    display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'space-around',
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    overflow: 'hidden',
  },
  button: {
    margin: `${theme.spacing.unit}px 0 ${theme.spacing.unit * 2}px`,
      textAlign: 'center',
  },
  formControl: {
    margin: theme.spacing.unit * 2,
    minWidth: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignment: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '500px',
  }
});

function RegisterWithIcon(props) {
  const { classes } = props;

  return (

      <div className={classes.root}>
     <Paper className={classes.root} elevation={5}>
     <div className={classes.alignment}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="input-with-icon-adornment">First Name</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="input-with-icon-adornment">Last Name</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <PermIcon />
            </InputAdornment>
          }
        />
      </FormControl>



      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
        <Input
          id="email"
          startAdornment={
            <InputAdornment position="start">
              <MailIcon />
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <LockIcon/>
            </InputAdornment>
          }
        />
      </FormControl>

      <div className={classes.button}>
        <Button variant="contained" color="primary" className={classes.button}>
         Sign Up
         <AccountBoxIcon className={classes.rightIcon} />
         </Button>
      </div>



      </div>
      </Paper>
    </div>
  );
}

RegisterWithIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterWithIcon);
