import React from 'react';

import './MobileMenu.css';

function MobileMenu() {
  return (
    <div className='menu hideDesktopView mobileView'>
      <a href='#'>ACCOUNT SUMMARY</a>
      <a href='#'>GRANTS</a>
      <a href='#'>CONTRIBUTIONS</a>
      <a href='#'>INVESTMENTS</a>
      <a href='#'>RESOURCES</a>
      <a href='#'>MY ACCOUNT</a>
    </div>
  );
}

export default MobileMenu;
