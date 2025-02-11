import React from 'react';
import { Box, Button, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { navItems } from '../../data/sideNavArray';
import { Link,useLocation  } from 'react-router-dom';

function SideNav() {

  const location = useLocation();

  return (
    <Box sx={{flexDirection:'column',width:'100%'}} flexGrow={1}>
     <Box  sx={{marginTop:'20px'}}>
        <Typography  variant="h5" textAlign={'center'} sx={{fontWeight:'900'}} color='#FFF'>MONITOR</Typography>
     </Box>   
     <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
     {navItems.map((item, index) => {
          const isActive = location.pathname === item.to;
          return (
            <ListItem key={index} sx={{ width: "100%", maxWidth: "300px", textAlign: "center" }}>
              <Button
                fullWidth
                component={Link}
                to={item.to}
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  backgroundColor: isActive ? "#D1C4E9" : "#ECE3E7",
                  borderRadius: "30px",
                  padding: "0",
                  color: isActive ? "#94071D" : "#000",
                }}
              >
                <ListItemText primary={item.text} />
              </Button>
            </ListItem>
          );
        })}
    </List>
    </Box>
  );
}

export default SideNav;
