
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
    { id: 0, name: 'coke', price: 15, amount: 3, },
    { id: 1, name: 'pepsi', price: 22, amount: 2, },
    { id: 2, name: '7up', price: 16, amount: 1, },
];




function ConfirmOrderContainer() {

    const [itemState, setItemState] = useState(items);
    const { width, height } = useWindowSize()
    const router = useRouter()
    const [snackMessage, setSnackMessage] = React.useState('');
    const [openSnackbarMui, setOpenSnackbarMui] = React.useState(false);
    const [checkEmptyCart, setCheckEmptyCart] = React.useState(false);
    const [totalPriceState, setTotalPriceState] = useState(0);
    const [totalAmountState, setAmountState] = useState(0);

    useEffect(() => {
        if (itemState) {
            _updateTotalPriceState()
            _updateAmountState()
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

    const _updateAmountState = () => {
        if (itemState) {
            let amountTotal = itemState.reduce(function (prev, cur) {
                return prev + (cur.amount);
            }, 0);
            setAmountState(amountTotal)
        }
    }

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
            <Paper style={{paddingBottom:'3%',paddingTop:'1%'}}>
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
                            <Typography variant='caption' color='primary' style={{ marginRight: '7px', }}>{item.price}</Typography>
                        </Grid>
                    </Grid>))}


                <Typography variant='h6' color='primary' style={{ marginLeft: '7px', textAlign: 'right', paddingTop: '2%', paddingBottom: '2%', marginRight: '7px' }}>Total : {totalPriceState} $ ({totalAmountState}Unit)</Typography>

                {/*<div style={{textAlign:'center'}}><Button style={{ marginTop: '15px',width:'92%' }} variant='outlined' fullWidth color="primary" ></Button></div>*/}


            </Paper>


            <SnackBarData
                message={snackMessage}
                openSnackbarMui={openSnackbarMui}
                handleClose={handleClose}

            />


        </div >
    );

}



export default ConfirmOrderContainer;
