
import { AppBar, Button, Divider, Fab, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useRouter, Router } from 'next/router'
import MerchantName from '../component/MerchantName';
import { DescriptionText, MainText, SubText } from '../consts/const';
import SnackBarData from '../component/SnackBarData';

let items = [
    { id: 0, name: 'coke', price: 15.00, amount: 3, },
    { id: 1, name: 'pepsi', price: 22.00, amount: 2, },
    { id: 2, name: '7up', price: 16.00, amount: 1, },
];

let group = 'Drink'


function ConfirmOrderContainer() {

    const [itemState, setItemState] = useState(items);
    const [groupState, setGroupState] = useState(group);
    const { width, height } = useWindowSize()
    const router = useRouter()
    const [snackMessage, setSnackMessage] = React.useState('');
    const [openSnackbarMui, setOpenSnackbarMui] = React.useState(false);
    const [checkEmptyCart, setCheckEmptyCart] = React.useState(false);
    const [totalPriceState, setTotalPriceState] = useState(0);
    //const [totalAmountState, setAmountState] = useState(0);

    useEffect(() => {
        if (itemState) {
            _updateTotalPriceState()
            //_updateAmountState()
            setUpSnack()
        }
    }, [itemState]);

    const _updateTotalPriceState = () => {
        if (itemState) {
            let priceTotal = itemState.reduce(function (prev, cur) {
                return prev + (cur.price * cur.amount);
            }, 0);
            setTotalPriceState(priceTotal)
        }
    }

    /*const _updateAmountState = () => {
        if (itemState) {
            let amountTotal = itemState.reduce(function (prev, cur) {
                return prev + (cur.amount);
            }, 0);
            setAmountState(amountTotal)
        }
    }*/

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackMessage('')
        setOpenSnackbarMui(false);
    };

    const linkToPage = (pagename: string) => {
        router.push('/' + pagename)
    }

    const setUpSnack = () => {
        setSnackMessage('Thank you for you order')
        setOpenSnackbarMui(true)
    }

    return (
        <div>
            <div style={{ marginTop: '5%' }}>
                <Typography variant='h6' color='primary' style={{ marginLeft: '7px', textAlign: 'center', paddingTop: '2%', paddingBottom: '2%' }}>Your Order</Typography>
            </div>
            <Paper style={{ paddingBottom: '3%', paddingTop: '1%' }}>
                <Typography variant='h6' color='primary' style={{ marginLeft: '7px', textAlign: 'center', paddingTop: '2%', paddingBottom: '2%' ,fontWeight: 'bold'}}>{groupState}</Typography>
                <Grid container spacing={0} direction="row" justify="space-around" alignItems="flex-start" >
                    <Grid item xs={4} style={{ padding: '7px', }}>
                        <Typography variant='h6' color='secondary' style={{ marginLeft: '7px' }}>Name</Typography>
                    </Grid>
                    <Grid item xs={4} style={{ padding: '7px', textAlign: 'right' }}>
                        <Typography variant='h6' color='secondary' style={{ marginLeft: '7px', }}>Amount</Typography>
                    </Grid>
                    <Grid item xs={4} style={{ padding: '7px', textAlign: 'right' }}>
                        <Typography variant='h6' color='secondary' style={{ marginRight: '7px', }}>Price</Typography>
                    </Grid>
                </Grid>
                {itemState && itemState.map((item, index) => (
                    <Grid key={index} container spacing={0} direction="row" justify="space-around" alignItems="flex-start" >
                        <Grid item xs={4} style={{ padding: '7px', }}>
                            <Typography variant='caption' color='primary' style={{ marginLeft: '7px' }}>{item.name}</Typography>
                        </Grid>
                        <Grid item xs={4} style={{ padding: '7px', textAlign: 'right' }}>
                            <Typography variant='caption' color='primary' style={{ marginLeft: '7px', }}>{item.amount}</Typography>
                        </Grid>
                        <Grid item xs={4} style={{ padding: '7px', textAlign: 'right' }}>
                            <Typography variant='caption' color='primary' style={{ marginRight: '7px', }}>{item.price.toFixed(2)}</Typography>
                        </Grid>
                    </Grid>))}


                <Typography variant='h6' color='primary' style={{ marginLeft: '7px', textAlign: 'right', paddingTop: '2%', paddingBottom: '2%', marginRight: '7px' }}>Total : $ {totalPriceState.toFixed(2)} </Typography>

                {/*<div style={{textAlign:'center'}}><Button style={{ marginTop: '15px',width:'92%' }} variant='outlined' fullWidth color="primary" ></Button></div>*/}


            </Paper>


            <SnackBarData
                message={snackMessage}
                openSnackbarMui={openSnackbarMui}
                handleClose={handleClose}
                specialMargin={50}
            />

            <AppBar position="fixed" color="inherit" style={{ top: 'auto', bottom: 0, }}>
                <Grid container direction="row" justify="center" alignItems="center" style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>

                        <div style={{ textAlign: 'center' }}>
                            {<Button style={{ width: '97%' }} variant='outlined' fullWidth color="primary" onClick={() => linkToPage('')}>Back To GroupList</Button>}
                        </div>
                    </Grid>
                </Grid>

            </AppBar>


        </div >
    );

}



export default ConfirmOrderContainer;
