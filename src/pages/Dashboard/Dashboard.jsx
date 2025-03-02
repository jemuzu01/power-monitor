import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import useDashboardData from '../../hooks/useDashBoardData'
import CustomArea from '../../components/Statistic/CustomArea'
import { styled } from '@mui/material/styles'

const Header = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#FFFFFF',
  background: 'linear-gradient(45deg, #94071D 30%, #FF8E53 90%)',
  marginBottom: theme.spacing(4),
}))

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
}))

const LegendItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}))

const ColorBox = styled(Box)(({ theme, color }) => ({
  width: theme.spacing(2),
  height: theme.spacing(2),
  backgroundColor: color,
  marginRight: theme.spacing(1),
}))

const ElegantLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: '#333',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
}))

const CardLegend = ({ items, minPower, maxPower, avgPower, minVoltage, maxVoltage, avgVoltage, minCurrent, maxCurrent, avgCurrent,powerTotal }) => (
  <Box mt={2}>
    <Grid container flexDirection={'column'} spacing={1}>
      {items.map((item) => (
        <Grid item key={item.label}>
          <LegendItem>
            <ColorBox color={item.color} />
            <ElegantLabel variant="body2">{item.label}</ElegantLabel>
            {item.label === 'POWER' && <ElegantLabel variant="body2">(min : {minPower} | max : {maxPower} | avg : {avgPower} | entries : {powerTotal !== 0 ? powerTotal : 0})</ElegantLabel>}
            {item.label === 'VOLTAGE' && <ElegantLabel variant="body2">(min : {minVoltage} | max : {maxVoltage} | avg : {avgVoltage})</ElegantLabel>}
            {item.label === 'CURRENT' && <ElegantLabel variant="body2">(min : {minCurrent} | max : {maxCurrent} | avg : {avgCurrent})</ElegantLabel>}
          </LegendItem>
        </Grid>
      ))}
    </Grid>
  </Box>
)

const getMinMaxAvg = (data, key) => {
  const values = data.map(item => item[key])
  const min = Math.min(...values)
  const max = Math.max(...values)
  const avg = values.reduce((a, b) => a + b, 0) / values.length
  return {
    min: min === Infinity ? 0 : min,
    max: max === -Infinity ? 0 : max,
    avg: isNaN(avg) ? 0 : avg.toFixed(2)
  }
}

const getMinMaxAvgForAll = (data) => {
  return {
    power: getMinMaxAvg(data, 'power'),
    voltage: getMinMaxAvg(data, 'voltage'),
    current: getMinMaxAvg(data, 'current')
  }
}

