import logo from '../../../assets/images/vanguardLogo.png';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-body'>
        <img src={logo} />
        <p>
          © 2019 Vanguard Charitable Endowment Program. VANGUARD and the
          Vanguard Ship Logo are trademarks of The Vanguard Group, Inc.
        </p>
      </div>
    </div>
  );
}

export default Footer;
