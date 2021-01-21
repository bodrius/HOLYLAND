import React from 'react';
import clsx from 'clsx';
import { Redirect, NavLink, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { useStyles } from './MainPageStyles';
import { links } from '../ListItem/links';
import { routers } from '../ListItem/routers';
import useWindowDimension from '../../hooks/useWindowDimension';

export default function MainPage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { width, height } = useWindowDimension();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='absolute' className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
            <MenuIcon />
          </IconButton>
          <Typography component='h1' variant='h6' color='inherit' noWrap className={classes.title}>
            HOLY LAND
          </Typography>

          {width <= 767 && width >= 375 ? (
            <div
              style={{
                display: 'flex',
                width: 30,
                marginRight: 10,
                justifyContent: 'space-between',
              }}>
              <a
                style={{ color: '#000', textDecoration: 'none' }}
                href='https://t.me/jurlia'
                rel='noreferrer'
                target='_blank'>
                <TelegramIcon />
              </a>
            </div>
          ) : null}

          {width >= 768 ? (
            <div
              style={{
                display: 'flex',
                width: 100,
                marginRight: 50,
                justifyContent: 'space-between',
              }}>
              <a
                style={{ color: '#000', textDecoration: 'none' }}
                href='https://t.me/jurlia'
                rel='noreferrer'
                target='_blank'>
                <TelegramIcon />
              </a>
              <a
                style={{ color: '#000', textDecoration: 'none' }}
                href='https://instagram.com/yuliana_holyland?igshid=15lcgcyt4x479'
                rel='noreferrer'
                target='_blank'>
                <InstagramIcon />
              </a>
              <a
                style={{ color: '#000', textDecoration: 'none' }}
                href='https://www.facebook.com/profile.php?id=100015128460561'
                rel='noreferrer'
                target='_blank'>
                <FacebookIcon />
              </a>
            </div>
          ) : null}
          <a style={{ color: '#000', textDecoration: 'none' }} href='tel:+1234567890'>
            +380506570167
          </a>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}>
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List style={{ fontFamily: 'Fira Sans' }}>
          {links.map((item) => (
            <NavLink
              activeStyle={{
                color: 'red',
              }}
              style={{ textDecoration: 'none', color: 'black' }}
              to={item.path}
              key={item.name}>
              <div>
                <ListItem button key={item.name}>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              </div>
            </NavLink>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Switch>
            {routers.map((route) => (
              <Route key={route.path} exact path={route.path} component={route.component} />
            ))}
            <Redirect to='/' />
          </Switch>
        </Container>
      </main>
    </div>
  );
}
