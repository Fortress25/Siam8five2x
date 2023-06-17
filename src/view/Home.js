import React from 'react';
import Headers from './headers';
import MenuHome from './pangHome/MenuHome';
import BannerBox from './pangHome/BannerBox';
import GameShow from './pangHome/GameShow';
import WinGame from './pangHome/WinGame';
import Competitivegame from './pangHome/competitivegame';
import Gamepromotion from './pangHome/gamepromotion';
import Allgamecamps from './pangHome/Allgamecamps';
import Mycard from './pangHome/Mycard';
import IntegrationMenu from './pangHome/IntegrationMenu';
import ContactUs from './pangHome/ContactUs';
import MenuDown from './pangHome/MenuDown';
import PaymentMethod from './pangHome/PaymentMethod';
const Home = () => {

  return (
    <>
      <div className="main-content">
        <Mycard />

        <div id="topBar-holder" className="topBar-holder">
          <div className="topBar-holder">
            <Headers />
            <MenuHome />
          </div>
        </div>
        <div className="buttonToTop"><i className="fa-regular fa-arrow-up-to-line"></i></div>

        <div className="pg-home common-holder">
          <div className="content-holder">
            <BannerBox />
            <GameShow />
            <WinGame />
            <Competitivegame />
            <Gamepromotion />
          </div>
          <IntegrationMenu />
          <ContactUs />
        </div>
      </div>
      <div className="overlay-mobile"></div>
      <MenuDown />
      <div className="section-footer mid-footer d-dev">
        <div className="section-footer-inner">
          <Allgamecamps />
          <PaymentMethod />
        </div>
      </div>
      <div className="section-copyright">
        <div className="section-footer-inner">
          <div className="left-content">
            © 2023 SIAM855 All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;