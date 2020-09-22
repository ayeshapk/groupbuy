import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Grid } from '@material-ui/core';
import { useRouter } from 'next/router';

const LOGO_COLOR = '#A60321';
const ICON_COLOR = '#2678BF';

export default function MenuBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const router = useRouter()

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

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';


    const mobileMenuId = 'primary-search-account-menu-mobile';
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
            <AppBar position="static" color='inherit' style={{  boxShadow: 'none' }}>
                <Toolbar>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" >
                        <Grid item xs={2}>
                            <IconButton
                                edge="start"

                                color="inherit"
                                aria-label="open drawer"
                            >
                                <MenuIcon style={{color:LOGO_COLOR}}/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography onClick={goHome} variant="h6" noWrap style={{ verticalAlign: 'center',color:LOGO_COLOR }}>GROUP BUY</Typography>
                        </Grid>

                        <Grid item xs={5}>
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon style={{color:ICON_COLOR}} />
                                </Badge>
                            </IconButton>


                            <IconButton aria-label="" color="inherit">
                                <Badge badgeContent={3} color="secondary">
                                    <ShoppingCartIcon style={{color:ICON_COLOR}} />
                                </Badge>
                            </IconButton>

                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <ChatBubbleIcon style={{color:ICON_COLOR}} />
                                </Badge>
                            </IconButton>
                        </Grid>

                        <Grid item xs={1}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon style={{color:ICON_COLOR}} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}