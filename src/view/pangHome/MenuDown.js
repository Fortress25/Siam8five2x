import React from 'react';
import nft from "../../img/toonta.png";
const MenuDown = () => {

    return (
        <>
            <div className="section-footer top-footer d-dev">
                <div className="section-footer-inner">
                    <div className="footer-menu-link">
                        <div>
                            <img className="logo" src={nft} alt="logo" />
                        </div>
                        <div>
                            <a href="/">บ้าน</a>
                            <a href="/about-us">เกี่ยวกับพวกเรา</a>
                            <a href="/faq">คำถามที่พบบ่อย</a>
                            <a href="/contact-us">ติดต่อพวกเรา</a>
                            <a href="/terms-and-conditions">ข้อกำหนดและเงื่อนไข</a>
                            <a href="/privacy-policy">นโยบายความเป็นส่วนตัว</a>
                            <a href="/responsible-gaming">การเล่นเกมส์อย่างมีความรับผิดชอบ</a>
                            <a href="/disconnect-policy">ยกเลิกนโยบาย</a>
                        </div>
                        <div>
                            <div className="live-chat-green-button button pointer vBtnLaiveChat">
                                <img className="img-responsive mgr10"
                                    src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/footer/ico-live-chat.png?v=27" alt='' />
                                <span>แชทสด</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default MenuDown;