import { Typography } from '@mui/material'
import React from 'react'
import DashboardGrid from "../grid/DashboardGrid";


const Dashboard = () => {
  return (<Typography paddingLeft={8} paddingTop={25}>


        <Typography variant="h4">Dashboard</Typography>


        <DashboardGrid />
        
    </Typography>


  )
}

export default Dashboard