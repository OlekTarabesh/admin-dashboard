import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material'

// import "react-pro-sidebar/dist/css/styles.css";

import { tokens } from '../../theme';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


const Sidebarr = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ isCollapsed, setIsCollapsed ] = useState(false);
  const [ selected, setSelected ] = useState('Dashboard');
  return (
      <Sidebar collapsed={isCollapsed} rootStyles={{
        [`.${sidebarClasses.container}`]: {
          background: `${colors.primary[400]} !important`
        }
      }}>
        {/* Here👇🏻 is a new styling of MUI library. Check it out! */}
        <Menu rootStyles={{
          div: {
            [`&.MuiBox-root.css-1l8icbj`]: {
              padding: '5px 10px 5px 12px !important'
            },
          li: {
            [`&.ps-menu-button-root:hover`]: {
              padding: "5px 35px 5px 20px !important"
              },
            },  
          },
        }}>
          {/* LOGO AND MENU ICON */}
          <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}>

            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
            </MenuItem>
            
          {/* USER */}
          {!isCollapsed && (
          <Box mb='25px'>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <img 
              src={'../../assets/user.jpeg'} 
              alt="profile-user" 
              width='100px'
              height='100px'
              style={{
                cursor: 'pointer',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
              />
            </Box>
            
            <Box textAlign='center'>
                <Typography 
                variant='h3' 
                color={colors.grey[100]}
                fontWeight='bold'
                sx={{
                  m: '10px 0 0 0'
                }}
                >
                  Oleksandr Tarabesh
                </Typography>
                <Typography variant='h5' color={colors.greenAccent[500]}>Admin</Typography>
              </Box>
            </Box>
          )}
        </Menu>
      </Sidebar>
  )
}

export default Sidebarr

