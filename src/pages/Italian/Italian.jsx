import React, { useState } from 'react';
import Grid from '@mui/material/Grid2'
import usePowerMonitorData from '../../hooks/usePowerMonitorData ';
import { Statistic } from '../../components/Statistic/Statistic';
import { HeaderBtn } from '../../components/HeaderBtn/HeaderBtn';
import dayjs from 'dayjs';

export const Italian = () => {
  const [data, setData] = useState({
    department:"ITALIAN",
    monitor:"POWER",
    timeRange:"24h",
    currentDate: dayjs().toDate(),
  });
  
  const onChangeType  = (newData) => {
    setData((prevData) => ({
      ...prevData, 
      ...newData,
    }));
  };

const documents = usePowerMonitorData(data);
return (
  <>
  <Grid sx={{display:'flex',flexDirection:'column',height:'100%',gap:'30px'}}>
    <HeaderBtn onDataChange={onChangeType}/>
    <Statistic statistic={documents}/>
  </Grid>
  </>
);
}
