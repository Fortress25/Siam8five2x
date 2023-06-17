import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Crud from './ComponentAdmin/Crud';
import ListGame from '../ListProduct/ListGame'
import ListCasino from '../ListProduct/ListCasino'
import Sportbook from '../ListProduct/Sportbook';
import Poker from '../ListProduct/Poker';
import Trading from '../ListProduct/Trading';
const Profile = (row) => {

  /*return (
    <Crud data = {row}/>
  );*/

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Box display={'flex'}>
            <Box flexGrow={1}>
              <Typography variant="h6">
                Games Slot
              </Typography>
            </Box>
          </Box>
          <div>
            <ListGame />
          </div>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Box display={'flex'}>
            <Box flexGrow={1}>
              <Typography variant="h6">
                Live Casino
              </Typography>
            </Box>
          </Box>
          <div>
            <ListCasino />
          </div>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Box display={'flex'}>
            <Box flexGrow={1}>
              <Typography variant="h6">
                Sportbook
              </Typography>
            </Box>
          </Box>
          <div>
            <Sportbook />
          </div>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Box display={'flex'}>
            <Box flexGrow={1}>
              <Typography variant="h6">
                Sportbook
              </Typography>
            </Box>
          </Box>
          <div>
            <Poker />
          </div>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Box display={'flex'}>
            <Box flexGrow={1}>
              <Typography variant="h6">
                Sportbook
              </Typography>
            </Box>
          </Box>
          <div>
            <Trading />
          </div>
        </Paper>

      </Container>
    </React.Fragment>
  )
}

export default Profile;