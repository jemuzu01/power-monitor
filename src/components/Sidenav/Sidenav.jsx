import React from 'react';
import { Box, Button, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { navItems } from '../../data/sideNavArray';
import { Link, useLocation } from 'react-router-dom';

export const SideNav = ({ isMobile, onClose }) => {
  const location = useLocation();

  return (
    <Box sx={{ flexDirection: 'column', width: '100%', padding: '20px', position: 'relative' }} flexGrow={1}>
      {isMobile && (
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 10, right: 10 }}>
          <CloseIcon />
        </IconButton>
      )}
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h5" textAlign={'center'} sx={{ fontWeight: '700' }} color='#333'>
          MONITOR
        </Typography>
      </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.to;
          return (
            <ListItem key={index} sx={{ width: "100%", maxWidth: "300px", textAlign: "center", marginBottom: '0px' }}>
              <Button
                fullWidth
                component={Link}
                to={item.to}
                onClick={isMobile ? onClose : undefined}
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  backgroundColor: isActive ? "#94071D" : "#fff",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  color: isActive ? "linear-gradient(45deg,rgb(185, 67, 85) 30%, #FF8E53 90%)" : "#333",
                  boxShadow: isActive ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
                  '&:hover': {
                    backgroundColor: "#e0e0e0",
                  },
                }}
              >
                <ListItemText primary={item.text} sx={{color:isActive ? '#FFF' : '#000'}} />
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};