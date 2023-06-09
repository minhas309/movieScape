import React from 'react';
import { Grid, Box, Button, Divider, Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
import Posts from '../componenets/post';
import Menu from '../componenets/menubar'
import Post from '../componenets/postformat';

function Home() {

  return (
      <>
      <Menu/>
    <Box>
      <Grid container wrap='nowrap'>
        <Grid item container direction={"column"} xs={4} >
          <Grid item md={1}
            sx={{
              p: 2,
              display: "list-item",
              width: 50,
              position:"fixed",
            }}
            >
            <Button variant='text'
              startIcon={<AccountBoxIcon />}
              sx={{
                justifyContent: 'left',
                mb: 2,
                width: 100,
              }}>Profile</Button>
            <Button variant='text'
              startIcon={<FeedIcon />}
              sx={{
                justifyContent: 'left',
                mb: 2,
                width: 100,
              }}>Feed</Button>
            <Button variant='text'
              startIcon={<SettingsIcon />}
              sx={{
                justifyContent: 'left',
                mb: 2,
                width: 100,
              }}>Settings</Button>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item container direction={"column"} xs={12} maxWidth={true}>
          <Grid item container md={3}>
            <Posts></Posts>
            <Post></Post>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item container direction={"column"} xs={4} >
          <Grid item md={1} sx={{
            position:'fixed'
          }}>
            <Typography maxWidth={true} sx={{
              justifyContent:'center',
            }}>FRIENDS</Typography>
          </Grid>
        </Grid>

      </Grid>
    </Box>
    </>
  );
}

export default Home;
