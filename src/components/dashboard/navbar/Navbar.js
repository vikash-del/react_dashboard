import Menu from '@material-ui/icons/Menu';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import VcepLogo from '../../../assets/images/vcep-logo.png';
import MobileMenu from '../mobileMenu/MobileMenu';

import './Navbar.css';

function Navbar(props) {
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
    <navbar className='navbar'>
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
        <div
          onClick={props.openMenu}
          id='burgerMenu'
          className='burgerMenu hideDesktopView mobileView'
        >
          <div class='bar1'></div>
          <div class='bar2'></div>
          <div class='bar3'></div>
        </div>
      </div>
      <div id='mobileMenu' className='mobilemenu'>
        <MobileMenu />
      </div>
    </navbar>
  );
}

export default Navbar;
