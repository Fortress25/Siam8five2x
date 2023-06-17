import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import "./Modal.css";
import axios from '../api/axios';


export default function Poker(data) {
  const [items, setItems] = useState([]);

  const gameType =[
    //{id: 1, name: 'King Maker', category: 'EGAMES', type: 'SLOT', productId:'KINGMAKER', img : 'https://gmimages.cdnppb.net/cdn-cgi/image/f=auto,q=75/betfair-com%2Faf09d5eb-88da-4104-91d4-fe661e1e0028_designs-52824_bf-arcade_king_maker_logo.png?w=450&h=450'},
    {id: 2, name: 'Ambpoker', category: 'EGAMES', type: 'SLOT', productId:'AMBPOKER', img : 'https://play-lh.googleusercontent.com/Wo-es4Y9VLWD-t7SSMhHYRNv3kMZVyuLFOcdQM56Oy6wl3MQbe0d65sYJouj0C_s4D2F'},
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