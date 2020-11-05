
import { Avatar, Box, Button, Card, CardActionArea, CardMedia, Chip, Divider, Fab, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';
import moment from 'moment';
import { useRouter } from 'next/router';
import MerchantName from '../component/MerchantName';
import { DescriptionText, MainText, SubText } from '../consts/const';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArchiveIcon from '@material-ui/icons/Archive';
import MenuIcon from '@material-ui/icons/Menu';
let myItems = [
    { id: 0, Merchant: 'TESCO LOTUS', Participants: 6, DeliveryDate: new Date('2014-08-18T21:11:54'), OrderAmount: 9 },
    { id: 1, Merchant: 'BIG C', Participants: 7, DeliveryDate: new Date('2014-08-18T21:11:54'), OrderAmount: 8 },
    { id: 2, Merchant: 'Paragon', Participants: 3, DeliveryDate: new Date('2014-08-18T21:11:54'), OrderAmount: 8 },
];
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import SnackBarData from '../component/SnackBarData';


const CONTAINER_SCREEN = 'CONTAINER_SCREEN'
const MODAL_SCREEN = 'MODAL_SCREEN'


function DashboardContainer() {

    const { width, height } = useWindowSize()
    const router = useRouter()
    const [myItemState, setMyItemState] = useState(myItems);
    const [currentScreen, setCurrentScreen] = useState(CONTAINER_SCREEN)
    const [editMyItemState, setEditMyItemState] = useState({ id: myItemState.length + 1, Merchant: '', Participants: 0, DeliveryDate: new Date('2014-08-18T21:11:54'), OrderAmount: 0 });

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const [openSnackbarMui, setOpenSnackbarMui] = React.useState(false);

    useEffect(() => {
        if (myItemState.length) {
            setCurrentScreen(CONTAINER_SCREEN)
            setOpenSnackbarMui(false);
        }
    }, [myItemState.length]);

    const _clickView = (pagename) => {
        router.push('/' + pagename)
    }

    const _pushPage = (pagename) => {
        router.push('/' + pagename)
    }

    const addGroup = () => {
        setMyItemState(prevArray => [...prevArray, { id: myItemState.length + 1, Merchant: 'NEW', Participants: 0, DeliveryDate: new Date('2014-08-18T21:11:54'), OrderAmount: 0 }])
    }

    const editGroup = (data) => {
        setCurrentScreen(MODAL_SCREEN)
        setEditMyItemState(data)
    }

      const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnackbarMui(false);
      };

    const _handleGroupChange = (key: string, event) => {
        let code = event.target.value
        let data = { ...editMyItemState }
        //console.log('DATA>>>', data)
        data[key] = key
        //let keyItem = data[key]
        //let final = {[keyItem]: code }
        //console.log('will set', final)
        const editValue = { ...data, [key]: code }
        //console.log('editValue>>>', editValue)
        setEditMyItemState(editValue)

        setMyItemState(
            myItemState.map(item =>
                item.id === editValue.id
                    ? { ...editValue }
                    : item
            ))
    }

    const _updateEditGroup = () => {
        //console.log('this will update', editMyItemState)
        setMyItemState(
            myItemState.map(item =>
                item.id === editMyItemState.id
                    ? { ...item, editMyItemState }
                    : item
            ))

        setCurrentScreen(CONTAINER_SCREEN)
        setOpenSnackbarMui(true)
    }

    const _handleDateChange = (key: string, date) => {
        let code = date
        let data = { ...editMyItemState }
        //console.log('DATA>>>', data)
        data[key] = key
        //let keyItem = data[key]
        //let final = {[keyItem]: code }
        //console.log('will set', final)
        const editValue = { ...data, [key]: code }
        //console.log('editValue>>>', editValue)
        setEditMyItemState(editValue)

        setMyItemState(
            myItemState.map(item =>
                item.id === editValue.id
                    ? { ...editValue }
                    : item
            ))
    }

    const _setArchive =( id: number )=>{
        //console.log(id)
        for(var i = 0; i < myItemState.length; i++) {
            let data = [...myItemState]
            if(data[i].id == id) {
                data.splice(i, 1);
                //console.log(data)
                setMyItemState(data)
                break;
            }
        }
    }

    return (
        <div>

            {currentScreen === CONTAINER_SCREEN && <div>
                <Grid container direction="row" justify="space-around"
                    alignItems="center" style={{ marginTop: '10px', marginBottom: '10px' }}>

                    <Grid item lg={6} xl={6} md={6} sm={6} xs={6} >
                        <Typography variant='h6' color='primary' style={{ textAlign: 'center', }}>My Dashboard</Typography>
                    </Grid>
                    <Grid item lg={6} xl={6} md={6} sm={6} xs={6} >
                        <Chip
                            avatar={<Avatar><ArchiveIcon /></Avatar>}
                            label="View Archive"
                            onClick={() => _pushPage('dashboardarchive')}
                            variant="outlined"
                            style={{ textAlign: 'center', }}
                        />
                    </Grid>
                </Grid>


                {myItemState && myItemState.map((MerchantList, index: number) => (
                    <Card key={index} variant="outlined" style={{ marginBottom: '10px' }}>
                        <CardActionArea onClick={() => editGroup(MerchantList)}>
                            <Grid container direction="row" justify="center" alignItems="center" style={{ paddingTop: '10px' }}>
                                <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                                    <Typography variant='h6' color='secondary' style={{ textAlign: 'center', }}>{MerchantList.Merchant}</Typography>
                                </Grid>
                            </Grid>
                        </CardActionArea>

                        <CardActionArea onClick={() => editGroup(MerchantList)}>
                            <Grid container direction="row" justify="center" alignItems="flex-start" style={{ margin: '10px' }}>
                                <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                                    <Typography variant='caption' color='inherit' style={{ textAlign: 'left', }}>DeliveryDate</Typography>
                                    <Typography variant='subtitle1' color='primary' style={{ textAlign: 'left', }}>{moment(MerchantList.DeliveryDate).format("Do-MMM-YY")}</Typography>
                                </Grid>
                                <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                                    <Typography variant='caption' color='inherit' style={{ textAlign: 'left', }}>Participants</Typography>
                                    <Typography variant='subtitle1' color='primary' style={{ textAlign: 'left', }}>{MerchantList.Participants}</Typography>
                                </Grid>
                            </Grid>
                        </CardActionArea>

                        <Grid container direction="row" justify="center" alignItems="flex-start" style={{ margin: '10px' }}>
                            <Grid item lg={6} xl={6} md={6} sm={6} xs={6} onClick={() => editGroup(MerchantList)}>
                                <Typography variant='caption' color='inherit' style={{ textAlign: 'left', }}>OrderAmount</Typography>
                                <Typography variant='subtitle1' color='primary' style={{ textAlign: 'left', }}>{MerchantList.OrderAmount}</Typography>
                            </Grid>
                            <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                                <Grid container direction="row" justify="center" alignItems="stretch">
                                    <Grid item lg={4} xl={4} md={4} sm={4} xs={4}>
                                        <Fab onClick={() => _clickView('orderlisting')} style={{ margin: '2px', color: 'white' }} size="small" color="secondary"><VisibilityIcon /></Fab>
                                    </Grid>
                                    <Grid  item lg={4} xl={4} md={4} sm={4} xs={4}>
                                        <Fab  onClick={() => _setArchive(MerchantList.id)} style={{ margin: '2px', color: 'white' }} size="small" color="primary"><ArchiveIcon /></Fab>
                                    </Grid>
                                    <Grid item lg={4} xl={4} md={4} sm={4} xs={4}>
                                        <Fab style={{ margin: '2px', color: 'white' }} size="small" color="primary"><MenuIcon /></Fab>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Card>
                ))}

                {<Button variant='outlined' fullWidth color="primary" onClick={() => addGroup()} >Add</Button>}
            </div>}

            {currentScreen === MODAL_SCREEN && <div>
                <TextField
                    label="Merchant"
                    style={{ margin: 8 }}
                    placeholder="Merchant"
                    helperText="Your Merchant name"
                    fullWidth
                    margin="normal"
                    type='text'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={editMyItemState.Merchant}
                    onChange={(e) => _handleGroupChange("Merchant", e)}
                />

                {/*<TextField
                    label="DeliveryDate"
                    style={{ margin: 8 }}
                    placeholder="DeliveryDate"
                    helperText="Your Delivery Date"
                    fullWidth

                    margin="normal"
                    type='date'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={editMyItemState.DeliveryDate}
                    onChange={(e) => _handleGroupChange("DeliveryDate", e)}
                />*/}


                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        id="date-picker-dialog"
                        label="Delivery Date"
                        format="MM/dd/yyyy"
                        helperText="Your Delivery Date"
                        value={editMyItemState.DeliveryDate}
                        onChange={(e) => _handleDateChange("DeliveryDate", e)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>

                {<Button style={{ marginTop: '15px' }} variant='outlined' fullWidth color="primary" onClick={() => _updateEditGroup()}>Edit</Button>}
            </div>}

                <SnackBarData 
                  message={'Edit Success'}
                  openSnackbarMui={openSnackbarMui}
                  handleClose={handleClose}
                />

        </div >
    );

}



export default DashboardContainer;
