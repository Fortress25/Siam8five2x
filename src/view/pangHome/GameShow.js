import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination } from 'swiper';
import '../pangHome/test.css';
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
SwiperCore.use([Navigation, Pagination]);

function GameShow() {
    const [progressWidth, setProgressWidth] = useState(20);
    useEffect(() => {
        //DataGet();
    },)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextIcon />,
        prevArrow: <PrevIcon />,
        afterChange: (index) => {
            setProgressWidth((100 / 5) * (index + 1));
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const gameType = [
        {
            id: 1, name: 'PG Game Slot', provider_name: 'PG', data_gameid: 'PGSOFT2', data_name: 'PG Game Slot',
            img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/pgslot.webp'
        },
        {
            id: 2, name: 'Askmebet', provider_name: 'ASK', data_gameid: 'ASKMEBET', data_name: 'Askmebet',
            img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/askmebet.webp'
        },
        {
            id: 3, name: 'CQ9', provider_name: 'CQ9', data_gameid: 'CQ9V2', data_name: 'CQ9',
            img: 'https://pgslot-game.io/wp-content/uploads/2021/08/CQ9-SLOT-min-1.png'
        },
        {
            id: 4, name: 'Ambslot', provider_name: 'AMB', data_gameid: 'AMBSLOT2', data_name: 'Ambslot',
            img: 'https://fortuneox.net/wp-content/uploads/2022/12/gamecompanyamb.png'
        },
        {
            id: 5, name: 'Red Tiger', provider_name: 'EVO', data_gameid: 'REDTIGER', data_name: 'Red Tiger',
            img: 'https://pbs.twimg.com/profile_images/1495764482307637248/9yEFhc2D_400x400.jpg'
        },
        {
            id: 6, name: 'Dragon Gaming', provider_name: 'EVO', data_gameid: 'DRAGONGAMING', data_name: 'Dragon Gaming',
            img: 'https://as2.ftcdn.net/v2/jpg/03/19/27/03/1000_F_319270375_1tXTAdn0eim324DADDtNJZZVBLIVYTLP.jpg'
        },
        {
            id: 7, name: 'WmSlot', provider_name: 'EVO', data_gameid: 'WMSLOT', data_name: 'WmSlot',
            img: 'https://is3-ssl.mzstatic.com/image/thumb/Purple111/v4/22/0a/37/220a37e4-f17f-0b02-e54e-4869308fc2fb/source/512x512bb.jpg'
        },
        {
            id: 8, name: 'Spade Gaming', provider_name: 'EVO', data_gameid: 'SPADE', data_name: 'Spade Gaming',
            img: 'https://www.slotsreview.games/wp-content/uploads/2020/09/tabPp8TY.png'
        },
        {
            id: 9, name: 'I8', provider_name: 'EVO', data_gameid: 'I8', data_name: 'I8',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSokl0-jgqd5PRC_z88Q5m13kpMVH6YxTx88w&usqp=CAU'
        },
        {
            id: 10, name: 'UPG Slot', provider_name: 'EVO', data_gameid: '11306', data_name: 'UPG Slot',
            img: 'https://common-public.s3.ap-southeast-1.amazonaws.com/Game_Image/287x200/Online-Casino-Instant-Game-SPB-Dice.jpg'
        },
        {
            id: 11, name: 'Mega Ball', provider_name: 'EVO', data_gameid: '11307', data_name: 'Mega Ball',
            img: 'https://common-public.s3.ap-southeast-1.amazonaws.com/Game_Image/287x200/Online-Casino-Instant-Game-SPB-Dice.jpg'
        },
        {
            id: 12, name: 'Mega Ball', provider_name: 'EVO', data_gameid: '11308', data_name: 'Mega Ball',
            img: 'https://common-public.s3.ap-southeast-1.amazonaws.com/Game_Image/287x200/Online-Casino-Instant-Game-SPB-Dice.jpg'
        },
    ]

    const SeeGame = (campGame) => {
        window.location.href = `/game/${campGame}`;
    }

    return (
        <>
            <div className="game-show features-game posRel mgt45">
                <div className="v-gameshow game mgt25">
                    <div className="list">
                        <Slider {...settings}>
                            {gameType.map((row) => (
                                <div key={row.id} className="box">
                                    <div
                                        className="image lazy"
                                        data-src={row.img}
                                        role="img"
                                        alt="SIAM855 Lightning Roulette"
                                        style={{
                                            backgroundImage: `url(${row.img})`
                                        }}
                                    ></div>
                                    <span className="name">
                                        <span>{row.name}</span>
                                    </span>
                                    <div className="provider-name">{row.provider_name}</div>
                                    <div className="box-play">
                                        <div
                                            className="button-play boxGoPlay"
                                            data-gameid={row.data_gameid}
                                            data-name={row.data_name}
                                            data-pid="2"
                                            onClick={() => SeeGame(row.data_gameid)}
                                        >
                                            ดูเกมในค่าย
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

const PrevIcon = ({ onClick }) => {
    return (
        <div>
            <div className="vp-title">ค่ายเกมพิเศษของเรา</div>
            <br />
            <br />
            <div className="exclusive-prevTs">
                <div className="next-btn">
                    <div className="slick-icons slick-icons--left ">
                        <RiArrowLeftSLine className="slick-icons--left" onClick={onClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const NextIcon = ({ onClick }) => {
    return (
        <div className="exclusive-nextTs">
            <div className="slick-icons">
                <RiArrowRightSLine className="slick-icons--right" onClick={onClick} />
            </div>
        </div>
    );
};

export default GameShow;