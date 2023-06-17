import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import "./Modal.css";
import axios from '../api/axios';


export default function ListGame(data) {
  const [items, setItems] = useState([]);

  const gameType =[
    {id: 1, name: 'PG Soft', category: 'EGAMES', type: 'SLOT', productId:'PGSOFT2', img : '	https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/pgslot.webp'},
    {id: 2, name: 'Slotxo', category: 'EGAMES', type: 'SLOT', productId:'SLOTXO', img : 'https://alexanderdevenezuela.com/wp-content/uploads/2021/02/slot-xo.png'},
    {id: 3, name: 'Joker123', category: 'EGAMES', type: 'SLOT', productId:'JOKER', img : 'https://joker123.center/wp-content/uploads/2021/01/cropped-joker123-center-1024px.png'},
    {id: 4, name: 'Askmebet', category: 'EGAMES', type: 'SLOT', productId:'ASKMEBET', img : 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/askmebet.webp'},
    {id: 5, name: 'Habanero', category: 'EGAMES', type: 'SLOT', productId:'HABANERO', img : 'https://casinodaddy.com/wp-content/uploads/2020/04/habanero-logo.png'},
    {id: 6, name: 'Spade Gaming', category: 'EGAMES', type: 'SLOT', productId:'SPADE', img : 'https://www.slotsreview.games/wp-content/uploads/2020/09/tabPp8TY.png'},
    {id: 7, name: 'Micro Gaming', category: 'EGAMES', type: 'SLOT', productId:'MICRO', img : 'https://onlinebingo.co.uk/wp-content/uploads/2022/08/microgaming.png'},
    {id: 8, name: 'Simple Play', category: 'EGAMES', type: 'SLOT', productId:'SIMPLEPLAY', img : 'https://smartcasinoguide.com/app/uploads/2021/11/SimplePlay-games-icon.png'},
    {id: 9, name: 'Live22', category: 'EGAMES', type: 'SLOT', productId:'LIVE22', img : 'https://malaysialistings.s3.ap-south-1.amazonaws.com/listings/images63be4cb88319b.jpg'},
    //{id: 10, name: 'Allwayspin', category: 'EGAMES', type: 'SLOT', productId:'ALLWAYSPIN', img : 'https://betandslots.com/wp-content/uploads/2021/02/AllWaySpin-600x600-1-300x300.jpg'},
    {id: 11, name: 'Evoplay', category: 'EGAMES', type: 'SLOT', productId:'EVOPLAY', img : 'https://goodluckmate.com/storage/attribute_value/d3dce8f6c19589bace8a9d293a271780/c/evoplay-games-250x250.png'},
    //{id: 12, name: 'CQ9', category: 'EGAMES', type: 'SLOT', productId:'CQ9', img : 'https://heng99u.com/wp-content/uploads/2023/02/cq9-600x537.png'},
    {id: 13, name: 'CQ9', category: 'EGAMES', type: 'SLOT', productId:'CQ9V2', img : 'https://pgslot-game.io/wp-content/uploads/2021/08/CQ9-SLOT-min-1.png'},
    //{id: 14, name: 'KA Gaming', category: 'EGAMES', type: 'SLOT', productId:'KAGAME', img : 'https://pbs.twimg.com/profile_images/1405458920773087233/tEwyDPFv_400x400.png'},
    {id: 15, name: 'Jili', category: 'EGAMES', type: 'SLOT', productId:'JILI', img : 'https://play-lh.googleusercontent.com/7KD9UI2qGFDKCqSvVK_9k03PzApNaFxhHeAbQzCZqRvxAiqVOLVS5Jr6MXKzkcFotzUp'},
    {id: 16, name: 'Mannaplay', category: 'EGAMES', type: 'SLOT', productId:'MANNA', img : 'https://superslot247.com/wp-content/uploads/2022/06/%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2-mannaplay-%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A-Superslot-%E0%B8%9F%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%94%E0%B8%B4%E0%B8%95.png'},
    {id: 17, name: 'Funky Games', category: 'EGAMES', type: 'SLOT', productId:'FUNKY', img : 'https://www.atombetx888.com/images/bfgames/Funky%20Games.png'},
    //{id: 18, name: 'Funky Games', category: 'EGAMES', type: 'SLOT', productId:'FUNKY2', img : 'https://www.onlinegambling24.com/wp-content/uploads/2021/12/Funky-Games-logo-big-og24.jpg'},
    {id: 19, name: 'Yggdrasil Gaming', category: 'EGAMES', type: 'SLOT', productId:'YGGDRASIL', img : 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/uj9tjvzkgifyr1nsyomj'},
    {id: 20, name: 'UPG Slot', category: 'EGAMES', type: 'SLOT', productId:'UPG', img : 'https://apimain.fomobet88.com/images/1655903289.webp'},
    {id: 21, name: 'Ameba', category: 'EGAMES', type: 'SLOT', productId:'AMEBA', img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jB977AuuUdyeQYZRVw25DzoOFCWZz7yMfd5GPujDIxe0SEwqngvMLMmvmLG6ZtSOC8o&usqp=CAU'},
    //{id: 22, name: 'Ambslot', category: 'EGAMES', type: 'SLOT', productId:'AMBSLOT', img : 'https://static.wixstatic.com/media/305b8a_f609f34dab8245ee90f22811371050bb~mv2.png/v1/fit/w_2500,h_1330,al_c/305b8a_f609f34dab8245ee90f22811371050bb~mv2.png'},
    {id: 23, name: 'Ambslot', category: 'EGAMES', type: 'SLOT', productId:'AMBSLOT2', img : 'https://fortuneox.net/wp-content/uploads/2022/12/gamecompanyamb.png'},
    {id: 24, name: 'Netent2', category: 'EGAMES', type: 'SLOT', productId:'NETENT2', img : 'https://slotsmegacasino.pt/images/slots/hotline.jpg'},
    {id: 25, name: 'Red Tiger', category: 'EGAMES', type: 'SLOT', productId:'REDTIGER', img : 'https://pbs.twimg.com/profile_images/1495764482307637248/9yEFhc2D_400x400.jpg'},
    {id: 26, name: 'Dragon Gaming', category: 'EGAMES', type: 'SLOT', productId:'DRAGONGAMING', img : 'https://as2.ftcdn.net/v2/jpg/03/19/27/03/1000_F_319270375_1tXTAdn0eim324DADDtNJZZVBLIVYTLP.jpg'},
    {id: 27, name: 'Ace333', category: 'EGAMES', type: 'SLOT', productId:'ACE333', img : 'https://static.wixstatic.com/media/ce54f5_43d735b0df6c47cf8de3ab7ca74be105~mv2.png/v1/fill/w_269,h_267,al_c,lg_1,q_95,enc_auto/ace333.png'},
    {id: 28, name: 'I8', category: 'EGAMES', type: 'SLOT', productId:'I8', img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSokl0-jgqd5PRC_z88Q5m13kpMVH6YxTx88w&usqp=CAU'},
    {id: 29, name: 'WmSlot', category: 'EGAMES', type: 'SLOT', productId:'WMSLOT', img : 'https://is3-ssl.mzstatic.com/image/thumb/Purple111/v4/22/0a/37/220a37e4-f17f-0b02-e54e-4869308fc2fb/source/512x512bb.jpg'},
    {id: 30, name: 'Spinix', category: 'EGAMES', type: 'SLOT', productId:'SPINIX', img : 'https://play-lh.googleusercontent.com/kyMC5UyPeJWaoju2AonX3StTnfZ5cse0MlkXheLzAdWnLeRG1u25X33Y59IuFLqnWQ'},
    {id: 31, name: 'Ninja slot', category: 'EGAMES', type: 'SLOT', productId:'NINJA', img : 'https://ninjaslot.co.in/wp-content/uploads/2022/11/imgninja.png'},
    {id: 32, name: '918 Kiss', category: 'EGAMES', type: 'SLOT', productId:'918KISS', img : 'https://i1.sndcdn.com/avatars-5zP0dUayEzDDtX3G-zTczhA-t500x500.jpg'},
    {id: 33, name: 'Pragmatic Play Slot', category: 'EGAMES', type: 'SLOT', productId:'PRAGMATIC_SLOT', img : 'https://cryptostec.com/wp-content/uploads/2022/05/pragmatic-play.jpeg'},
]
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };


  useEffect(() => {
    //DataGet();
  }, [])

  const DataGet = () => {

    axios.get("listGame")
      .then((response) => {
        //console.log(response.data.data.data.games);
        setItems(response.data.data.data.games);
      })
      .catch(error => {
        console.log('error', error);
        /*axios.put("/post/logoutMember", { memberID: userPlay.id },)
          .then(response => {
            localStorage.removeItem("token")
            window.location.href = "/";
          })*/
      });
  };

  const Game = (codeGame) => {
    window.location.href = `/profile/game/${codeGame}`;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Paper sx={{ p: 2 }}>
          <div className='game-container'>
            {gameType.map((row) => (
              <div key={row.id} className='card'>
                <div className='card-image'>
                  <img src={row.img} alt=''  style={{
                      cursor: 'pointer',
                    }}
                    onClick={() => Game(row.productId)} 
                     />
                </div>
                <div className='card-content'>
                  <span className='card-title'></span>
                  <p className='card-font'>{row.name}</p>
                </div>
                <div>
                  <br/>
                  <button
                    style={{
                      padding: '13px 60px',
                      backgroundColor: isPressed ? '#FF6633' : '#FF6633',
                      color: '#FFFFFF',
                      border: 'none',
                      cursor: 'pointer',
                      borderRadius: '12px',
                      transition: 'padding 0.2s, background-color 0.2s',
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onClick={() => Game(row.productId)} 
                  >
                    เข้าดู
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Paper>
      </Container>
    </React.Fragment>
  )
}