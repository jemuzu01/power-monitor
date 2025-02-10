import { Box, Button, TextFiel,Typography } from '@mui/material'
import React,{useState} from 'react'
import Grid from '@mui/material/Grid2'
import DownloadIcon from '@mui/icons-material/Download';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import dayjs from 'dayjs';

export const HeaderBtn = ({onDataChange }) => {

  const buttonStyles = {
    backgroundColor: '#FFF',
    color: '#000',
    borderRadius: '10px',
    padding:'5px'
  };

  const [activeButton, setActiveButton] = useState('POWER');
  const [activeTimeRange, setActiveTimeRange] = useState('24h');
  const [selectedDate, setSelectedDate] = useState(dayjs());
  
  const onChangeMonitor = (monitorType) => {
    setActiveButton(monitorType); 
    onDataChange({ monitor: monitorType });
  };

  const selectTimeRange = (range) => {
    onDataChange({ timeRange: range });
    setActiveTimeRange(range);
  };


  const selectDate = (date) => {
    const updatedDate = dayjs(date).hour(dayjs().hour()).minute(dayjs().minute()).second(dayjs().second());// Sets minutes, seconds, and milliseconds to 0
    onDataChange({ currentDate: updatedDate });
  };


  return (
   <>
   <Box>
      <Grid sx={{display:'flex',flexDirection:'row',width:'100%',gap:'10px'}}>
          <Grid  size={4} sx={{ display: 'flex',flexDirection:"row", gap: '10px', padding: '15px', backgroundColor: '#F3F7FA', borderRadius: '10px',justifyContent:'space-between' }}>
          {['POWER', 'VOLTAGE', 'CURRENT'].map((monitorType) => (
            <Button
              key={monitorType}
              sx={{
                ...buttonStyles,
                width:"100%",
                maxWidth:"100px",
                backgroundColor: activeButton === monitorType ? '#FFF' : 'transparent', // Active background color
                color: activeButton === monitorType ? '#000' : 'inherit', // Active text color
              }}
              onClick={() => onChangeMonitor(monitorType)}
              variant="text"
            >
              <Typography sx={{ 
                fontSize: { xs: '12px', sm: '10px', md: '12px' },
              }}>
                {monitorType}
              </Typography>
            </Button>
          ))}
        </Grid>
        <Grid  size={8} sx={{display:'flex',flexDirection:'row',backgroundColor:'#F3F7FA',width:'100%',boxSizing:'border-box',padding:'10px',gap:'10px',borderRadius:'10px',justifyContent:'space-between'}}>
          <Box sx={{display:'flex',flexDirection:'row',gap:'10px'}}>
          {['24h', '7d', '1m', '3m'].map((range) => (
              <Button
                key={range}
                sx={{
                  ...buttonStyles,
                  backgroundColor: activeTimeRange === range ? '#FFF' : 'transparent', // Active background color
                  color: activeTimeRange === range ? '#000' : 'inherit', // Active text color
                }}
                onClick={() => selectTimeRange(range)}
                variant="text"
              >
                <Typography sx={{ 
                fontSize: { xs: '12px', sm: '10px', md: '12px' },
              }}>
                {range}
              </Typography>
              </Button>
            ))}
           </Box>
           <Box sx={{display:'flex',flexDirection:'row',gap:'10px'}}>
            <Button sx={buttonStyles} variant="text">LOG</Button>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                value={selectedDate}
                onChange={(newValue) => selectDate(newValue)}
              />
          </LocalizationProvider>
            <Button sx={buttonStyles} variant="text"><DownloadIcon /></Button>
            <Button sx={buttonStyles} variant="text"><AspectRatioIcon /></Button>
           </Box>
        </Grid>
      </Grid>
   </Box>
   
   </>
  )
}
