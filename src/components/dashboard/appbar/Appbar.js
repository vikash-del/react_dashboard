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
    <div className='appbar'>
      <div className='appbar-body'>
        <a href='#' className='font-size-14 desktopView hideMobileView'>
          Need Assistance?
        </a>
        <select>
          <option className='font-size-12'>A1029087 - John Carson Ec…</option>
        </select>
        <Mail style={{ color: '#fff' }} />
        <AccountCircleIcon className={classes.small} />
      </div>
    </div>
  );
}

export default Appbar;
