
import { Box, Button, Card, CardMedia, Divider, Fab, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';

import { useRouter } from 'next/router';
import MerchantName from '../component/MerchantName';
import { DescriptionText, MainText, SubText } from '../consts/const';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArchiveIcon from '@material-ui/icons/Archive';
import MenuIcon from '@material-ui/icons/Menu';
let myItems = [
    { id: 0, Merchant: 'TESCO LOTUS', Participants: 6, DeliveryDate: '12 nov 2020', OrderAmount: 9 },
    { id: 1, Merchant: 'BIG C', Participants: 7, DeliveryDate: '13 nov 2020', OrderAmount: 8 },
    { id: 2, Merchant: 'Paragon', Participants: 3, DeliveryDate: '14 nov 2020', OrderAmount: 8 },
];


function DashboardContainer() {

    const { width, height } = useWindowSize()
    const router = useRouter()
    const [myItemState, setMyItemState] = useState(myItems);

    useEffect(() => {
        if (myItemState) {

        }
    }, [myItemState]);

    const _clickView = (pagename) => {
        router.push('/' + pagename)
    }

    return (
        <div>
            <Typography variant='h6' color='primary' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>My Dashboard</Typography>

            {myItemState && myItemState.map((MerchantList, index: number) => (
                <Card key={index} variant="outlined" style={{ marginBottom: '10px' }}>
                    <Grid container direction="row" justify="center" alignItems="center" style={{ paddingTop: '10px' }}>
                        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                            <Typography variant='h6' color='secondary' style={{ textAlign: 'center', }}>{MerchantList.Merchant}</Typography>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justify="center" alignItems="flex-start" style={{ margin: '10px' }}>
                        <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                            <Typography variant='caption' color='inherit' style={{ textAlign: 'left', }}>DeliveryDate</Typography>
                            <Typography variant='subtitle1' color='primary' style={{ textAlign: 'left', }}>{MerchantList.DeliveryDate}</Typography>
                        </Grid>
                        <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                            <Typography variant='caption' color='inherit' style={{ textAlign: 'left', }}>Participants</Typography>
                            <Typography variant='subtitle1' color='primary' style={{ textAlign: 'left', }}>{MerchantList.Participants}</Typography>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justify="center" alignItems="flex-start" style={{ margin: '10px' }}>
                        <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                            <Typography variant='caption' color='inherit' style={{ textAlign: 'left', }}>OrderAmount</Typography>
                            <Typography variant='subtitle1' color='primary' style={{ textAlign: 'left', }}>{MerchantList.OrderAmount}</Typography>
                        </Grid>
                        <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                            <Grid container direction="row" justify="center" alignItems="stretch">
                                <Grid item lg={4} xl={4} md={4} sm={4} xs={4}>
                                    <Fab onClick={()=>_clickView('orderlisting')} style={{ margin: '2px', color: 'white' }} size="small" color="secondary"><VisibilityIcon /></Fab>
                                </Grid>
                                <Grid item lg={4} xl={4} md={4} sm={4} xs={4}>
                                    <Fab style={{ margin: '2px', color: 'white' }} size="small" color="primary"><ArchiveIcon /></Fab>
                                </Grid>
                                <Grid item lg={4} xl={4} md={4} sm={4} xs={4}>
                                    <Fab style={{ margin: '2px', color: 'white' }} size="small" color="primary"><MenuIcon /></Fab>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Card>
            ))}

        {<Button  variant='outlined' fullWidth color="primary" >Add</Button>}

        </div >
    );

}



export default DashboardContainer;
