
import { Box, Button, Card, CardMedia, Divider, Fab, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';
import DoneIcon from '@material-ui/icons/Done';
import { useRouter } from 'next/router';
import MerchantName from '../component/MerchantName';
import { DescriptionText, ListText, MainText, SubText } from '../consts/const';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArchiveIcon from '@material-ui/icons/Archive';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';
let myItems = [
    { id: 1, orderClient: 'ayesha', orderName: 'coke', price: 7, amount: 3, isDone: false }, { id: 2, orderClient: 'escha', orderName: 'fanta', price: 7, amount: 4, isDone: false }, { id: 3, orderClient: 'ayesha', orderName: 'fanta', price: 7, amount: 4, isDone: true },
    { id: 4, orderClient: 'emma', orderName: 'coke', price: 7, amount: 3, isDone: true }, { id: 5, orderClient: 'escha', orderName: 'lays', price: 1, amount: 4, isDone: false }, { id: 6, orderClient: 'marie', orderName: 'icecube', price: 1, amount: 4, isDone: true }
];

const CONTAINER_SCREEN = 'CONTAINER_SCREEN'
const MODAL_SCREEN = 'MODAL_SCREEN'

function OrderListingContainer() {

    const { width, height } = useWindowSize()
    const router = useRouter()
    const [myItemState, setMyItemState] = useState(myItems);
    const [currentScreen, setCurrentScreen] = useState(CONTAINER_SCREEN)

    const [editMyItemState, setEditMyItemState] = useState({ id: myItemState.length + 1, orderClient: '', orderName: '', price: 0, amount: 0, isDone: false });
    const [orderName, setOrderName] = useState('');

    useEffect(() => {
        if (myItemState) {
            console.log(myItemState)
        }
    }, [myItemState]);

    const _goBack = () => {
        router.back()
    }

    const updateTask = (id, isDone) => {
        for (var i in myItemState) {
            if (myItemState[i].id == id) {
                myItemState[i].isDone = isDone;
                break; //Stop this loop, we found it!
            }
        }
    }

    const updateCurrentTask = (id: number, isDone: boolean) => {
        setMyItemState(
            myItemState.map(item =>
                item.id === id
                    ? { ...item, isDone: isDone }
                    : item
            ))
    }

    const addTask = () => {
        setMyItemState(prevArray => [...prevArray, { id: myItemState.length + 1, orderClient: 'add new', orderName: 'add new', price: 0, amount: 0, isDone: false }])
    }

    const editTask = (data) => {
        setCurrentScreen(MODAL_SCREEN)
        setEditMyItemState(data)
        if (data) {
            console.log(editMyItemState)
        }
    }

    const handleOrderNameChange = (event) => {
        setOrderName(event.target.value);
    };

    /*const handleChangeTypingOrderName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,key: string) => {
        console.log("EVENT >>>",event.target.value)
        let clone = editMyItemState
        clone[key] === key
            ? Object.assign({ key: event.target.value })
            : clone
        console.log('FINAL CHECK', clone)
        setEditMyItemState(clone)

    };*/

    return (
        <div>

            {currentScreen === CONTAINER_SCREEN && <div>
                <Grid container direction="row" justify="space-around"
                    alignItems="center" style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <Grid item lg={3} xl={3} md={3} sm={3} xs={3} style={{ textAlign: 'center' }}>
                        <Fab onClick={_goBack} style={{ margin: 'auto 12%', color: 'white', textAlign: 'center', }} size="small" color="primary"><ArrowBackIcon /></Fab>
                    </Grid>
                    <Grid item lg={6} xl={6} md={6} sm={6} xs={6} >
                        <Typography variant='h6' color='primary' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>Order Listing</Typography>
                    </Grid>
                    <Grid item lg={3} xl={3} md={3} sm={3} xs={3} style={{ textAlign: 'center' }}>
                        <Fab style={{ margin: 'auto 12%', color: 'white', textAlign: 'center', }} size="small" color="secondary"><MenuIcon /></Fab>
                    </Grid>
                </Grid>

                <Card variant="outlined" >
                    <Grid container direction="row" justify="space-evenly" alignItems="center" style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <Grid item lg={3} xl={3} md={3} sm={3} xs={3}>
                            <Typography variant='caption' color='primary' style={{ textAlign: 'left', marginLeft: '5px', paddingTop: '3vh', paddingBottom: '1vh' }}>Order Name</Typography>
                        </Grid>
                        <Grid item lg={2} xl={2} md={2} sm={2} xs={2} style={{ textAlign: 'center', }}>
                            <Typography variant='caption' color='inherit' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>Price</Typography>
                        </Grid>
                        <Grid item lg={2} xl={2} md={2} sm={2} xs={2} style={{ textAlign: 'center', }}>
                            <Typography variant='caption' color='inherit' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>Amount</Typography>
                        </Grid>
                        <Grid item lg={2} xl={2} md={2} sm={2} xs={2} style={{ textAlign: 'center', }}>
                            <Typography variant='caption' color='inherit' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>Client</Typography>
                        </Grid>
                        <Grid item lg={3} xl={3} md={3} sm={3} xs={3} >
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item lg={6} xl={6} md={6} sm={6} xs={6} style={{ textAlign: 'center', }}>
                                    <Typography variant='caption' color='inherit' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>Done</Typography>
                                </Grid>
                                <Grid item lg={6} xl={6} md={6} sm={6} xs={6} style={{ textAlign: 'center', }}>
                                    <Typography variant='caption' color='inherit' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>Action</Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>



                    {myItemState && myItemState.map((itemlist, index: number) => (
                        <Grid key={index} container direction="row" justify="space-evenly" alignItems="center" style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <Grid item lg={3} xl={3} md={3} sm={3} xs={3} onClick={() => editTask(itemlist)}>
                                {itemlist.isDone === false && <Typography variant='caption' color='primary' style={{ textAlign: 'left', marginLeft: '12px', paddingTop: '3vh', paddingBottom: '1vh' }}>{itemlist.orderName}</Typography>}
                                {itemlist.isDone === true && <Typography variant='caption' color='inherit' style={{ textAlign: 'left', marginLeft: '12px', paddingTop: '3vh', paddingBottom: '1vh', color: ListText }}>{itemlist.orderName}</Typography>}
                            </Grid>
                            <Grid item lg={2} xl={2} md={2} sm={2} xs={2} style={{ textAlign: 'center', }}>
                                {itemlist.isDone === false && <Typography variant='caption' color='inherit' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>{itemlist.price}</Typography>}
                                {itemlist.isDone === true && <Typography variant='caption' color='inherit' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh', color: ListText }}>{itemlist.price}</Typography>}
                            </Grid>
                            <Grid item lg={2} xl={2} md={2} sm={2} xs={2} style={{ textAlign: 'center', }}>
                                {itemlist.isDone === false && <Typography variant='caption' color='inherit' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>{itemlist.amount}</Typography>}
                                {itemlist.isDone === true && <Typography variant='caption' color='inherit' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh', color: ListText }}>{itemlist.amount}</Typography>}
                            </Grid>
                            <Grid item lg={2} xl={2} md={2} sm={2} xs={2} style={{ textAlign: 'center', }}>
                                {itemlist.isDone === false && <Typography variant='caption' color='inherit' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>{itemlist.orderClient}</Typography>}
                                {itemlist.isDone === true && <Typography variant='caption' color='inherit' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh', color: ListText }}>{itemlist.orderClient}</Typography>}
                            </Grid >
                            <Grid item lg={3} xl={3} md={3} sm={3} xs={3} >
                                <Grid container direction="row" justify="center" alignItems="stretch">
                                    <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                                        {itemlist.isDone === false && <Fab onClick={() => updateCurrentTask(itemlist.id, true)} style={{ margin: '2px', color: 'white' }} size="small" color="secondary"><DoneIcon /></Fab>}
                                        {itemlist.isDone === true && <Fab disabled style={{ margin: '2px', color: 'white' }} size="small" color="secondary"><DoneIcon /></Fab>}
                                    </Grid>
                                    <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                                        <Fab style={{ margin: '2px', color: 'white' }} size="small" color="primary"><MoreVertIcon /></Fab>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid >))}
                </Card >

                {<Button style={{ marginTop: '15px' }} variant='outlined' fullWidth color="primary" onClick={() => addTask()}>Add</Button>}

            </div>}

            {currentScreen === MODAL_SCREEN && <div>
                <TextField
                    label="orderName"
                    style={{ margin: 8 }}
                    placeholder="Name"
                    helperText="Name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={orderName}
                    onChange={handleOrderNameChange}
                />


            </div>}

        </div >
    );

}



export default OrderListingContainer;
