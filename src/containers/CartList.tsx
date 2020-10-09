
import { AppBar, Divider, Fab, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useRouter, Router } from 'next/router'
import MerchantName from '../component/MerchantName';
import { DescriptionText, MainText, SubText } from '../consts/const';

let items = [
    { id: 0, name: 'coke', price: 15, amount: 3, },
    { id: 1, name: 'pepsi', price: 22, amount: 2, },
    { id: 2, name: '7up', price: 16, amount: 1, },
];

const group = {
    id: 0, groupName: 'Drink', description: 'Storage 2-3 day in chiller', current: 0, required: 35, type: 'money',
    location: `1°20'48.0"N 103°57'21.7"E 132 Simei Street 1, Block 132`, limit: '16 September', collect: '17 Septemper',
};

const merchant = {
    id: 0, name: 'Demo SHOP', host: 'ayesha', description: 'Just softdrink sent every week Storage 2-3 day in chiller', alt: '1', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1559550999/ING_33849_10771_v61zjx.jpg', location: 'Jurong, Tuas , 611140', date: '10 october 2020'
};


function CartList() {

    const [itemState, setItemState] = useState(items);
    const [groupState, setGroupState] = useState(group);
    const [merchantState, setMerchantState] = useState(merchant);
    const { width, height } = useWindowSize()
    const [totalPriceState, setTotalPriceState] = useState(0);
    const [totalAmountState, setAmountState] = useState(0);
    //const [limiteTimeState, setLimiteTimeState] = useState('16 September');
    const [collectTimeState, setCollectTime] = useState('16 November');
    const router = useRouter()

    useEffect(() => {
        if (itemState) {
            updateTotalPriceState()
            updateAmountState()
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

    const updateAmountState = () => {
        if (itemState) {
            let amountTotal = itemState.reduce(function (prev, cur) {
                return prev + (cur.amount);
            }, 0);
            setAmountState(amountTotal)
        }
    }


    const linkToPagePayment = () => {
        router.push('/payment')
    }


    const _changeAmount = (key: number, number: number) => {
        let newArr = [...itemState]
        for (var i in items) {
            if (newArr[i].id == key) {
                if (number <= 0) {
                    newArr[i].amount = 0;
                    setItemState(newArr)
                }
                else if (number >= 99) {
                    newArr[i].amount = 99;
                    setItemState(newArr)
                }
                else {
                    newArr[i].amount = number;
                    setItemState(newArr)
                }
                break; //Stop this loop, we found it!
            }
        }
    }


    const _fixAmount = (event, key: number,) => {
        let newArr = [...itemState]
        let newEvent = event.currentTarget.value
        //console.log(newEvent)
        //console.log(key)
        for (var i in items) {
            if (newArr[i].id == key) {
                newArr[i].amount = newEvent;
                if (newArr[i].amount <= 0) {
                    newArr[i].amount = 0;
                    setItemState(newArr)
                }
                if (newArr[i].amount >= 99) {
                    newArr[i].amount = 99;
                    setItemState(newArr)
                } else {
                    setItemState(newArr)
                }
                break; //Stop this loop, we found it!
            }
        }
    }


    return (
        <div>
            <Typography variant='h6' color='primary' style={{ marginLeft: '15px' }}>Shopping Bag</Typography>

            <Paper style={{ margin: '2%',paddingTop:'2%' }}>

                <MerchantName
                type={'div'}
                    image={merchantState.image}
                    imageAlt={merchantState.alt}
                    merchantName={merchantState.name}
                />

                <div style={{ marginTop: '10px', marginBottom: '10px' }} />
                <Typography variant='h6' color='primary' style={{ textAlign: 'left', textIndent: '3vw', paddingTop: '3vh', paddingBottom: '1vh' }}>{groupState.groupName}</Typography>
                <Typography variant='body2' style={{ textIndent: '3vw', color: MainText }}> {groupState.description}</Typography>
                <Typography variant='body2' style={{ textIndent: '3vw', color: SubText }}> {groupState.limit}</Typography>

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
                                            <TextField type='number' inputProps={{ style: { textAlign: 'center' } }} value={item.amount} size="small" onChange={(event) => _fixAmount(event, item.id)} />
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
                <Typography variant='body2' style={{ marginLeft: '3vw', color: SubText }}> Location : {groupState.location}</Typography>
                <div style={{ paddingBottom: '2vh' }} />
            </Paper>

            <div style={{ paddingBottom: '25%' }}>
                <Typography variant='caption' style={{
                    color: '#ED2939', marginLeft: '10px',
                }}>After meet condition it will confirm detail</Typography>
            </div>
            <AppBar position="fixed" color='inherit' style={{ top: 'auto', bottom: 0, }}>

                <Grid container spacing={0} direction="row" justify="space-evenly" alignItems="center" >
                    <Grid item xs={8} style={{ padding: '10px' }}>
                        <Typography color='secondary' variant='caption'>Order Summary</Typography>
                        <Typography variant='h6' color='primary'>$ {totalPriceState} ({totalAmountState} unit)</Typography>
                        <Typography variant='caption'>Collect At Host At : {collectTimeState}</Typography>
                    </Grid>
                    <Grid item xs={4} style={{ padding: '3px' }}>
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
