import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Typography } from '@material-ui/core';
import { AppBar, BottomNavigation, CardMedia, Divider, Fab, Grid, Paper, } from '@material-ui/core';

import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useRouter, Router } from 'next/router'
const MainText = '#A60321';
const DescriptionText = '#F26E22';
const SubText = '#2678BF';
const ListText = '#D2D2D2';



function MyGoogleMap() {

    const { width, height } = useWindowSize()
    const router = useRouter()
    useEffect(() => {

    }, []);

    const containerStyle = {
        width: width,
        height: height * 60 / 100,
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const LOCATION =`1°20'48.0"N 103°57'21.7"E 132 Simei Street 1, Block 132'`
    const DISTANCE =`1KM`

    return (
        <div>
            <Typography variant='h6' color='primary' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>Near me</Typography>
            <LoadScript
                googleMapsApiKey="YOUR_API_KEY"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>

            <Paper variant="outlined" style={{ margin: '10px' }} >
                <div style={{ margin: '10px' }}>
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" style={{ marginTop: '10px',marginBottom:'10px' }}>
                        <Grid item lg={2} xl={2} md={2} sm={2} xs={false}>
                            <Typography variant='caption' color='inherit' style={{ textAlign: 'left', paddingTop: '3vh', paddingBottom: '1vh' }}>Location :</Typography>
                        </Grid>
                        <Grid item lg={9} xl={9} md={9} sm={9} xs={10}>
                            <Typography variant='caption' color='primary' style={{ textAlign: 'left', paddingTop: '3vh', paddingBottom: '1vh' }}>{LOCATION}</Typography>
                        </Grid>
                    </Grid>
                    <Divider style={{width:'80%'}} />
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" style={{ marginTop: '10px',marginBottom:'10px'  }} >
                        <Grid item lg={2} xl={2} md={2} sm={2} xs={false}>
                            <Typography variant='caption' color='inherit' style={{ textAlign: 'left', paddingTop: '3vh', paddingBottom: '1vh' }}>Distance :</Typography>
                        </Grid>
                        <Grid item lg={9} xl={9} md={9} sm={9} xs={10}>
                            <Typography variant='caption' color='primary' style={{ textAlign: 'left', paddingTop: '3vh', paddingBottom: '1vh' }}>{DISTANCE}</Typography>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </div >
    );

}



export default MyGoogleMap;
