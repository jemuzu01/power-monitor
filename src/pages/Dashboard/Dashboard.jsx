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
  marginBottom: theme.spacing(1),
}))

const ColorBox = styled(Box)(({ theme, color }) => ({
  width: theme.spacing(2),
  height: theme.spacing(2),
  backgroundColor: color,
  marginRight: theme.spacing(1),
}))

const CardLegend = ({ items }) => (
  <Box mt={2} display="flex" flexWrap="wrap">
    {items.map((item) => (
      <LegendItem key={item.label} mr={2}>
        <ColorBox color={item.color} />
        <Typography variant="body2">{item.label}</Typography>
      </LegendItem>
    ))}
  </Box>
)

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
                  <CardLegend items={legendItems} />
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
                  <CardLegend items={legendItems} />
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
                  <CardLegend items={legendItems} />
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
                  <CardLegend items={legendItems} />
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
                  <CardLegend items={legendItems} />
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