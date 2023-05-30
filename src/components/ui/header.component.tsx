import Nav from './nav.component';

import {ReactComponent as WhateverIcon} from '../../assets/svg/arrow_down.svg';
import greenHouseLogo from '../../assets/images/green_house_logo.png';
import greatBratain from '../../assets/images/great_britain.png';
import Avatar from './avatar.component';


const Header = () => {


  return (
    <header className="header_container">
      <img src={greenHouseLogo}/>
      <Nav />
      <div className='header_user flex-between'>
        <div className='header_user_language flex justify-evenly items-center cursor-pointer'>
          <img src={greatBratain} alt="great_bratain" />
          <span>English</span>
          <WhateverIcon />
        </div>
        <Avatar/>
      </div>
    </header>
  )
}

export default Header