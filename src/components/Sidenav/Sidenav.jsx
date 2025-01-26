import React from 'react';
import { Box, Button, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { navItems } from '../../data/sideNavArray';
import { Link } from 'react-router-dom';

function SideNav() {
  return (
    <Box sx={{flexDirection:'column',width:'100%'}} flexGrow={1}>
     <Box  sx={{marginTop:'20px'}}>
        <Typography  variant="h5" textAlign={'center'} color='#FFF'>MONITOR</Typography>
     </Box>   
     <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {navItems.map((item, index) => (
        <ListItem key={index} sx={{ width: '100%', maxWidth: '300px', textAlign: 'center' }}>
          <Button
            fullWidth
            component={Link} // Use `Link` as the component for Button
            to={item.to} // Set the `to` prop directly on `Button`
            sx={{
              textAlign: 'center',
              justifyContent: 'center',
              backgroundColor: '#ECE3E7',
              borderRadius: '30px',
              padding: '0',
            }}
          >
            <ListItemText style={{ color: '#000' }} primary={item.text} />
          </Button>
        </ListItem>
      ))}
    </List>
    </Box>
  );
}

export default SideNav;
