import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { Resume } from '../components/resume/Resume';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { SideNavbar } from '../components/nav/SideNavbar';
import { Works } from '../components/works/Works';
import { About } from '../components/about/About';
import { Contact } from '../components/contact/Contact';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    margin: '10px',
  },
  component: {
    margin: '10px 0',
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id="home">
        <div className={classes.component}><DisplacementSphere /></div>
        <br></br>
        <div className={classes.component}><LogoLink /></div>
        <br></br>
        <div className={classes.component}><Content /></div>
        <br></br>
        <div className={classes.component}><ThemeToggle /></div>
        <br></br>
        <Hidden smDown>
          <div className={classes.component}><SocialIcons /></div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.component}><SpeedDials /></div>
        </Hidden>
        <div className={classes.component}><Resume /></div>
      </div>
      <div className={classes.component}><SideNavbar /></div>
      <br></br>
      <div className={classes.component}><Works /></div>
      <br></br>
      <div className={classes.component}><About /></div>
      <br></br>
      <div className={classes.component}><Contact /></div>
    </>
  );
};
