import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/img/tup-logo.png'; // Import image

export const Header = () => {
  return (
    <>
     <Box sx={{height:'100px', backgroundColor: '#94071D', display:'flex',alignItems:'center',padding:'30px',boxSizing:'border-box',gap:'20px'}}>
        <img style={{ height: '70px', width: '70px' }} src={logo} alt="tup logo" />
        <Typography sx={{color:'#FFF'}}>TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES VISAYAS</Typography>
     </Box>
    </>
  )
}
