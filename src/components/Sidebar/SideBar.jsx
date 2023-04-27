import { NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useState } from "react";
import Person2Icon from '@mui/icons-material/Person2';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { Hidden, Typography } from "@mui/material";
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PersonIcon from '@material-ui/icons/Person';
import ResponsivNav from './ResponsivNav'
import ResponsiveMenu from './ResponsiveMenu';

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    path: "/crm",
    name: "CRM",
    icon: < CompareArrowsIcon />,
  },
  {
    path: "/notification",
    name: "Notification",
    icon: <NotificationsIcon />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <Person2Icon />,
  },

  {
    path: "/help&documentation",
    name: "Help",
    icon: <HelpOutlineIcon />,
  },

];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Typography>
      <div className="main-container">
        <Hidden only={['md', 'xl', 'lg']}>
          <ResponsivNav />

        </Hidden>

        <Hidden only={['md', 'xl', 'lg']}>
          <ResponsiveMenu />
        </Hidden>

        <Hidden only={['xs', 'sm']}>
          <div className="bgtop"></div>
          <motion.div animate={{ width: isOpen ? "65vmax" : "80vmax", marginLeft: isOpen ? "23vmax" : "8vmax", justifyContent: 'space-around' }} className="nav">
            <span className='nav1' onClick={toggle} ><MenuIcon /></span>
            <span className="nav2"><input type="text" placeholder='🔍  search or type a product name' /></span>
            <span className='nav3' color='#1D76CB'>intel</span>
            <span className="nav4"><NotificationsNoneIcon /></span>

            <Hidden only={['xs', 'sm', 'md']}>
              <span className="nav5"><PersonIcon /><span> Hussain Ahmed</span></span>
            </Hidden>

          </motion.div>


          <motion.div
            animate={{
              width: isOpen ? "200px" : "45px",

              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
              },
            }}
            className={`sidebar `}
          >


            <div className='top_section'>
              {isOpen && <div className="logo"></div>}
              {isOpen && <h2 className="companyname">Company</h2>}
            </div>



            <section className="routes">
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }

                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </section>
          </motion.div>
        </Hidden>
        <main>{children}</main>
      </div>
    </Typography>
  );
};

export default SideBar;
