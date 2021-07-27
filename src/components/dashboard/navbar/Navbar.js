import Menu from '@material-ui/icons/Menu';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import VcepLogo from '../../../assets/images/vcep-logo.png';

import './Navbar.css';

function Navbar() {
  const useStyles = makeStyles((theme) =>
    createStyles({
      small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
      },
    })
  );
  const classes = useStyles();
  return (
    <div className='navbar'>
      <div className='navbar-body'>
        <div>
          <img src={VcepLogo} alt='logo'></img>
        </div>
        <div className='hideMobileView desktopView'>
          <a href='#'>ACCOUNT SUMMARY</a>
          <a href='#'>GRANTS</a>
          <a href='#'>CONTRIBUTIONS</a>
          <a href='#'>INVESTMENTS</a>
          <a href='#'>RESOURCES</a>
          <a href='#'>MY ACCOUNT</a>
        </div>
        <div className='hideDesktopView mobileView'>
          <Menu className={classes.small} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
