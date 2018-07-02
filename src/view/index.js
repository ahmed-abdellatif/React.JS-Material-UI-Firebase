import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TemporaryDrawer from './components/TemporaryDrawer';
import withRoot from '../withRoot';

  const styles = theme => ({
  root: {
  flex: 1,
  margin: theme.spacing.unit * 8,
  },
});

class Index extends React.Component {
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
      {/* this can be found in 'components/TemporaryDrawer.js' */}
      <TemporaryDrawer />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
