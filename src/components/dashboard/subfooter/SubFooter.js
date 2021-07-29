import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { AiFillLinkedin } from 'react-icons/ai';

import VcepLogo from '../../../assets/images/vcep-logo.png';
import Links from '../links/Links';

import './SubFooter.css';

function Aboutus() {
  return (
    <div className='subFooter'>
      <div className='subFooter-body'>
        <div className='logo'>
          <img src={VcepLogo}></img>
          <div className='hideDesktopView mobileView'>
            <LinkedInIcon />
            <TwitterIcon />
            <YouTubeIcon />
            <RssFeedIcon />
            <MailOutlineIcon />
          </div>
          <div className='hideMobileView'>
            <a className='link' href='#'>
              <sub>
                <AiFillLinkedin className='linkedIn' />
              </sub>
              Follow us on LinkedIn
            </a>
          </div>
          <div>© 2019 Vanguard Charitable Endowment Program</div>
        </div>
        <Links />
        <div>
          <div className='subscribe'>Subscribe to our Newsletter</div>
          <div>
            <input
              className='textbox'
              type='text'
              placeholder='Enter your Email Address'
            />
            <button className='submit'>&rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
