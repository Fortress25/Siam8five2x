import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import "./Modal.css";
import axios from '../api/axios';


export default function ListCasino(data) {
  const [items, setItems] = useState([]);

  const gameType =[
    {id: 1, name: 'Sexy Gaming', category: 'EGAMES', type: 'SLOT', productId:'SEXY', img : 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/allbet.webp'},
    {id: 2, name: 'Pragmatic Play', category: 'EGAMES', type: 'SLOT', productId:'PRAGMATIC', img : 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/pragmatic.webp'},
    {id: 3, name: 'Big Gaming', category: 'EGAMES', type: 'SLOT', productId:'BIGGAME', img : 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/biggame.webp'},
    {id: 4, name: 'Dream Gaming', category: 'EGAMES', type: 'SLOT', productId:'DREAM', img : 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/dg.webp'},
    {id: 5, name: 'WM Casino', category: 'EGAMES', type: 'SLOT', productId:'WM', img : 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/wm.webp'},
    {id: 6, name: 'BetgamesTV', category: 'EGAMES', type: 'SLOT', productId:'BETGAME', img : 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/betgame.webp'},
    {id: 7, name: 'Ebet', category: 'EGAMES', type: 'SLOT', productId:'EBET', img : 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/ebet.webp'},
    {id: 8, name: 'AllBet', category: 'EGAMES', type: 'SLOT', productId:'ALLBET', img : 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/allbet.webp'},
    {id: 9, name: 'Asia Gaming AG', category: 'EGAMES', type: 'SLOT', productId:'AGGAME', img : 'https://www.whitehatcasinos.com/wp-content/uploads/asia-gaming.png'},
    {id: 10, name: 'Pretty Gaming', category: 'EGAMES', type: 'SLOT', productId:'PRETTY', img : '	https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/pretty.webp'},
    {id: 11, name: 'SA Gaming', category: 'EGAMES', type: 'SLOT', productId:'SAGAME', img : '	https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/sa.webp'},
    {id: 12, name: 'Xtreme Gaming', category: 'EGAMES', type: 'SLOT', productId:'XTREME', img : '	https://superapi-products.s3-ap-southeast-1.amazonaws.com/logo/xtreme.webp'},
    {id: 13, name: 'Pragmatic Play Casino', category: 'EGAMES', type: 'SLOT', productId:'PRAGMATIC_LIVECASINO', img : 'https://media-173f0.kxcdn.com/assets/images/svg/providers/pragmatic-play-circle.svg'},
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

  const PlayGame = (codeGame) => {
    window.location.href = `/profile/casino/${codeGame}`;
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
                    onClick={() => PlayGame(row.productId)} 
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
                    onClick={() => PlayGame(row.productId)} 
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