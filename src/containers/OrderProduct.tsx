
import { AppBar, BottomNavigation, CardMedia, Divider, Fab, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AspectRatio from 'react-aspect-ratio';
import { useRouter, Router } from 'next/router'

const DESCRIPTION_COLOR = '#D2D2D2';
const TEXT_COLOR = '#F26E22';
const PRICE_COLOR = '#ED2939';

let items = [
    { id: 0, name: 'coke', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851614/001397056_qsr44y.jpg', price: 15, amount: 3, Description: 'lipsum', retailPrice: 16 },
    { id: 1, name: 'pepsi', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851613/172935e5ab484423dd674574b205a77d_whbquq.jpg', price: 22, amount: 2, Description: 'lipsum', retailPrice: 25 },
    { id: 2, name: '7up', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851614/71wN2KS-i1L._SL1500__qahrbm.jpg', price: 16, amount: 1, Description: 'lipsum', retailPrice: 18 },
    { id: 3, name: 'fanta', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851613/c47555d95d284d6de5abeaf1049b0474b53b906c-large_ptsrtr.jpg', price: 30, amount: 0, Description: 'lipsum', retailPrice: 31 }
];

// get sum of price prop across all objects in array


function OrderProduct() {

    const [itemState, setItemState] = useState(items);
    const { width, height } = useWindowSize()
    const [totalPriceState, setTotalPriceState] = useState(0);
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

    const linkToPageCart = () => {
        router.push('/cart')
    }

    const _changeAmount =( key: number, number: number ) =>{
               let newArr = [...itemState]
        for (var i in items) {
          if (newArr[i].id == key) {
            if(number<0){
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
            <Grid container spacing={0} direction="row" justify="space-evenly" alignItems="center" style={{ padding: '1px' }}>
                {itemState && itemState.map((item, index: number) => (
                    <Grid item xs={12} key={index} style={{ padding: '3px' }} >
                        <Typography variant='h6' color='primary' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>{item.name}</Typography>

                        <Grid style={{ padding: '10px' }} container spacing={0} direction="row" justify="space-evenly" alignItems="center" >
                            <Grid item xs={6} style={{ padding: '3px' }}>
                                <div style={{ margin: '0 auto', textAlign: 'center' }}>
                                    <CardMedia
                                        component="img"
                                        alt={item.image}
                                        image={item.image}
                                        title={item.image}
                                    />
                                </div>
                            </Grid>

                            <Grid item xs={6} style={{ padding: '3px' }}>
                                <Grid item xs={12} style={{ padding: '3px' }}>
                                    <Typography variant='subtitle2' style={{ textAlign: 'left', color: DESCRIPTION_COLOR }}>name</Typography>
                                    <Typography variant='body1' style={{ textAlign: 'left', color: TEXT_COLOR }}>{item.name}</Typography>
                                </Grid>
                                <Grid item xs={12} style={{ padding: '3px' }}>
                                    <Typography variant='subtitle2' style={{ textAlign: 'left', color: DESCRIPTION_COLOR }}>description</Typography>
                                    <Typography variant='body2' style={{ textAlign: 'left', color: TEXT_COLOR }}>{item.Description}</Typography>
                                </Grid>
                                <Grid item xs={12} style={{ padding: '3px' }}>
                                    <Typography variant='subtitle2' style={{ textAlign: 'left', color: DESCRIPTION_COLOR }}>retail price</Typography>
                                    <Typography variant='body1' style={{ textAlign: 'left', color: DESCRIPTION_COLOR }}>{item.retailPrice} $</Typography>
                                </Grid>
                                <Grid item xs={12} style={{ padding: '3px' }}>
                                    <Typography variant='subtitle2' style={{ textAlign: 'left', color: DESCRIPTION_COLOR }}>price</Typography>
                                    <Typography variant='body1' style={{ textAlign: 'left', color: PRICE_COLOR }}>{item.price} $</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/*<Grid style={{ padding: '10px' }} container spacing={0} direction="row" justify="space-evenly" alignItems="center" >
                           
                           
                    </Grid>*/}

                       

                        <Grid style={{ padding: '10px' }} container spacing={0} direction="row" justify="space-evenly" alignItems="center" >

                            <Grid item xs={6} style={{ padding: '3px' }}>
                                <Grid container spacing={0} justify="center" alignItems="center" >
                                    <Grid item xs={4} style={{ padding: '3px' }}>
                                        <Typography variant='body1' style={{ textAlign: 'center', }} onClick={()=>_changeAmount(item.id,item.amount-1)}>-</Typography>
                                    </Grid>
                                    <Grid item xs={4} style={{ padding: '3px' }}>
                                        {/*<Typography variant='body1' style={{ textAlign: 'center', color: TEXT_COLOR }}>{item.amount}</Typography>*/}
                                        <TextField type='number' value={item.amount} size="small" onChange={(event) => _fixAmount(event, item.id)} />
                                    </Grid>
                                    <Grid item xs={4} style={{ padding: '3px' }}>
                                        <Typography variant='body1' style={{ textAlign: 'center', }} onClick={()=>_changeAmount(item.id,item.amount+1)}>+</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={6} style={{ padding: '3px', }}>
                            <Grid container spacing={0} justify="center" alignItems="center" >
                                <Grid item xs={6} style={{ padding: '3px' }}>
                                    <Typography variant='body1' style={{ textAlign: 'right', color: TEXT_COLOR }}>Price</Typography>
                                </Grid>
                                <Grid item xs={6} style={{ padding: '3px' }}>
                                    <Typography variant='h6' style={{ textAlign: 'right', color: PRICE_COLOR }}>$ {item.price * item.amount}</Typography>
                                </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider />
                    </Grid>))}


            </Grid>



            <div style={{ paddingBottom: '20%' }}>
                <Typography variant='caption' style={{
                    color: '#ED2939', marginLeft: '10px',
                }}>After meet condition it will confirm detail</Typography>
            </div>


            <AppBar position="fixed" color='inherit' style={{ top: 'auto', bottom: 0, }}>
                <Grid container spacing={0} direction="row" justify="space-evenly" alignItems="center" >
                    <Grid item xs={6} style={{ padding: '10px' }}>
                        <Typography variant='caption'>Total</Typography>
                        <Typography variant='body1' style={{ color: PRICE_COLOR }}>$ {totalPriceState}</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ padding: '3px' }}>
                        <Fab
                            style={{ backgroundColor: '#ED2939', color: 'white', float: 'right', margin: '5px' }}
                            variant="extended"
                            size="small"
                            aria-label="add"
                            onClick={linkToPageCart}
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
