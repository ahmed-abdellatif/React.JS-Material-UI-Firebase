import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  root: {
    display: 'block',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
  flexBasis: 200,
},
});

function LoginWithIcon(props) {
  const { classes } = props;

  return (

      <div className={classes.root}>

      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
        <Input
          id="login-email"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
        <Input
          id="login-password"
          startAdornment={
            <InputAdornment position="end">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}

LoginWithIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginWithIcon);
