import React from 'react'
import Button from '@mui/material/Button';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import PersonIcon from '@material-ui/icons/Person';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Typography } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { NavLink } from 'react-router-dom';


const ResponsiveMenu = () => {
    return (
        <Typography>
           <div className='resMenu'>
            <NavLink to='/'>
                <Button  startIcon={<DashboardIcon />} >
                    DashBoard
                </Button>
            </NavLink>

            <NavLink to='crm'>
                <Button startIcon={<CompareArrowsIcon />} to='/CRM'>
                    CRM
                </Button>
            </NavLink>

            <NavLink to='notification'>
                <Button startIcon={<NotificationsNoneIcon />} >
                    Notification
                </Button>
            </NavLink>

            <NavLink to='profile'>
                <Button startIcon={<PersonIcon />}> 
                    Profile
                </Button>
            </NavLink>    

            <NavLink to='help'>
                <Button startIcon={<HelpOutlineIcon />}>
                    Help & Documentation
                </Button>
                </NavLink>
            </div>
        </Typography>
    )
}

export default ResponsiveMenu