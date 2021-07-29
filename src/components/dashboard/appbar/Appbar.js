import Mail from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import './Appbar.css';

function Appbar() {
  const useStyles = makeStyles((theme) =>
    createStyles({
      small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
    })
  );
  const classes = useStyles();
  return (
    <header className='appbar'>
      <div className='appbar-body'>
        <a href='#' className='needAssistance desktopView hideMobileView'>
          Need Assistance?
        </a>
        <select>
          <option className='A1029087'>A1029087 - John Carson Ec…</option>
        </select>
        <Mail style={{ color: '#fff' }} />
        <AccountCircleIcon className={classes.small} />
      </div>
    </header>
  );
}

export default Appbar;
