import React from 'react'
const Mycard = () => {
    return (
        <>
            <div className="sidebar-menu m-dev" id="sidebar-menu">
                <div className="sidebar-header">
                    <img className="logo" src="asset_web/img/toonta.png" alt="logo" />
                    <div className="sidebar-close">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="sidebar-body">
                    <div className="sidebar-list">
                        <a className="box" href="/">
                            <span className="icon icon-home"></span>
                            <span>บ้าน</span>
                        </a>
                        <a className="box vip-menu-btn" href="/vip">
                            <span className="icon icon-vip"></span>
                            <span>วีไอพี</span>
                        </a>
                        <a className="box" href="/promotions">
                            <span className="icon icon-promotion"></span>
                            <span>โปรโมชั่น</span>
                        </a>
                        <a className="box tournament-menu hide" href="/leaderboard">
                            <span className="icon icon-leaderboard"></span>
                            <span>ลีดเดอร์บอร์ด</span>
                        </a>
                        <a className="box" href="/about-us">
                            <i className="fa-regular fa-circle-info"></i>
                            <span>ศูนย์ข้อมูล</span>
                        </a>
                        <a className="box" href="/contact-us">
                            <i className="fa-regular fa-user-headset"></i>
                            <span>ติดต่อพวกเรา</span>
                        </a>

                        <a className="box" href="https://aff.siam855th.co">
                            <span className="icon icon-affiliate"></span>
                            <span>โปรแกรมในเครือ</span>
                        </a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Mycard