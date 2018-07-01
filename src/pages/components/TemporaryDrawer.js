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
    backgroundColor: theme.palette.background.paper,
  },
  flexAppBar: {
    flex: 1,
  //  margin: theme.spacing.unit,
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
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    display: 'flex',
   },
});

//{/* declare pathways */}
const HomeLink = props => <Link to="/home" {...props} />
const AboutLink = props => <Link to="/about" {...props} />
const TopicsLink = props => <Link to="/topics" {...props} />
const RegisterLink = props => <Link to="/register" {...props} />
const LoginLink = props => <Link to="/login" {...props} />



{/* Begin Class */}
class TemporaryDrawer extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
/***********************************************************
 ***                SideNav begins                       ***
***********************************************************/
     render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
      <br/>
{/*-- side drawer title */}
      <Typography variant="title" color="primary" className={classes.flexSideNav}>
        UI
      </Typography>
      <div className={classes.root}>
      <List component="nav">
      <Divider />
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
       <Divider />

{/* Register Link */}
       <ListItem button component={RegisterLink} color="primary" aria-label="Register">
         <ListItemText primary="Register" />
       </ListItem>
         <Divider />

         {/* Login Link */}
                <ListItem button component={LoginLink} color="primary" aria-label="Login">
                  <ListItemText primary="Login" />
                </ListItem>
                  <Divider />

     </List>
    </div>
  </div>
    );


/***********************************************************
 ***                     AppBar begins                   ***
***********************************************************/

  return (
      <div className={classes.root}>
        <AppBar position="absolute">
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
{/*------- Register Link */}
              <Button component={RegisterLink} color="secondary" className={classes.button} aria-label="Register">
                Register
              </Button>
{/*------- Login Link */}
             <Button component={LoginLink} color="secondary" className={classes.button} aria-label="Login">
                  Login
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
