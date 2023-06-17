import React, { useEffect } from 'react';
import '../pangHome/test.css';
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";

const Competitivegame = () => {

    useEffect(() => {

    }, [])

    const PlayGame = () => {
        console.log('playGame');
    }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <>
            <div className="product-upcoming mgt45">
                <div className="vp-title">การแข่งขันที่จะเกิดขึ้น</div>
                <div className="soccer-container fam-list hide">
                    <div className="soccer-cont"></div>
                </div>
                <div className="casino-container fam-list" style={{ display: 'inline-block' }}>
                    <div className="casino-cont slick-initialized slick-slider slick-dotted">
                        <div className="slick-list draggable">
                            <div className="slick-track">
                                <Slider {...settings}>
                                    <div className="lc-holder slick-slide slick-cloned"
                                        data-slick-index="-1" aria-hidden="true" style={{ width: '548px' }} tabIndex="-1">
                                        <div >
                                            <img className="img-responsive board"
                                                src="https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_1(1).png" alt='' />
                                        </div>
                                    </div>
                                    <div className="lc-holder slick-slide" onClick={() => PlayGame()}
                                        data-slick-index="0" aria-hidden="true" style={{ width: '548px' }}
                                        role="tabpanel" id="slick-slide90" aria-describedby="slick-slide-control90">
                                        <div>
                                            <img className="img-responsive board"
                                                src="https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_2(1).png" alt='' />
                                        </div>
                                    </div>
                                    <div className="lc-holder slick-slide slick-current slick-active"
                                        onClick={() => PlayGame()} data-slick-index="1" aria-hidden="false"
                                        style={{ width: '548px' }} tabIndex="-1" role="tabpanel" id="slick-slide91"
                                        aria-describedby="slick-slide-control91">
                                        <div>
                                            <img className="img-responsive"
                                                src="https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_3(1).png" alt='' />
                                        </div>
                                    </div>
                                    <div className="lc-holder slick-slide" onClick={() => PlayGame()}
                                        data-slick-index="2" aria-hidden="true" style={{ width: '548px' }} tabIndex="-1"
                                        role="tabpanel" id="slick-slide92" aria-describedby="slick-slide-control92">
                                        <div>
                                            <img className="img-responsive board"
                                                src="https://websitehui.s3.ap-southeast-1.amazonaws.com/banner_4(1).png" alt='' />
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <ul className="slick-dots" role="tablist">
                            <li className="" role="presentation"><button type="button" role="tab"
                                id="slick-slide-control90" aria-controls="slick-slide90" aria-label="1 of 4"
                                tabIndex="0" aria-selected="true">1</button></li>
                            <li role="presentation" className="slick-active"><button type="button" role="tab"
                                id="slick-slide-control91" aria-controls="slick-slide91" aria-label="2 of 4"
                                tabIndex="-1">2</button></li>
                            <li role="presentation" className=""><button type="button" role="tab"
                                id="slick-slide-control92" aria-controls="slick-slide92" aria-label="3 of 4"
                                tabIndex="-1">3</button></li>
                            <li role="presentation" className=""><button type="button" role="tab"
                                id="slick-slide-control93" aria-controls="slick-slide93" aria-label="4 of 4"
                                tabIndex="-1">4</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Competitivegame;