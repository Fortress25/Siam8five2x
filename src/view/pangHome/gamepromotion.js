import React, { useEffect } from 'react';
const Gamepromotion = () => {

    useEffect(() => {

    }, [])
    return (
        <>
            <div className="d-dev">
                <div className="product-sub-category mgt45">
                    <div className="list">
                        <div className="vp-title">โปรโมชั่นล่าสุด</div>
                        <a className="sub-promo" href="/promotions">
                            <div className="sub-img"><img
                                src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/home/promo.png?v=27"
                                alt="promotions" /></div>
                            <div className="sub-title">
                                <h5>โปรโมชั่น</h5>
                                <span>พบกับโปรโมชั่นมากมายที่ห้ามพลาด!</span>
                            </div>
                        </a>
                    </div>
                    <div className="list">
                        <div className="vp-title">โปรแกรมวีไอพี</div>
                        <a className="sub-vip" href="/vip">
                            <div className="sub-img"><img
                                src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/home/vip.png?v=27"
                                alt="vip" /></div>
                            <div className="sub-title">
                                <h5>วีไอพี</h5>
                                <span>มาเป็น VIP เพื่อเพลิดเพลินกับสิทธิพิเศษระดับพรีเมียมของเรา</span>
                            </div>
                        </a>
                    </div>
                    <div className="list">
                        <div className="vp-title">โปรแกรมในเครือ</div>
                        <a className="sub-aff" href="https://aff.siam855th.co">
                            <div className="sub-img"><img
                                src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/home/aff.png?v=27"
                                alt="aff" /></div>
                            <div className="sub-title">
                                <h5>พันธมิตร</h5>
                                <span>เข้าร่วมตอนนี้เพื่อรับคอมมิชชั่นพิเศษ</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="product-lottery-category mgt45">
                <div className="lottery-footer">
                    <div>
                        <div className="lottery-title">
                            <lottie-player className="flame"
                                src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/json/hot.json?v=27"
                                background="transparent" speed="1" loop="" autoplay=""></lottie-player>
                            <span>ล็อตเตอรี่</span>
                        </div>
                        <div className="lottery-subtitle">เข้ามาเล่นและชนะ</div>
                    </div>
                    <div className="lottery-img">
                        <img src="asset_web/img/lottery.png?v=27" alt="lottery-img" />
                    </div>
                    <a className="button-lottery d-dev" href="/lottery"><span>เล่นเลย</span></a>
                </div>
            </div>

            <div className="chat-widget-container"></div>
            <div id="lineLoad" className="hide"></div>
            <div id="lineLoadOpt2" className="hide"></div>
        </>
    );
}

export default Gamepromotion;