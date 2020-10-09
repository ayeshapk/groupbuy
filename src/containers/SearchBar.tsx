import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { CardActionArea, Grid } from '@material-ui/core';
import { ICON_COLOR } from '../consts/const';

export default function SearchBar() {

    return (
        <div >
            <AppBar position="fixed" color='inherit' style={{ minHeight: '30px', boxShadow: 'none', marginTop: '50px' }}>
                <Toolbar style={{ minHeight: '30px' }}>
                    <Grid container direction="row" justify="space-around" alignItems="center" style={{ border: '1px solid #2678bf' }}>
                        <Grid item xs={2}>
                            <SearchIcon  fontSize='large'  style={{ color: ICON_COLOR, margin: '0 auto', paddingTop: '7px' }} />
                        </Grid>
                        <Grid item xs={8}>
                            <InputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Grid>
                        <Grid item xs={2}>
                                <CardActionArea style={{ color: ICON_COLOR, margin: '0 auto',textAlign: 'center',paddingBottom:'1px'  }}>
                                    <CameraAltIcon fontSize='large' style={{ color: ICON_COLOR, margin: '0 auto', paddingTop: '7px' }} />
                                </CardActionArea>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div style={{ paddingTop: '50px' }} />
        </div>
    );
}