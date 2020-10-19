
import { Box, Button, CardMedia, Divider, Fab, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router';
import MerchantName from '../component/MerchantName';
import { DescriptionText, MainText, SubText } from '../consts/const';

let myItems = [
    { id: 0, clientName: 'Demo SHOP', paidDate: '12 Nov 2020', total: 105, groupname: 'Drink', isReady: false, list: [{ id: 0, name: 'coke', price: 15, amount: 3, }, { id: 1, name: 'pepsi', price: 22, amount: 2, }, { id: 2, name: '7up', price: 16, amount: 1, },] },
    { id: 1, clientName: 'Demo SHOP', paidDate: '12 Nov 2020', total: 99, groupname: 'Drink', isReady: false, list: [{ id: 0, name: 'coke', price: 15, amount: 3, }, { id: 1, name: 'pepsi', price: 22, amount: 2, },] },
    { id: 2, clientName: 'Jane Doe Shop', paidDate: '18 Nov 2020', total: 12, groupname: 'Vagetable', isReady: true, list: [{ id: 0, name: 'Chinese pomfret', price: 4, amount: 2, }, { id: 1, name: 'brown mushroom', price: 3, amount: 3, }, { id: 2, name: 'oyster mushroom', price: 3, amount: 1, },] },
];


function DashboardSell() {

    const { width, height } = useWindowSize()
    const router = useRouter()
    const [myItemState, setMyItemState] = useState(myItems);

    useEffect(() => {
        if (myItemState) {

        }
    }, [myItemState]);


    return (
        <div>
            <Typography variant='h6' color='primary' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>Dashboard Sell</Typography>

            {myItemState && myItemState.map((groupList, index: number) => (
                <Paper key={index} variant="outlined" style={{ margin: '10px' }} >

                    <Fab
                        style={{ float: 'right', backgroundColor: '#F26D85', color: 'white', margin: '2%' }}
                        variant="extended"
                        size="small"
                        aria-label="add"
                    >
                        <MenuIcon fontSize='small' />

                    </Fab>
                    <Typography variant='h6' color='primary' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>{groupList.groupname}</Typography>

                    <Grid container direction="row" justify="center" alignItems="flex-start" style={{margin: '10px'}}>
                        <Grid item lg={5} xl={5} md={5} sm={5} xs={5}>
                            <Typography variant='subtitle2' color='inherit' style={{ textAlign: 'left', }}>Shop name: </Typography>
                        </Grid>
                        <Grid item lg={7} xl={7} md={7} sm={7} xs={7}>
                            <Typography variant='subtitle2' color='inherit' style={{ textAlign: 'left', }}>{groupList.clientName}</Typography>
                        </Grid>
                    </Grid>

                    <div style={{ margin: '10px' }}>

                        <Grid container direction="row" justify="space-evenly" alignItems="flex-start" style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <Grid item lg={5} xl={5} md={5} sm={5} xs={5}>
                                <Typography variant='caption' color='secondary' style={{ textAlign: 'left', paddingTop: '3vh', paddingBottom: '1vh' }}>name</Typography>
                            </Grid>
                            <Grid item lg={2} xl={2} md={2} sm={2} xs={2} style={{ textAlign: 'center', }}>
                                <Typography variant='caption' color='secondary' style={{ textAlign: 'left', paddingTop: '3vh', paddingBottom: '1vh' }}>price</Typography>
                            </Grid>
                            <Grid item lg={2} xl={2} md={2} sm={2} xs={2} style={{ textAlign: 'center', }}>
                                <Typography variant='caption' color='secondary' style={{ textAlign: 'left', paddingTop: '3vh', paddingBottom: '1vh' }}>amount</Typography>
                            </Grid>
                            <Grid item lg={3} xl={3} md={3} sm={3} xs={3} style={{ textAlign: 'center', }}>
                                <Typography variant='caption' color='secondary' style={{ textAlign: 'left', paddingTop: '3vh', paddingBottom: '1vh' }}>Total</Typography>
                            </Grid>
                        </Grid>

                        {groupList.list && groupList.list.map((list, index: number) => (
                            <Grid key={index} container direction="row" justify="space-evenly" alignItems="center" style={{ marginTop: '10px', marginBottom: '10px' }}>
                                <Grid item lg={5} xl={5} md={5} sm={5} xs={5} >
                                    <Typography variant='caption' color='primary' style={{ textAlign: 'left', paddingTop: '3vh', paddingBottom: '1vh' }}>{list.name}</Typography>
                                </Grid>
                                <Grid item lg={2} xl={2} md={2} sm={2} xs={2} style={{ textAlign: 'center', }}>
                                    <Typography variant='caption' color='inherit' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>{list.price}</Typography>
                                </Grid>
                                <Grid item lg={2} xl={2} md={2} sm={2} xs={2} style={{ textAlign: 'center', }}>
                                    <Typography variant='caption' color='inherit' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>{list.amount}</Typography>
                                </Grid>
                                <Grid item lg={3} xl={3} md={3} sm={3} xs={3} style={{ textAlign: 'center', }}>
                                    <Typography variant='caption' color='primary' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>{list.amount * list.price}</Typography>
                                </Grid>
                            </Grid>))}

                        <Divider style={{ width: '80%', margin: '0 auto' }} />

                        <Grid container direction="row" justify="flex-end" alignItems="center" style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <Grid item lg={8} xl={8} md={8} sm={8} xs={8} style={{ textAlign: 'center', margin: '0 auto' }}>
                                <Typography variant='caption' color='primary' style={{ textAlign: 'center', }}>- Time limit on : {groupList.paidDate} -</Typography>
                            </Grid>
                            <Grid item lg={4} xl={4} md={4} sm={4} xs={4} style={{ textAlign: 'center', }}>
                                <Typography variant='h6' color='primary' style={{ textAlign: 'center', }}>{groupList.total} $</Typography>
                            </Grid>
                        </Grid>

                        <Grid container  direction="row"  justify="center"  alignItems="center" style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <Grid item lg={6} xl={6} md={6} sm={6} xs={6} style={{ textAlign: 'center', margin: '10px auto',}}>
                                {<Button style={{width:'95%',color:'white'}} fullWidth variant="contained" color="primary">Contact</Button>}
                            </Grid>
                            <Grid item lg={6} xl={6} md={6} sm={6} xs={6} style={{ textAlign: 'center', margin: '10px auto' }}>
                                {<Button style={{width:'95%'}}  fullWidth variant="outlined" color="primary" >Payment</Button>}
                            </Grid>
                         
                        </Grid>


                    </div>
                </Paper>
            ))}

        </div >
    );

}



export default DashboardSell;