const Dashboard = () => {

  const data = useDashboardData("ADMINISTRATION")
  const automotive = useDashboardData("AUTOMOTIVE")
  const electrical = useDashboardData("ELECTRICAL")
  const italian = useDashboardData("ITALIAN")
  const manufacturing = useDashboardData("MANUFACTURING")
  console.log(data)

  const legendItems = [
    { label: 'POWER', color: '#8884d8' },
    { label: 'VOLTAGE', color: '#82ca9d' },
    { label: 'CURRENT', color: '#ff7300' },
  ]

  const dataMinMax = getMinMaxAvgForAll(data)
  const automotiveMinMax = getMinMaxAvgForAll(automotive)
  const electricalMinMax = getMinMaxAvgForAll(electrical)
  const italianMinMax = getMinMaxAvgForAll(italian)
  const manufacturingMinMax = getMinMaxAvgForAll(manufacturing)
  const powerTotal = data.filter(item => item.power !== undefined).length

 console.log(powerTotal , "powerTotal")

  return (
    <>
      <Header>
        <Typography variant="h4" fontWeight={800} gutterBottom>
          Hello, Welcome to the Dashboard!
        </Typography>
        <Typography variant="h6">
          Here you can monitor various sectors and their statistics.
        </Typography>
      </Header>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Link to="/administration" style={{ textDecoration: 'none' }}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>Administration</Typography>
                  <CustomArea data={data} />
                  <CardLegend 
                    items={legendItems} 
                    minPower={dataMinMax.power.min} 
                    maxPower={dataMinMax.power.max} 
                    avgPower={dataMinMax.power.avg}
                    powerTotal={powerTotal}
                    minVoltage={dataMinMax.voltage.min } 
                    maxVoltage={dataMinMax.voltage.max} 
                    avgVoltage={dataMinMax.voltage.avg}
                    minCurrent={dataMinMax.current.min} 
                    maxCurrent={dataMinMax.current.max} 
                    avgCurrent={dataMinMax.current.avg}
                  />
                </CardContent>
              </StyledCard>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/automotive" style={{ textDecoration: 'none' }}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>Automotive</Typography>
                  <CustomArea data={automotive} />
                  <CardLegend 
                    items={legendItems} 
                    minPower={automotiveMinMax.power.min} 
                    maxPower={automotiveMinMax.power.max}
                    avgPower={automotiveMinMax.power.avg}
                    powerTotal={automotive.filter(item => item.power !== undefined).length}
                    minVoltage={automotiveMinMax.voltage.min} 
                    maxVoltage={automotiveMinMax.voltage.max} 
                    avgVoltage={automotiveMinMax.voltage.avg}
                    minCurrent={automotiveMinMax.current.min} 
                    maxCurrent={automotiveMinMax.current.max} 
                    avgCurrent={automotiveMinMax.current.avg}
                  />
                </CardContent>
              </StyledCard>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/electrical" style={{ textDecoration: 'none' }}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>Electrical</Typography>
                  <CustomArea data={electrical} />
                  <CardLegend 
                    items={legendItems} 
                    minPower={electricalMinMax.power.min} 
                    maxPower={electricalMinMax.power.max} 
                    avgPower={electricalMinMax.power.avg}
                    powerTotal={electrical.filter(item => item.power !== undefined).length}
                    minVoltage={electricalMinMax.voltage.min} 
                    maxVoltage={electricalMinMax.voltage.max} 
                    avgVoltage={electricalMinMax.voltage.avg}
                    minCurrent={electricalMinMax.current.min} 
                    maxCurrent={electricalMinMax.current.max}
                    avgCurrent={electricalMinMax.current.avg} 
                  />
                </CardContent>
              </StyledCard>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/italian" style={{ textDecoration: 'none' }}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>Italian</Typography>
                  <CustomArea data={italian} />
                  <CardLegend 
                    items={legendItems} 
                    minPower={italianMinMax.power.min} 
                    maxPower={italianMinMax.power.max} 
                    avgPower={italianMinMax.power.avg}
                    powerTotal={italian.filter(item => item.power !== undefined).length}
                    minVoltage={italianMinMax.voltage.min} 
                    maxVoltage={italianMinMax.voltage.max}
                    avgVoltage={italianMinMax.voltage.avg} 
                    minCurrent={italianMinMax.current.min} 
                    maxCurrent={italianMinMax.current.max} 
                    avgCurrent={italianMinMax.current.avg}
                  />
                </CardContent>
              </StyledCard>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to="/manufacturing" style={{ textDecoration: 'none' }}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>Manufacturing</Typography>
                  <CustomArea data={manufacturing} />
                  <CardLegend 
                    items={legendItems} 
                    minPower={manufacturingMinMax.power.min} 
                    maxPower={manufacturingMinMax.power.max} 
                    avgPower={manufacturingMinMax.power.avg}
                    powerTotal={manufacturing.filter(item => item.power !== undefined).length}
                    minVoltage={manufacturingMinMax.voltage.min} 
                    avgVoltage={manufacturingMinMax.voltage.avg}
                    maxVoltage={manufacturingMinMax.voltage.max} 
                    minCurrent={manufacturingMinMax.current.min} 
                    maxCurrent={manufacturingMinMax.current.max} 
                    avgCurrent={manufacturingMinMax.current.avg}
                  />
                </CardContent>
              </StyledCard>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Dashboard