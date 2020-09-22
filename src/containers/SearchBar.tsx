import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { Grid } from '@material-ui/core';

const ICON_COLOR = '#2678BF';

export default function SearchBar() {

    return (
        <div >
            <AppBar position="static" color='inherit' style={{ minHeight: '30px', boxShadow: 'none' }}>
                <Toolbar style={{ minHeight: '30px' }}>
                    <Grid container direction="row" justify="space-around" alignItems="center" >
                        <Grid item xs={1}>
                            <SearchIcon style={{color:ICON_COLOR}} />
                        </Grid>
                        <Grid item xs={10}>
                            <InputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <CameraAltIcon  style={{color:ICON_COLOR}} />
                        </Grid>
                    </Grid>
                </Toolbar>

            </AppBar>
        </div>
    );
}