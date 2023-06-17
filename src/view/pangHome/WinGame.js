import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import '../pangHome/test.css';
import Slider from "react-slick";

import "react-multi-carousel/lib/styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function WinGame() {

    const [progressWidth, setProgressWidth] = useState(20);

    useEffect(() => {
      
    }, [])

    const specialgame = [
        {
            id: 1, name: 'Honey Trap of Diao Chan', provider_name: 'diaochan', data_gameid: 'PGSOFT2', alt: 'Honey Trap of Diao Chan',
            img: 'https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/Online-Casino-Slot-Game-PG-Honey-Trap-of-Diaochan-Siam855-Thailand.jpg?v=31',
        },
        {
            id: 2, name: 'Win Win Won', provider_name: 'win-win-won', data_gameid: 'PGSOFT2', alt: 'Win Win Won',
            img: 'https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/Online-Casino-Slot-Game-PG-Win-Win-Won-Siam855-Thailand.jpg?v=31',
        },
        {
            id: 3, name: 'Ocean Lord', provider_name: '1001', data_gameid: 'ASKMEBET', alt: 'Ocean Lord',
            img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/ASKMEBET/1001.png',
        },
        {
            id: 4, name: 'Golden Zuma', provider_name: '4004', data_gameid: 'ASKMEBET', alt: 'Golden Zuma',
            img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/ASKMEBET/1643547822119_660687.png',
        },
        {
            id: 5, name: 'Jump & Jump', provider_name: '4005', data_gameid: 'ASKMEBET', alt: 'Jump & Jump',
            img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/ASKMEBET/1643547863130_144574.png',
        },
        {
            id: 6, name: "Let's Shoot", provider_name: '1002', data_gameid: 'ASKMEBET', alt: "Let's Shoot",
            img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/ASKMEBET/1002.png',
        },
        {
            id: 7, name: 'Plants vs. Dinos', provider_name: '1007', data_gameid: 'ASKMEBET', alt: 'Plants vs. Dinos',
            img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/ASKMEBET/1643547757415_476833.png',
        },
        {
            id: 8, name: 'Football Strike', provider_name: '602813', data_gameid: 'FUNKY', alt: 'Football Strike',
            img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/FUNKY/1620846771084_24179.png',
        },

    ]

    const PlayGame = (codeGame, name) => {
        console.log(progressWidth)
        axios.get(`seamlesslogIn/${codeGame}/${name}`)
            .then((response) => {
                const link = response.data.data.data.url;
                window.open(link);
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    const populargame = [
        {
            id: 1, name: 'PG', provider_name: 'SEXY', data_gameid: '264', data_name: 'PG', alt: 'PG',
            img: 'https://sv1.picz.in.th/images/2023/06/15/IOvAJb.png'
        },
        {
            id: 2, name: 'SlotXO', provider_name: 'PP', data_gameid: '4', data_name: 'SlotXO', alt: 'SlotXO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/2.png'
        },
        {
            id: 3, name: 'JoKer', provider_name: 'PP', data_gameid: '218', data_name: 'JoKer', alt: 'JoKer',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/3.png'
        },
        {
            id: 4, name: 'Ask me Bet', provider_name: 'PP', data_gameid: '28', data_name: 'Ask me Bet', alt: 'Ask me Bet',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/4.png'
        },
        {
            id: 5, name: 'PG', provider_name: 'SEXY', data_gameid: '264', data_name: 'PG', alt: 'PG',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/5.png'
        },
        {
            id: 6, name: 'SlotXO', provider_name: 'PP', data_gameid: '4', data_name: 'SlotXO', alt: 'SlotXO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/6.png'
        },
        {
            id: 7, name: 'JoKer', provider_name: 'PP', data_gameid: '218', data_name: 'JoKer', alt: 'JoKer',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/7.png'
        },
        {
            id: 8, name: 'Ask me Bet', provider_name: 'PP', data_gameid: '28', data_name: 'Ask me Bet', alt: 'Ask me Bet',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/8.png'
        },
        {
            id: 9, name: 'PG', provider_name: 'SEXY', data_gameid: '264', data_name: 'PG', alt: 'PG',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/9.png'
        },
        {
            id: 10, name: 'SlotXO', provider_name: 'PP', data_gameid: '4', data_name: 'SlotXO', alt: 'SlotXO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/10.png'
        },
        {
            id: 11, name: 'JoKer', provider_name: 'PP', data_gameid: '218', data_name: 'JoKer', alt: 'JoKer',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/11.png'
        },
        {
            id: 12, name: 'Ask me Bet', provider_name: 'PP', data_gameid: '28', data_name: 'Ask me Bet', alt: 'Ask me Bet',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/12.png'
        },
        {
            id: 13, name: 'PG', provider_name: 'SEXY', data_gameid: '264', data_name: 'PG', alt: 'PG',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/13.png'
        },
        {
            id: 14, name: 'SlotXO', provider_name: 'PP', data_gameid: '4', data_name: 'SlotXO', alt: 'SlotXO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/14.png'
        },
        {
            id: 15, name: 'JoKer', provider_name: 'PP', data_gameid: '218', data_name: 'JoKer', alt: 'JoKer',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/15.png'
        },
        {
            id: 16, name: 'Ask me Bet', provider_name: 'PP', data_gameid: '28', data_name: 'Ask me Bet', alt: 'Ask me Bet',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/16.png'
        },
        {
            id: 17, name: 'PG', provider_name: 'SEXY', data_gameid: '264', data_name: 'PG', alt: 'PG',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/17.png'
        },
        {
            id: 18, name: 'SlotXO', provider_name: 'PP', data_gameid: '4', data_name: 'SlotXO', alt: 'SlotXO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/18.png'
        },
        {
            id: 19, name: 'JoKer', provider_name: 'PP', data_gameid: '218', data_name: 'JoKer', alt: 'JoKer',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/19.png'
        },
        {
            id: 20, name: 'Ask me Bet', provider_name: 'PP', data_gameid: '28', data_name: 'Ask me Bet', alt: 'Ask me Bet',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/20.png'
        },
        {
            id: 21, name: 'PG', provider_name: 'SEXY', data_gameid: '264', data_name: 'PG', alt: 'PG',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/21.png'
        },
        {
            id: 22, name: 'SlotXO', provider_name: 'PP', data_gameid: '4', data_name: 'SlotXO', alt: 'SlotXO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/22.png'
        },
        {
            id: 23, name: 'JoKer', provider_name: 'PP', data_gameid: '218', data_name: 'JoKer', alt: 'JoKer',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/23.png'
        },
        {
            id: 24, name: 'Ask me Bet', provider_name: 'PP', data_gameid: '28', data_name: 'Ask me Bet', alt: 'Ask me Bet',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/24.png'
        },
        {
            id: 25, name: 'PG', provider_name: 'SEXY', data_gameid: '264', data_name: 'PG', alt: 'PG',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/25.png'
        },
        {
            id: 26, name: 'SlotXO', provider_name: 'PP', data_gameid: '4', data_name: 'SlotXO', alt: 'SlotXO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/26.png'
        },
        {
            id: 27, name: 'JoKer', provider_name: 'PP', data_gameid: '218', data_name: 'JoKer', alt: 'JoKer',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/27.png'
        },
        {
            id: 28, name: 'Ask me Bet', provider_name: 'PP', data_gameid: '28', data_name: 'Ask me Bet', alt: 'Ask me Bet',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/28.png'
        },
        {
            id: 29, name: 'PG', provider_name: 'SEXY', data_gameid: '264', data_name: 'PG', alt: 'PG',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/29.png'
        },
        {
            id: 30, name: 'SlotXO', provider_name: 'PP', data_gameid: '4', data_name: 'SlotXO', alt: 'SlotXO',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/30.png'
        },
        {
            id: 31, name: 'JoKer', provider_name: 'PP', data_gameid: '218', data_name: 'JoKer', alt: 'JoKer',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/31.png'
        },
        {
            id: 32, name: 'Ask me Bet', provider_name: 'PP', data_gameid: '28', data_name: 'Ask me Bet', alt: 'Ask me Bet',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/32.png'
        },
    ]

    const trading = [
        {
            id: 1, name: 'Lobby', provider_name: 'Binary', data_gameid: 'HOTGRAPH', data_name: 'Lobby', alt: 'Lobby',
            img: 'https://websitehui.s3.ap-southeast-1.amazonaws.com/51.png'
        },
    ]

    const settings = {
        className: "center",
        centerPadding: "60px",
        infinite: true,
        slidesToShow: 3,
        swipeToSlide: true,
        rows: 2,
        speed: 150,
        slidesPerRow: 2,
        nextArrow: <NextIcon />,
        prevArrow: <PrevIcon />,
        afterChange: (index) => {
            setProgressWidth((100 / 5) * (index + 1));
        },
    };

    return (
        <>
            <div className="exclusive-game features-game posRel mgt45">
                <div className="vp-title">เกมพิเศษของเรา</div>

                <div className="v-exclusive game mgt25">
                    <div className="list">
                        <div className="holder holder_1">
                            {specialgame.map((row) => (
                                <div key={row.id} className="box">
                                    <div className="image lazy"
                                        data-src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/Online-Casino-Live-Game-Sexy-Baccarat-Classic-New-Siam855-Thailand.jpg?v=27"
                                        role="img" alt="" style={{
                                            backgroundImage: `url(${row.img})`,
                                        }}></div>
                                    <span className="name">
                                        <span>{row.name}</span>
                                    </span>
                                    <div className="provider-name">{row.name}</div>
                                    <div className="box-play">
                                        <div className="button-play boxGoPlay" data-gameid={row.id} data-name={row.name}
                                            data-pid="191" onClick={() => PlayGame(row.data_gameid, row.provider_name)}>เล่น</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="exclusive-next">
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
            </div>

            <div className="popular-game features-game posRel mgt45">

                <div className="v-exclusive game mgt25">
                    <div className="list">
                        <div className='holderA'>
                            <div className='holder_1'>
                                <Slider {...settings}>
                                    {populargame.map((row) => (
                                        <div key={row.id}>
                                            <div className="boxGame">
                                                <div className="box">
                                                    <div className="image lazy"
                                                        role="img" alt="" style={{
                                                            backgroundImage: `url(${row.img})`,
                                                        }}></div>
                                                    <span className="name">
                                                        <span>{row.name}</span>
                                                    </span>
                                                    <div className="provider-name">{row.name}</div>
                                                    <div className="box-play">
                                                        <div className="button-play boxGoPlay" data-gameid={row.id} data-name={row.name}
                                                            data-pid="191" onClick={() => PlayGame(row.provider_name, row.data_gameid)}>เข้าดูเกม</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="popular-game features-game posRel mgt45">
                <div className="vp-title">Trading</div>
                <div className="v-exclusive game mgt25">
                    <div className="list">
                        <div className="holder holder_1">
                            {trading.map((row) => (
                                <div key={row.id}>
                                    <div className="box">
                                        <div className="image lazy"
                                            data-src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/Online-Casino-Live-Game-Sexy-Baccarat-Classic-New-Siam855-Thailand.jpg?v=27"
                                            role="img" alt="" style={{
                                                backgroundImage: `url(${row.img})`,
                                            }}></div>
                                        <span className="name">
                                            <span>{row.name}</span>
                                        </span>
                                        <div className="provider-name">{row.name}</div>
                                        <div className="box-play">
                                            <div className="button-play boxGoPlay" data-gameid={row.id} data-name={row.name}
                                                data-pid="191" onClick={() => PlayGame(row.provider_name, row.data_gameid)}>เล่น</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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

export default WinGame;