import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Divider, Drawer, Grid, Hidden } from '@material-ui/core';
import { useRouter } from 'next/router';
import { DescriptionText, ICON_COLOR, ListText, LOGO_COLOR, MainText, SubText } from '../consts/const';
import useWindowSize from '../HookServerData/Windowsize';


export default function MenuBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const { width, } = useWindowSize()
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const router = useRouter()
    const [openDrawer, setOpenDrawer] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        setLoggedIn(true)
        setUserName('Ayesha')
    }, []);// Only re-run the effect

    useEffect(() => {
        setOpenDrawer(false)
    }, [width]);// Only re-run the effect if width changes

    useEffect(() => {
        setOpenDrawer(false)
    }, [loggedIn]);// Only re-run the effect if login changes

    useEffect(() => {
        setOpenDrawer(false)
    }, [userName]);// Only re-run the effect if user changes

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const goHome = () => {
        router.push('/')
    };

    const goPage = (pagename) => {
        setOpenDrawer(false)
        router.push('/' + pagename)
    }

    const controlUser = (name, condition,) => {
        setLoggedIn(condition)
        setUserName(name)
        setOpenDrawer(false)
    }

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';


    const mobileMenuId = 'primary-search-account-menu-mobile';

    const userPanel = (
        <div>

            <MenuItem onClick={() => goPage('dashboard')}>
                <Typography style={{ color: MainText }}>Dashboard</Typography>
            </MenuItem>

            <MenuItem onClick={() => goPage('buylist')}>
                <Typography style={{ color: MainText }}>Buy List</Typography>
            </MenuItem>

            <MenuItem onClick={() => goPage('selllist')}>
                <Typography style={{ color: MainText }}>Sell List</Typography>
            </MenuItem>

            <Divider />

            <MenuItem onClick={() => setOpenDrawer(false)}>
                <Typography style={{ color: MainText }}>{userName}</Typography>
            </MenuItem>

            <MenuItem onClick={() => setOpenDrawer(false)}>
                <Typography style={{ color: MainText }}>Saved</Typography>
            </MenuItem>

            <MenuItem onClick={() => setOpenDrawer(false)}>
                <Typography style={{ color: MainText }}>Payment</Typography>
            </MenuItem>

            <MenuItem onClick={() => controlUser('', false)}>
                <Typography style={{ color: MainText }}>Sign out</Typography>
            </MenuItem>
        </div>
    )

    const nonLoggedPanel = (
        <div>
            <MenuItem onClick={() => controlUser('Ayesha', true)}>
                <Typography style={{ color: MainText }}>Login</Typography>
            </MenuItem>
            <MenuItem onClick={() => setOpenDrawer(false)}>
                <Typography style={{ color: MainText }}>Join</Typography>
            </MenuItem>
        </div>
    )

    const drawerMenu = (
        <Drawer onClose={() => setOpenDrawer(false)} anchor={'left'}
            open={openDrawer} >
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpenDrawer(false)}
                style={{ margin: '10px' }}
            >
                <img src='https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1601605405/lobang_ujaiwi.png' width='auto' height='30px' />
                <Typography style={{ color: MainText }}>Lobang App</Typography>
            </IconButton>

            <MenuItem onClick={() => goPage('')}>
                <Typography style={{ color: DescriptionText }}>List</Typography>
            </MenuItem>

            <MenuItem onClick={() => setOpenDrawer(false)}>
                <Typography style={{ color: DescriptionText }}>View</Typography>
            </MenuItem>

            <Divider />

            {loggedIn === true && userPanel}
            {loggedIn === false && nonLoggedPanel}

            <Divider />

            <MenuItem onClick={() => setOpenDrawer(false)}>
                <Typography style={{ color: ListText }}>Setting</Typography>
            </MenuItem>
        </Drawer>
    );




    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div >
            <AppBar position="fixed" color='inherit' style={{ boxShadow: 'none' }}>
                <Toolbar>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" >
                        <Grid item lg={2} xl={2} md={2} sm={2} xs={false}>
                            <IconButton
                                edge="start"

                                color="inherit"
                                aria-label="open drawer"
                                onClick={() => setOpenDrawer(true)}
                            >
                                <img src='https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1601605405/lobang_ujaiwi.png' width='auto' height='30px' />
                            </IconButton>
                        </Grid>


                        <Grid item lg={4} xl={4} md={4} sm={4} xs={false}>
                            <Typography onClick={goHome} variant="h6" noWrap style={{ verticalAlign: 'center', color: LOGO_COLOR }}>Lobang</Typography>
                        </Grid>



                        <Grid item lg={5} xl={5} md={5} sm={5} xs={false}>
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon style={{ color: ICON_COLOR }} />
                                </Badge>
                            </IconButton>


                            <IconButton aria-label="" color="inherit">
                                <Badge badgeContent={3} color="secondary">
                                    <ShoppingCartIcon style={{ color: ICON_COLOR }} />
                                </Badge>
                            </IconButton>

                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <ChatBubbleIcon style={{ color: ICON_COLOR }} />
                                </Badge>
                            </IconButton>
                        </Grid>


                        <Hidden xsDown>
                            <Grid item lg={1} xl={1} md={1} sm={1} xs={false}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon style={{ color: ICON_COLOR }} />
                                </IconButton>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Toolbar>
            </AppBar>
            {drawerMenu}
            {renderMobileMenu}
            <div style={{ paddingTop: '50px' }} />
        </div>
    );
}