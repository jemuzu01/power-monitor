import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import SideNav from '../components/Sidenav/Sidenav';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Box sx={{ flexDirection: 'column', flexGrow: 1, height: '100vh' }}>
        <Grid container sx={{ flexDirection: 'column', flexGrow: 1, height: '100%', flexWrap: 'nowrap' }}>
          <Grid item sx={{ width: '100%' }}>
            <Header />
          </Grid>
          <Grid item sx={{ flexDirection: 'column', flexGrow: 1 }}>
            <Grid container sx={{ flexDirection: 'row', height: '100%', flexWrap: 'nowrap' }}>
              <Grid item sx={{ flexShrink: 0, width: '100%', maxWidth: '350px', bgcolor: '#DF98A5' }}>
                <SideNav />
              </Grid>
              <Grid item sx={{ flexGrow: 1, height: '100%', bgcolor: '#FFF', padding: 2, overflowY: 'auto' }}>
                <Outlet />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};