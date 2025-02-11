import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import DownloadIcon from '@mui/icons-material/Download';
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { IconButton, Popper } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import dayjs from 'dayjs';
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export const HeaderBtn = ({ onDataChange }) => {
  const buttonStyles = {
    backgroundColor: '#FFF',
    color: '#000',
    borderRadius: '10px',
    padding: '10px'
  };

  const [activeButton, setActiveButton] = useState('POWER');
  const [activeTimeRange, setActiveTimeRange] = useState('24h');
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const isMobile = useMediaQuery('(max-width:1200px)');

  console.log("isMobile",isMobile)

  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeMonitor = (monitorType) => {
    setActiveButton(monitorType);
    onDataChange({ monitor: monitorType });
  };

  const selectTimeRange = (range) => {
    onDataChange({ timeRange: range });
    setActiveTimeRange(range);
  };

  const selectDate = (date) => {
    const updatedDate = dayjs(date).hour(dayjs().hour()).minute(dayjs().minute()).second(dayjs().second());
    onDataChange({ currentDate: updatedDate });
  };

  return (
    <Box sx={{ flexFlow: 1 }}>
      <Grid  sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', width: '100%', gap: '10px' }}>
        <Grid  sx={{ display: 'flex',width:'100%',maxWidth:'250px', flexDirection: 'row', gap: '10px', padding: '10px', backgroundColor: '#F3F7FA', borderRadius: '10px', justifyContent: 'space-between' }}>
          {['POWER', 'VOLTAGE', 'CURRENT'].map((monitorType) => (
            <Button
              key={monitorType}
              sx={{
                ...buttonStyles,
                width: "100%",
                maxWidth: "100px",
                backgroundColor: activeButton === monitorType ? '#FFF' : 'transparent',
                color: activeButton === monitorType ? '#000' : 'inherit',
              }}
              onClick={() => onChangeMonitor(monitorType)}
              variant="text"
            >
              <Typography sx={{ fontSize: { xs: '12px', sm: '10px', md: '12px' } }}>
                {monitorType}
              </Typography>
            </Button>
          ))}
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', backgroundColor: '#F3F7FA', width: '100%', boxSizing: 'border-box', padding: '10px', gap: '10px', borderRadius: '10px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            {['24h', '7d', '1m', '3m'].map((range) => (
              <Button
                key={range}
                sx={{
                  ...buttonStyles,
                  backgroundColor: activeTimeRange === range ? '#FFF' : 'transparent',
                  color: activeTimeRange === range ? '#000' : 'inherit',
                }}
                onClick={() => selectTimeRange(range)}
                variant="text"
              >
                <Typography sx={{ fontSize: { xs: '12px', sm: '10px', md: '12px' } }}>
                  {range}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <Button sx={buttonStyles} variant="text">LOG</Button>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <IconButton onClick={handleIconClick}>
                <CalendarTodayIcon />
              </IconButton>
              <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
                <Box sx={{ bgcolor: "background.paper", p: 1, boxShadow: 3 }}>
                  <DesktopDatePicker
                    value={selectedDate}
                    onChange={(newValue) => {
                      setSelectedDate(newValue);
                      handleClose();
                    }}
                    slotProps={{
                      textField: { sx: { display: "none" } },
                    }}
                  />
                </Box>
              </Popper>
            </LocalizationProvider>
            <Button sx={buttonStyles} variant="text"><DownloadIcon /></Button>
            <Button sx={buttonStyles} variant="text"><AspectRatioIcon /></Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};