import logo from '../../../assets/images/vanguardLogo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-body'>
        <img src={logo} />
        <p>
          © 2019 Vanguard Charitable Endowment Program. VANGUARD and the
          Vanguard Ship Logo are trademarks of The Vanguard Group, Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
