import React from 'react';
function MenuHome() {

    return (
        <>
            <div className="topbar-menu">
                <div className="topNavBarMenu d-dev">
                    <div className="topNavBar-link">
                        <ul className="dropdown-mainNav">
                            <li>
                                <a className="box d-dev active" data-type="home" data-v="home" href="/th-th">
                                    <span className="icon-home"></span>
                                </a>
                            </li>
                            <li><a className="box" data-type="sport" data-v="game" data-name="กีฬา" href="/sport">
                                <span className="icon-sport"></span>
                                <span>กีฬา</span>
                            </a></li>
                            <li><a className="box" data-type="live" data-v="game" data-name="คาสิโนสด" href="/live">
                                <span className="icon-live"></span>
                                <span>คาสิโนสด</span>
                            </a></li>
                            <li><a className="box" data-type="slot" data-v="game" data-name="สล็อต" href="/slot">
                                <span className="icon-slot"></span>
                                <span>สล็อต</span>
                            </a></li>
                            <li><a className="box" data-type="card" data-v="game" data-name="การ์ด" href="/card">
                                <span className="icon-card"></span>
                                <span>การ์ด</span>
                            </a></li>
                            <li><a className="box" data-type="fish" data-v="game" data-name="เกมส์ยิงปลา" href="/fish">
                                <span className="icon-fish"></span>
                                <span>เกมส์ยิงปลา</span>
                            </a></li>
                            <li><a className="box" data-type="esport" data-v="game" data-name="อีสปอร์ต" href="/esport">
                                <span className="icon-esport"></span>
                                <span>อีสปอร์ต</span>
                            </a></li>
                            <li><a className="box" data-type="lottery" data-v="game" data-name="ล็อตเตอรี่" href="/lottery">
                                <span className="icon-lottery"></span>
                                <span>ล็อตเตอรี่</span>
                            </a></li>

                            <li className="more" style={{ display: "inline-flex" }}>
                                <span className="box button-more">มากกว่า</span>
                            </li>
                        </ul>

                        <ul className="dropdown-nav" style={{ display: "none" }}>

                            <li><a className="box" data-type="cockfight" data-v="game" data-name="ไก่ชน" href="/cockfight">
                                <span className="icon-cockfight"></span>
                                <span>ไก่ชน</span>
                            </a></li>
                            <li><a className="box" data-type="instantwin" data-v="game" data-name="ชนะทันที"
                                href="/instantwin">
                                <span className="icon-instantwin"></span>
                                <span>ชนะทันที</span>
                            </a></li>
                            <li><a className="box" data-type="promotions" data-v="promotions" data-name="promotions"
                                href="/promotions">
                                <span className="icon-promotion"></span>
                                <span>โปรโมชั่น</span>
                            </a></li>
                            <li className="vip-menu-btn"><a className="box" data-type="vip" data-name="vip" href="/vip">
                                <span className="icon-vip"></span>
                                <span>วีไอพี</span>
                            </a></li>

                            <li className="tournament-menu hide"><a className="box" data-type="leaderboard"
                                data-name="leaderboard" href="/leaderboard">
                                <span className="icon-leaderboard"></span>
                                <span>ลีดเดอร์บอร์ด</span>
                            </a></li>
                            <li className="side-menu-calendar-btn">
                                <div className="box" data-type="daily-mission" data-name="daily-mission">
                                    <i className="fa-regular fa-club"></i>
                                    <span>ลงชื่อเข้าใช้รายวัน</span>
                                </div>
                            </li>
                            <li className="lucky-spin-btn"><a className="box" data-type="lucky-spin" data-name="lucky-spin"
                                href="/lucky-spin">
                                <i className="fa-regular fa-diamond"></i>
                                <span>หมุนเสี่ยงโชค</span>
                            </a></li>
                            <li className="angpow_topBar hide"><a className="box" data-type="angpow" data-name="angpow"
                                href="/angpow">
                                <i className="icon-angpow icSize"></i>
                                <span>อังโปว์</span>
                            </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="topbar-menu-inner m-dev">
                    <div className="d-game-type-list">
                        <div className="game-type-list">
                            <li><a className="box d-dev active" data-type="home" data-v="home" href="/th-th">
                                <span className="icon-home"></span>
                            </a></li>
                            <li><a className="box" data-type="sport" data-v="game" data-name="กีฬา" href="/sport">
                                <span className="icon-sport"></span>
                                <span>กีฬา</span>
                            </a></li>
                            <li><a className="box" data-type="live" data-v="game" data-name="คาสิโนสด" href="/live">
                                <span className="icon-live"></span>
                                <span>คาสิโนสด</span>
                            </a></li>
                            <li><a className="box" data-type="slot" data-v="game" data-name="สล็อต" href="/slot">
                                <span className="icon-slot"></span>
                                <span>สล็อต</span>
                            </a></li>
                            <li><a className="box" data-type="card" data-v="game" data-name="การ์ด" href="/card">
                                <span className="icon-card"></span>
                                <span>การ์ด</span>
                            </a></li>
                            <li><a className="box" data-type="fish" data-v="game" data-name="เกมส์ยิงปลา" href="/fish">
                                <span className="icon-fish"></span>
                                <span>เกมส์ยิงปลา</span>
                            </a></li>
                            <li><a className="box" data-type="esport" data-v="game" data-name="อีสปอร์ต" href="/esport">
                                <span className="icon-esport"></span>
                                <span>อีสปอร์ต</span>
                            </a></li>
                            <li><a className="box" data-type="lottery" data-v="game" data-name="ล็อตเตอรี่" href="/lottery">
                                <span className="icon-lottery"></span>
                                <span>ล็อตเตอรี่</span>
                            </a></li>
                            <li><a className="box" data-type="cockfight" data-v="game" data-name="ไก่ชน" href="/cockfight">
                                <span className="icon-cockfight"></span>
                                <span>ไก่ชน</span>
                            </a></li>
                            <li><a className="box" data-type="instantwin" data-v="game" data-name="ชนะทันที"
                                href="/instantwin">
                                <span className="icon-instantwin"></span>
                                <span>ชนะทันที</span>
                            </a></li>
                            <li><a className="box" data-type="promotions" data-v="promotions" data-name="promotions"
                                href="/promotions">
                                <span className="icon-promotion"></span>
                                <span>โปรโมชั่น</span>
                            </a></li>
                            <li className="vip-menu-btn"><a className="box" data-type="vip" data-name="vip" href="/vip">
                                <span className="icon-vip"></span>
                                <span>วีไอพี</span>
                            </a></li>
                            <li>
                                <div className="box d-dev app-download" data-type="app-download" data-name="app-download">
                                    <i className="fa-solid fa-arrow-down-to-line"></i>
                                    <span>ดาวน์โหลด</span>
                                </div>
                            </li>
                            <li className="tournament-menu hide"><a className="box" data-type="leaderboard"
                                data-name="leaderboard" href="/leaderboard">
                                <span className="icon-leaderboard"></span>
                                <span>ลีดเดอร์บอร์ด</span>
                            </a></li>
                            <li className="side-menu-calendar-btn">
                                <div className="box" data-type="daily-mission" data-name="daily-mission">
                                    <i className="fa-regular fa-club"></i>
                                    <span>ลงชื่อเข้าใช้รายวัน</span>
                                </div>
                            </li>
                            <li className="lucky-spin-btn"><a className="box" data-type="lucky-spin" data-name="lucky-spin"
                                href="/lucky-spin">
                                <i className="fa-regular fa-diamond"></i>
                                <span>หมุนเสี่ยงโชค</span>
                            </a></li>
                            <li className="angpow_topBar hide"><a className="box" data-type="angpow" data-name="angpow"
                                href="/angpow">
                                <i className="icon-angpow icSize"></i>
                                <span>อังโปว์</span>
                            </a></li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default MenuHome;