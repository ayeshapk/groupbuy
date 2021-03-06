
import { AppBar, Card, CardMedia, Divider, Fab, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useRouter, Router } from 'next/router'
import MerchantName from '../component/MerchantName';
import { DESCRIPTION_COLOR, MainText, PRICE_COLOR, SubText, TEXT_COLOR } from '../consts/const';

const merchant = {
    id: 0, name: 'Demo SHOP', host: 'ayesha', description: 'Just softdrink sent every week Storage 2-3 day in chiller', alt: '1', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1559550999/ING_33849_10771_v61zjx.jpg', location: 'Jurong, Tuas , 611140', date: '10 october 2020'
};

const items = [
    { id: 0, name: 'coke', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851614/001397056_qsr44y.jpg', price: 15, amount: 3, Description: 'lipsum adadada fasdgfasdgraesd gedagdfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 16 },
    { id: 1, name: 'pepsi', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851613/172935e5ab484423dd674574b205a77d_whbquq.jpg', price: 22, amount: 2, Description: 'lipsum adadada fasdgfasdgraesdgeda gdfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 25 },
    { id: 2, name: '7up', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851614/71wN2KS-i1L._SL1500__qahrbm.jpg', price: 16, amount: 1, Description: 'lipsum adadada fasdgfasdgraesdgedag dfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 18 },
    { id: 3, name: 'fanta', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851613/c47555d95d284d6de5abeaf1049b0474b53b906c-large_ptsrtr.jpg', price: 30, amount: 0, Description: 'lipsum adadada fasdgfasdgra esdgedagdfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 31 }
];

const group = {
    id: 0, groupName: 'Drink', description: 'Storage 2-3 day in chiller', current: 0, required: 35, type: 'money',
    location: `1°20'48.0"N 103°57'21.7"E 132 Simei Street 1, Block 132`, limit: '16 September', collect: '17 Septemper',
};

// get sum of price prop across all objects in array


