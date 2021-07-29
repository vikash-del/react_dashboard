import React from 'react';
import Navbar from '../components/dashboard/navbar/Navbar';

import '../components/dashboard/navbar/Navbar.css';

function Menu() {
  const openMenu = () => {
    var Menu = document.getElementById('mobileMenu');
    if (Menu.style.display == 'block') {
      document.getElementById('burgerMenu').classList.remove('change');
      Menu.style.display = 'none';
    } else {
      document.getElementById('burgerMenu').classList.toggle('change');
      Menu.style.display = 'block';
    }
  };
  return <Navbar openMenu={openMenu} />;
}

export default Menu;
