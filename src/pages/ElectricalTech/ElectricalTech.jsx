import React, { useState } from 'react';
import Grid from '@mui/material/Grid2'
import usePowerMonitorData from '../../hooks/usePowerMonitorData ';
import { Statistic } from '../../components/Statistic/Statistic';
import { HeaderBtn } from '../../components/HeaderBtn/HeaderBtn';
import { Typography } from '@mui/material';


 const ElectricalTech = () => {

  const [data, setData] = useState({
    department:"ELECTRICAL",
    monitor:"POWER",
    timeRange:"24h"
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
    <Typography variant="h5" fontWeight={800} gutterBottom>Electrical Tech</Typography>
    <HeaderBtn onDataChange={onChangeType}/>
    <Statistic statistic={documents}/>
  </Grid>
  </>
);
}
export default ElectricalTech;
