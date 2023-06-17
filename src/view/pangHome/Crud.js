import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import "./Modal.css";
import axios from '../../api/axios';


export default function Crud(data) {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem("token");
  const userPlay = data.data.dataLog;

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
    const pathA = window.location.pathname;
    const pathSegments = pathA.split('/');
    //console.log(pathSegments[3]);

    axios.get(`listGame/${pathSegments[3]}`)
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
    axios.get(`seamlesslogIn/${codeGame}/${pathSegments[3]}`)
      .then((response) => {
        console.log(response.data.data);
        const link = response.data.data.data.url;
        window.open(link);
      })
      .catch(error => {
        console.log('error', error);
      });
  }
  const BackPang = () => {
    window.location.href = `/`;
  }

  const h4Style = {
    color: 'green',
    display: 'inline-block',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Box display={'flex'}>
            <Box flexGrow={1}>
              <Typography variant="h6">
                <a style={h4Style} onClick={BackPang}>ย้อนกลับ</a>
              </Typography>
              <Typography variant="h6">
                รายชื่อเกม
              </Typography>
            </Box>
          </Box>
          <div className='game-container'>
            {items.map((row) => (
              <div key={row.rank} className='card'>
                <div className='card-image'>
                  <img src={row.img} alt='' style={{
                    cursor: 'pointer',
                  }}
                    onClick={() => PlayGame(row.linkgame)}
                  />
                </div>
                <div className='card-content'>
                  <span className='card-title'></span>
                  <p className='card-font'>{row.name}</p>
                </div>
                <div>
                  <br />
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
                    onClick={() => PlayGame(row.code)}
                  >
                    เล่นเกม
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