function OrderProduct() {

    const [itemState, setItemState] = useState(items);
    const [groupState, setgroupState] = useState(group);
    const [merchantState, setMerchantState] = useState(merchant);
    const { width, height } = useWindowSize()
    const [totalAmountState, setAmountState] = useState(0);
    const [totalPriceState, setTotalPriceState] = useState(0);
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


    const linkToPageConfirm = () => {
        router.push('/confirmorder')
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

            <Card style={{marginTop:'3vh',paddingBottom:'10px'}}>
                <MerchantName
                    type={'div'}
                    image={merchantState.image}
                    imageAlt={merchantState.alt}
                    merchantName={merchantState.name}
                />

                <Grid container spacing={0} direction="row" justify="space-evenly" alignItems="flex-start" style={{ padding: '5px' }}>
                    <Grid item xs={12} style={{ padding: '3px' }}>
                        <Typography variant='h6' color='primary' style={{ fontWeight: 'bold', textAlign: 'left', }}>{groupState.groupName.toLocaleUpperCase()}</Typography>
                        <div style={{ padding: '5px' }} />
                    </Grid>

                    <Grid item xs={5} style={{ padding: '3px' }}>
                        <Typography variant='body2' style={{ color: MainText }}> Description :</Typography>
                    </Grid>
                    <Grid item xs={7} style={{ padding: '3px' }}>
                        <Typography variant='body2' style={{ color: MainText }}> {groupState.description}</Typography>
                    </Grid>

                    <Grid item xs={5} style={{ padding: '3px' }}>
                        <Typography variant='body2' style={{ color: SubText }}> Location : </Typography>
                    </Grid>

                    <Grid item xs={7} style={{ padding: '3px' }}>
                        <Typography variant='body2' style={{ color: SubText }}> {groupState.location}</Typography>
                    </Grid>

                    <Grid item xs={5} style={{ padding: '3px' }}>
                        <Typography variant='body2' style={{ color: SubText }}> Order Close Date :</Typography>
                    </Grid>

                    <Grid item xs={7} style={{ padding: '3px' }}>
                        <Typography variant='body2' style={{ color: SubText }}> {groupState.limit}</Typography>
                    </Grid>
                </Grid>
            </Card>

            <div style={{ marginTop: '10px', marginBottom: '10px' }} />
            <Grid container spacing={0} direction="row" justify="space-evenly" alignItems="center" style={{ padding: '1px' }}>
                {itemState && itemState.map((item, index: number) => (
                    <Grid item xs={12} key={index} style={{ padding: '3px' }} >
                        <Grid style={{ padding: '3px' }} container spacing={0} direction="row" justify="space-evenly" alignItems="center" >
                            <Grid item xs={5} style={{ padding: '3px' }}>
                                <div style={{ margin: '0 auto', textAlign: 'center' }}>
                                    <CardMedia
                                        component="img"
                                        alt={item.image}
                                        image={item.image}
                                        title={item.image}
                                    />
                                </div>
                            </Grid>

                            <Grid item xs={7} style={{ padding: '3px' }}>
                                <Grid item xs={12} style={{ padding: '3px' }}>
                                    <Grid container spacing={0} direction="row" justify="space-evenly" alignItems="center" style={{ padding: '1px' }}>
                                        <Grid item xs={12} style={{ padding: '3px' }}>
                                            <Typography variant='h5' style={{ textAlign: 'left', color: TEXT_COLOR, fontWeight: 'bold', }}>{item.name}</Typography>
                                            <Typography variant='body2' style={{ textAlign: 'left', color: DESCRIPTION_COLOR }}>{item.Description}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={0} direction="row" justify="space-between" alignItems="center" >
                                    <Grid item xs={6} style={{ padding: '3px', }}>
                                        <Grid container spacing={0} justify="space-between" alignItems="center" >
                                            <Typography variant='h5' style={{ textAlign: 'left', color: PRICE_COLOR }}>$ {item.price}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} style={{ padding: '3px' }}>
                                        {item.amount > 0 && <Grid container spacing={0} justify="center" alignItems="center" >
                                            <Grid item xs={4} style={{ padding: '3px' }}>
                                                <Typography variant='body1' style={{ textAlign: 'center', }} onClick={() => _changeAmount(item.id, item.amount - 1)}>-</Typography>
                                            </Grid>
                                            <Grid item xs={4} style={{ padding: '3px' }}>
                                                {/*<Typography variant='body1' style={{ textAlign: 'center', color: TEXT_COLOR }}>{item.amount}</Typography>*/}
                                                <TextField inputProps={{ style: { textAlign: 'center' } }} type='number' value={item.amount} size="small" onChange={(event) => _fixAmount(event, item.id)} />
                                            </Grid>
                                            <Grid item xs={4} style={{ padding: '3px' }}>
                                                <Typography variant='body1' style={{ textAlign: 'center', }} onClick={() => _changeAmount(item.id, item.amount + 1)}>+</Typography>
                                            </Grid>
                                        </Grid>}
                                        {item.amount === 0 && <Grid container spacing={0} justify="center" alignItems="center" >
                                            <Fab size='small' variant='extended' color='primary' style={{ color: 'white', }} onClick={() => _changeAmount(item.id, item.amount + 1)}>Buy</Fab>
                                        </Grid>}
                                    </Grid>


                                </Grid>
                            </Grid>
                        </Grid>





                        <Divider style={{ width: '90vw', margin: '1% auto' }} />
                    </Grid>))}


            </Grid>




            <div style={{ paddingBottom: '20%' }}>
                <Typography variant='caption' style={{
                    color: '#ED2939', marginLeft: '10px',
                }}>After meet condition it will confirm detail</Typography>
            </div>


            <AppBar position="fixed" color='inherit' style={{ top: 'auto', bottom: 0, }}>
                <Grid container spacing={0} direction="row" justify="space-evenly" alignItems="center" >
                    <Grid item xs={5} style={{ padding: '10px' }}>
                        <Typography variant='caption'>Total</Typography>

                        <Typography variant='h6' color='primary'>$ {totalPriceState} ({totalAmountState} unit)</Typography>
                    </Grid>
                    <Grid item xs={7} style={{ padding: '3px' }}>
                        <Fab
                            style={{ backgroundColor: '#ED2939', color: 'white', float: 'right', margin: '5px' }}
                            variant="extended"
                            size="small"
                            aria-label="add"
                            onClick={linkToPageConfirm}
                        >
                            Place Order
                                <ShoppingBasketIcon fontSize='small' style={{ margin: '5px' }} />

                        </Fab>
                    </Grid>
                </Grid>
            </AppBar>
        </div >
    );

}



export default OrderProduct;
