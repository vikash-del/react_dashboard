import LinkedInIcon from '@material-ui/icons/LinkedIn';

import VcepLogo from '../../../assets/images/vcep-logo.png';
import Links from '../links/Links';

import './Aboutus.css';

function Aboutus() {
  return (
    <div className='aboutus'>
      <div className='aboutus-body'>
        <div className='logo'>
          <img src={VcepLogo}></img>
          <div>
            <a className='linkedin'>
              <LinkedInIcon />
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
