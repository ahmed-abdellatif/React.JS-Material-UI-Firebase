import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
// List for SideNav
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MessageIcon from '@material-ui/icons/Message';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import withRoot from '../../withRoot';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';



import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  flexAppBar: {
    flex: 1,
    margin: theme.spacing.unit,
  },
  flexSideNav: {
    flex: 1,
    margin: theme.spacing.unit,
    textAlign: 'center',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  list: {
    width: 250,
  },
  button: {
     margin: theme.spacing.unit,
     textAlign: 'center',
     position: 'relative',
     //overflow: 'hidden',
   },

});

//{/* declare pathways */}
const HomeLink = props => <Link to="/home" {...props} />
const AboutLink = props => <Link to="/about" {...props} />
const TopicsLink = props => <Link to="/topics" {...props} />

{/* Begin Class */}
class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
// {/* break for render */}
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
{/*-- side drawer begin */}
      <br/>
      <Typography variant="title" color="primary" className={classes.flexSideNav}>
        UI
      </Typography>
      <Divider />

      <div className={classes.root}>
      <List component="nav">
{/* Home Link */}
        <ListItem button component={HomeLink} color="primary"  aria-label="Home">
          <ListItemText primary="Home" />
        </ListItem>
          <Divider />
{/* About Link */}
        <ListItem button component={AboutLink} color="primary" aria-label="About">
          <ListItemText primary="About" />
        </ListItem>
          <Divider />
{/* Topics Link */}
       <ListItem button component={TopicsLink} color="primary" aria-label="Topics">
        <ListItemText primary="Topics" />
       </ListItem>
     </List>
    </div>
  </div>
    );
{/* break for return */}
  return (
      <div className={classes.root}>
//{/* appbar begin */}
        <AppBar>
          <Toolbar>
            <IconButton color="secondary" className={classes.button} onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
{/* -------- AppBar Title */}
            <Typography variant="title" color="secondary" className={classes.flexAppBar}>
              UI
            </Typography>

{/* ------- Home Link */}
              <Button component={HomeLink} color="secondary" className={classes.button} aria-label="Home">
                Home
              </Button>
{/* ------ Editor Link */}
              <Button component={AboutLink} color="secondary" className={classes.button} aria-label="About">
              About
              </Button>
{/*------- Topics Link */}
              <Button component={TopicsLink} color="secondary" className={classes.button} aria-label="Topics">
                Topics
              </Button>
          </Toolbar>
        </AppBar>

        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>

        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
          </div>
        </Drawer>

      </div>
    );
  }
}


TemporaryDrawer.propTypes = {
 classes: PropTypes.object.isRequired,
 theme: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles, { withTheme: true })(TemporaryDrawer));
