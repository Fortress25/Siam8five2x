import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
//import nft from "../img/toonta.png";
import Headers from '../headers';
import MenuHome from '../pangHome/MenuHome';
import Allgamecamps from '../pangHome/Allgamecamps';
import GamePlay from './GamePlay';
import BannerBox from '../pangHome/BannerBox';

const GameAll = () => {

    const PlayGame = () => {
        console.log('playGame');
    }

    return (
        <div>
            <div className="main-content">
                <div id="topBar-holder" class="topBar-holder">
                    <Headers />
                    <MenuHome />
                </div>
                <div className="buttonToTop"><i className="fa-regular fa-arrow-up-to-line"></i></div>

                <div className="pg-home common-holder">
                    <div className="content-holder">
                        <BannerBox />
                        <GamePlay />
                    </div>
                </div>
            </div>
            <div className="section-footer mid-footer d-dev">
                <div className="section-footer-inner">
                    <Allgamecamps />

                    <div className="footer-mid-content">
                        <div className="mid-content social-media-holder">
                            <h5 className="text-uppercase">ได้รับการติดต่อ</h5>
                            <div className="social-media">
                                <img className="img-responsive fb-btn"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/footer/ico-facebook.png?v=27" alt='' />
                                <img className="img-responsive insta-btn"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/footer/ico-ig.png?v=27" alt='' />
                            </div>
                        </div>
                        <div className="vertical-line social-media-holder"></div>
                        <div className="mid-content">
                            <h5 className="text-uppercase">รับรอง</h5>
                            <div>
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/footer/certification/bmm.png?v=27" alt='' />
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/footer/certification/godaddy.png?v=27" alt='' />
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/footer/certification/itechlab.png?v=27" alt='' />
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/footer/certification/TST.png?v=27" alt='' />
                            </div>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="mid-content">
                            <h5 className="text-uppercase">วิธีการขำระเงิน</h5>
                            <div>
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/icon/ico-bank.svg?v=27" alt='' />
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/icon/ico-speedpay.png?v=27" alt='' />
                                <img className="img-responsive"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/icon/ico-alfapay.png?v=27" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-copyright">
                <div className="section-footer-inner">
                    <div className="left-content">
                        © 2023 SIAM855 All Rights Reserved.
                    </div>
                    <div className="right-content">
                        <a href="https://www.ibsgaming.com/" className="ibslogo home-show">
                            <img
                                src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/footer/logo-ibs.png?v=27" alt='' />
                        </a>
                        <img
                            src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/footer/logo-gamecare.svg?v=27" alt='' />
                        <img className="d-dev"
                            src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/footer/logo-age.svg?v=27" alt='' />
                        <img className="d-dev"
                            src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/footer/logo-beaware.svg?v=27" alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameAll;