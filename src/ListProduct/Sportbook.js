import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import "./Modal.css";
import axios from '../api/axios';


export default function Sportbook(data) {
  const [items, setItems] = useState([]);

  const gameType =[
    {id: 1, name: 'Cockfight', category: 'EGAMES', type: 'SLOT', productId:'COCKFIGHT', img : 'https://img.freepik.com/premium-vector/illustration-kicking-kungfu-chicken_75776-253.jpg?w=360'},
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