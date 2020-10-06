
import { AppBar, BottomNavigation, CardMedia, Divider, Fab, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AspectRatio from 'react-aspect-ratio';
import { useRouter, Router } from 'next/router'
const MainText = '#A60321';
const DescriptionText = '#F26E22';
const SubText = '#2678BF';
const ListText = '#D2D2D2';
let items = [
    { id: 0, name: 'coke', price: 15, amount: 3, },
    { id: 1, name: 'pepsi', price: 22, amount: 2, },
    { id: 2, name: '7up', price: 16, amount: 1, },
];

function CartList() {

    const [itemState, setItemState] = useState(items);
    const { width, height } = useWindowSize()
    const [totalPriceState, setTotalPriceState] = useState(0);
    const [limiteTimeState, setLimiteTimeState] = useState('16 September');
    const [collectTimeState, setCollectTime] = useState('16 November');
    const router = useRouter()

    useEffect(() => {
        if (itemState) {
            updateTotalPriceState()
        }
    }, [itemState]);

    const updateTotalPriceState = () => {
        if (itemState) {
            let priceTotal = itemState.reduce(function (prev, cur) {
                return prev + (cur.price * cur.amount);
            }, 0);
            setTotalPriceState(priceTotal)
        }
    }

    const linkToPagePayment = () => {
        router.push('/payment')
    }


    const _changeAmount = (key: number, number: number) => {
        let newArr = [...itemState]
        for (var i in items) {
            if (newArr[i].id == key) {
                if (number < 0) {
                    newArr[i].amount = 0;
                    setItemState(newArr)
                } else {
                    newArr[i].amount = number;
                    setItemState(newArr)
                }
                break; //Stop this loop, we found it!
            }
        }
    }


    const _fixAmount = (event: number) => (key: number,) => {
        let newArr = [...itemState]
        let newEvent = event
        for (var i in items) {
            if (newArr[i].id == key) {
                if (newEvent < 0) {
                    newArr[i].amount = 0;
                    setItemState(newArr)
                } else {
                    newArr[i].amount = newEvent;
                    console.log(newArr)
                    setItemState(newArr)
                }
                break; //Stop this loop, we found it!
            }
        }
    }


    return (
        <div>
            <Typography variant='h6' color='primary' style={{ marginLeft: '15px' }}>Your Cart</Typography>

            {itemState && itemState.map((item, index: number) => (
                <Grid key={index} container spacing={0} direction="row" justify="space-around" alignItems="flex-end" >

                    <Grid item xs={12} style={{ padding: '15px', margin: '0 auto' }}>
                        <Typography variant='h6'>{item.name}</Typography>


                        <Grid container spacing={0} direction="row" justify="space-evenly" alignItems="center" >
                            <Grid item xs={4}>
                                <Typography variant='body2' style={{ color: DescriptionText }}>Each: ${item.price}</Typography>

                            </Grid>
                            <Grid item xs={8} style={{ padding: '3px' }}>
                                <Grid container spacing={0} justify="center" alignItems="center" >
                                    <Grid item xs={4} style={{ padding: '3px' }}>
                                        {/*<Typography variant='body1' style={{ textAlign: 'center', }} >-</Typography>*/}
                                        <Typography variant='body1' style={{ textAlign: 'center', }} onClick={() => _changeAmount(item.id, item.amount - 1)}>-</Typography>
                                    </Grid>
                                    <Grid item xs={4} style={{ padding: '3px' }}>
                                        {/*<Typography variant='body1' style={{ textAlign: 'center', }}>{item.amount}</Typography>*/}
                                        <TextField value={item.amount} size="small" onChange={() => _fixAmount(item.id)} />
                                    </Grid>
                                    <Grid item xs={4} style={{ padding: '3px' }}>
                                        {/*<Typography variant='body1' style={{ textAlign: 'center', }}>+</Typography>*/}
                                        <Typography variant='body1' style={{ textAlign: 'center', }} onClick={() => _changeAmount(item.id, item.amount + 1)}>+</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Typography variant='body2' style={{ color: MainText, textAlign: 'right', paddingTop: '5px', paddingBottom: '5px' }}> Price : ${item.amount * item.price}</Typography>
                        <Divider style={{ width: '98%', textAlign: 'center', alignItems: 'center', margin: '0 auto' }} />
                    </Grid>
                </Grid>))}

            <div style={{ paddingBottom: '20%' }}>
                <Typography variant='caption' style={{
                    color: '#ED2939', marginLeft: '10px',
                }}>After meet condition it will confirm detail</Typography>
            </div>
            <AppBar position="fixed" color='inherit' style={{ top: 'auto', bottom: 0, }}>

                <Grid container spacing={0} direction="row" justify="space-evenly" alignItems="center" >
                    <Grid item xs={6} style={{ padding: '10px' }}>
                        <Typography variant='caption'>Total</Typography>
                        <Typography variant='body1'>$ {totalPriceState}</Typography>
                        <Typography variant='caption'>Collect At Host At : {collectTimeState}</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ padding: '3px' }}>
                        <Fab
                            style={{ backgroundColor: '#ED2939', color: 'white', float: 'right', margin: '5px' }}
                            variant="extended"
                            size="small"
                            aria-label="add"
                            onClick={linkToPagePayment}
                        >
                            Preorder
                                <ShoppingBasketIcon fontSize='small' style={{ margin: '5px' }} />

                        </Fab>
                    </Grid>
                </Grid>
            </AppBar>
        </div >
    );

}



export default CartList;
