import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

function GamePlay() {
    const [items, setItems] = useState([]);
    const [data, setData] = useState([])
    useEffect(() => {
        DataGet();
    }, [])

    const DataGet = () => {
        const pathA = window.location.pathname;
        const pathSegments = pathA.split('/');
        //console.log(pathSegments[2]);

        axios.get(`listGame/${pathSegments[2]}`)
            .then((response) => {
                console.log(response.data.data.data.games);
                setItems(response.data.data.data.games);
            })
            .catch(error => {
                console.log('error', error);
            });
    };
    const PlayGame = (codeGame) => {
        const pathA = window.location.pathname;
        const pathSegments = pathA.split('/');
        axios.get(`seamlesslogIn/${codeGame}/${pathSegments[2]}`)
            .then((response) => {
                console.log(response.data.data);
                const link = response.data.data.data.url;
                window.open(link);
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    return (
        <>
            <div>
                <div className="popular-game features-game posRel mgt45">
                    <div className="vp-title">เกมยอดนิยม</div>
                    <div className="v-exclusive v-popular game mgt25">
                        <div className="game vGameList">
                            <div className="list">
                                <div className="holder holder_1">
                                    {items.map((row) => (
                                        <div key={row.rank}>
                                            <div className="box">
                                                <div className="image lazy"
                                                    data-src="https://siam855-pub.s3.ap-southeast-1.amazonaws.com/frontend/web/Online-Casino-Live-Game-Sexy-Baccarat-Classic-New-Siam855-Thailand.jpg?v=27"
                                                    role="img" alt="" style={{
                                                        backgroundImage: `url(${row.img})`
                                                    }}></div>
                                                <span className="name">
                                                    <span>{row.name}</span>
                                                </span>
                                                <div className="provider-name">{row.name}</div>
                                                <div className="box-play">
                                                    <div className="button-play boxGoPlay" data-gameid={row.providerCode} data-name={row.name}
                                                        data-pid="191" onClick={() => PlayGame(row.code)}>เล่น</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default GamePlay;