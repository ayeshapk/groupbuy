import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button, Drawer, Divider, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid, TextField } from '@material-ui/core';
import useWindowSize from '../HookServerData/Windowsize';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter, Router } from 'next/router'
import ListIcon from '@material-ui/icons/List';
import AspectRatio from 'react-aspect-ratio';
import CloseIcon from '@material-ui/icons/Close';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const LOGO = 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1597643774/weddingPencilLogo_t6282j.png'

export default function MenuApp() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const { width, } = useWindowSize()
    const isMobileView = (width <= 600)
    const headerTooWide = (width >= 1100)
    const [openMenuBarWeb, setopenMenuBarWeb] = useState(false);
    const [openMenuBarMobile, setopenMenuBarMobile] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [account, setAccount] = useState('')
    const router = useRouter()

    const [userLoginDialog, setUserLoginDialog] = useState(false);
    const [loginUser, setloginUser] = useState('')
    const [passwordUser, setPasswordUser] = useState('')



    useEffect(() => {
        setopenMenuBarWeb(false)
        setopenMenuBarMobile(false)
        setOpenDrawer(false)
    }, [width]);// Only re-run the effect if width changes

    const handleOpenMenuBarWeb = (event: { currentTarget: any; }) => {
        setopenMenuBarWeb(true)
        setAnchorEl(event.currentTarget)
    };
    const handleCloseMenuBarWeb = () => {
        setopenMenuBarWeb(false)
        setAnchorEl(null)
    };

    const handleCloseMenuBarMobile = () => {
        setopenMenuBarMobile(false)
        setMobileMoreAnchorEl(null)
    };



    const handleCloseMenuBarWebWithPush = () => {
        setopenMenuBarWeb(false)
        setAnchorEl(null)
    };

    const _updateUserLoginMessage = (event: { currentTarget: { value: import("react").SetStateAction<string>; }; }) => {
        setloginUser(event.currentTarget.value);
    };

    const _updatePasswordMessage = (event: { currentTarget: { value: import("react").SetStateAction<string>; }; }) => {
        setPasswordUser(event.currentTarget.value);
    };




    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={openMenuBarWeb}
            onClose={handleCloseMenuBarWeb}
        >
            Account
        </Menu>
    );

    const mobileUserPanel = (
        <div>
            {account === '' && <AspectRatio ratio="707/254" style={{ width: '300px', position: 'relative' }}>
                <img src="https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1596706839/top_rhrh2f.png" />
                <Typography variant='h6' style={{ position: 'absolute', color: 'white', bottom: '50px', left: '16px', }}>GUEST</Typography>
                <Typography variant='subtitle1' style={{ position: 'absolute', color: 'white', bottom: '10px', left: '16px', }}>Login for more</Typography>
                <CloseIcon onClick={() => setOpenDrawer(false)} style={{ position: 'absolute', color: 'white', bottom: '50px', right: '16px', }} />
            </AspectRatio>}

            {account !== '' && <AspectRatio ratio="707/254" style={{ width: '300px', position: 'relative' }}>
                <img src="https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1596706839/top_rhrh2f.png" />
                {account && <Typography variant='h6' style={{ position: 'absolute', color: 'white', bottom: '50px', left: '16px', }}>{account.slice(0, 6)}</Typography>}
                <CloseIcon onClick={() => setOpenDrawer(false)} style={{ position: 'absolute', color: 'white', bottom: '50px', right: '16px', }} />
            </AspectRatio>}

            <div style={{ height: '15px', width: 'auto', display: 'flex' }}>
                <div style={{ height: '15px', width: '50%', backgroundColor: '#67AFBE' }} />
                <div style={{ height: '15px', width: '25%', backgroundColor: '#DE9BAC' }} />
                <div style={{ height: '15px', width: '25%', backgroundColor: '#989595' }} />
            </div>
        </div>
    );


    const drawerMenu = (
        <Drawer anchor={'right'}
            open={openDrawer}
        /*onClick={() => {
            setOpenDrawer(false)
        }}
        onKeyDown={() => setOpenDrawer(false)}*/
        >
            {mobileUserPanel}

            <MenuItem style={{ paddingLeft: '30px', paddingRight: '30px' }} color="inherit" onClick={() => {
                setOpenDrawer(false)
                router.push('/')
            }}>
                <Badge badgeContent={0} color="primary">
                    <Typography>Home</Typography>
                </Badge>
            </MenuItem>

            {account !== '' && <MenuItem style={{ paddingLeft: '30px', paddingRight: '30px' }} color="inherit" onClick={() => {
                setOpenDrawer(false)
               
            }}>
                <Badge badgeContent={0} color="primary">
                    <Typography>Dashboard</Typography>
                </Badge>
            </MenuItem>}

            {account !== '' && <MenuItem style={{ paddingLeft: '30px', paddingRight: '30px' }} color="inherit" onClick={() => {
                setOpenDrawer(false)
               
            }}>
                <Badge badgeContent={0} color="primary">
                    <Typography>Profile</Typography>
                </Badge>
            </MenuItem>}


            {account !== '' && <MenuItem style={{ paddingLeft: '30px', paddingRight: '30px' }} color="inherit" onClick={() => {
                setOpenDrawer(false)
                router.replace('/todoshook')
            }}>
                <Badge badgeContent={4} color="primary">
                    <Typography>Todo</Typography>
                </Badge>
            </MenuItem>}

            {account !== '' && <MenuItem style={{ paddingLeft: '30px', paddingRight: '30px' }} color="inherit" onClick={() => {
                setOpenDrawer(false)
                router.replace('/guestshook')
            }}>
                <Badge badgeContent={17} color="primary">
                    <Typography>Guest</Typography>
                </Badge>
            </MenuItem>}

            {account !== '' && <MenuItem style={{ paddingLeft: '30px', paddingRight: '30px' }} color="inherit" onClick={() => {
                setOpenDrawer(false)
                router.replace('/eventshook')
            }}>
                <Badge badgeContent={2} color="primary">
                    <Typography>Event</Typography>
                </Badge>
            </MenuItem>}

            {account !== '' && <Divider />}

            <MenuItem style={{ paddingLeft: '30px', paddingRight: '30px' }} color="inherit" onClick={() => {
                setOpenDrawer(false)
                router.replace('/article')
            }}>
                <Badge badgeContent={20000} color="primary">
                    <Typography>Article</Typography>
                </Badge>
            </MenuItem>

            {account !== '' && <MenuItem style={{ paddingLeft: '30px', paddingRight: '30px' }} color="inherit" onClick={() => {
                setOpenDrawer(false)
            }}>
                <Badge badgeContent={0} color="primary">
                    <Typography>Log out</Typography>
                </Badge>
            </MenuItem>}

            {account === '' && <MenuItem style={{ paddingLeft: '30px', paddingRight: '30px' }} color="inherit" onClick={() => {
                setOpenDrawer(false)
            }}>
                <Badge badgeContent={0} color="primary">
                    <Typography>Log In</Typography>
                </Badge>
            </MenuItem>}

        </Drawer>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={openMenuBarMobile}
            onClose={handleCloseMenuBarMobile}
        >
            <MenuItem onClick={handleCloseMenuBarMobile}>
                <Button
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <Typography>{account}</Typography>
                </Button>
            </MenuItem>
        </Menu>
    );

    const UserLoginDialog = (
        <div >
            <Dialog
                open={userLoginDialog}
                disableBackdropClick
                maxWidth={'xs'}
                fullWidth
                onClose={() => setUserLoginDialog(false)}
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle style={{margin:'0 auto'}} id="scroll-dialog-title">Wedding Pencil Login</DialogTitle>
                <Divider style={{width:'80%',textAlign:'center',marginTop:'3vh',marginBottom:'3vh',marginLeft:'auto',marginRight:'auto'}}/>
                <DialogContent>
                    <div style={{ margin: '0 auto', color: '#DE9BAC' }}>
                        <Grid container spacing={1} alignItems="flex-end" justify='center'>
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="User-login"
                                    label="UserLogin"
                                    color='primary'
                                    value={loginUser}
                                    fullWidth
                                    onChange={_updateUserLoginMessage}
                                />

                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end" justify='center'>
                            <Grid item>
                                <VpnKeyIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    type="password"
                                    id="password"
                                    label="Password"
                                    color='primary'
                                    value={passwordUser}
                                    fullWidth
                                    onChange={_updatePasswordMessage}
                                />

                            </Grid>
                        </Grid>
                    </div>

                </DialogContent>
                <Divider style={{width:'80%',textAlign:'center',marginTop:'3vh',marginBottom:'3vh',marginLeft:'auto',marginRight:'auto'}}/>
                <DialogActions>
                    <Button onClick={() => setUserLoginDialog(false)} color="primary" variant='outlined'>
                        Cancle
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );


    const renderWebMenu = (
        <div >
            <Button aria-label="web menu" color="inherit" onClick={() => router.push('/todoshook')}>
                <Badge badgeContent={4} color="primary">
                    <Typography style={{ color: 'white' }}>Todo</Typography>
                </Badge>
            </Button>
            <Button aria-label="web menu" color="inherit" onClick={() => router.push('/eventshook')}>
                <Badge badgeContent={17} color="primary">
                    <Typography style={{ color: 'white' }}>Event</Typography>
                </Badge>
            </Button>
            <Button aria-label="web menu" color="inherit" onClick={() => router.push('/guestshook')}>
                <Badge badgeContent={2} color="primary">
                    <Typography style={{ color: 'white' }}>Guest</Typography>
                </Badge>
            </Button>
        </div>
    );

    return (
        <div style={{ flexGrow: 1, }}>
            <AppBar position="fixed" color="secondary" >
                <Box width={isMobileView ? 1 / 1 : headerTooWide ? 4 / 6 : 19 / 20} style={{ margin: '0 auto' }}>
                    <Toolbar >
                        {isMobileView && <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="Go back"
                            onClick={() => {
                                router.back()
                            }}
                        >
                            <ArrowBackIcon style={{ color: 'white' }} />
                        </IconButton>}
                        {/*<Typography variant="h6" noWrap style={{ color: 'white' }} onClick={()=> router.push('/')}>
                            Wedding Pencil
                        </Typography>*/}
                        <img onClick={() => router.push('/')} src={LOGO} alt={'Wedding Pencil'} width='auto' height='45px' />

                        <div style={{ flexGrow: 1, }} />
                        {!isMobileView && <div style={{ display: 'flex', flexBasis: 'auto', placeItems: 'flex-end' }}>
                            <Button color="inherit" onClick={() => router.push('/article')}>
                                <Badge badgeContent={12} color="primary">
                                    <Typography style={{ color: 'white' }}>Cart</Typography>
                                </Badge>
                            </Button>
                            {account !== '' && renderWebMenu}
                            {account !== '' && <Button
                                onClick={handleOpenMenuBarWeb}
                                color="inherit"
                            >
                                <AccountCircle style={{ color: 'white' }} />  {account && <Typography style={{ color: 'white' }}>{account.slice(0, 6)}</Typography>}
                            </Button>}
                            {account === '' && <Button variant="outlined" style={{ color: 'white', border: '1px solid white' }} onClick={() => setUserLoginDialog(true)}>GET START</Button>}
                        </div>}
                        {isMobileView && <div >
                            {/*account !== '' && <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleOpenMenuBarMobile}
                                color="inherit"
                            >
                                <AccountCircle style={{ color: 'white' }} />
                        </IconButton>*/}
                            {isMobileView && <div>
                                {account !== '' && <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={() => {
                                        setOpenDrawer(true)
                                    }}
                                >
                                    <ListIcon style={{ color: 'white' }} />
                                </IconButton>}
                                {account === '' && <Button variant="outlined" style={{ color: 'white', border: '1px solid white' }} onClick={() => {
                                    setOpenDrawer(true)
                                }}>GET START</Button>}
                            </div>}
                        </div>}
                    </Toolbar>
                </Box>
            </AppBar>
            {drawerMenu}
            {renderMobileMenu}
            {renderMenu}
            {UserLoginDialog}
        </div>
    );
}