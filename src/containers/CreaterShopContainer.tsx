
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Button, CardMedia, Fab, Grid, List, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router';
import MerchantName from '../component/MerchantName';
import { DescriptionText, DESCRIPTION_COLOR, MainText, PRICE_COLOR, SubText, TEXT_COLOR } from '../consts/const';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';
import { KeyboardDatePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

let creater = [
    {
        id: 0, groupName: 'Drink', description: 'Storage 2-3 day in chiller',
        location: `1°20'48.0"N 103°57'21.7"E 132 Simei Street 1, Block 132`, limit: new Date('2020-10-18T21:12:54'), collect: new Date('2020-10-18T21:12:54'),
        item: [
            { id: 0, name: 'coke', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851614/001397056_qsr44y.jpg', price: 15, amount: 3, Description: 'lipsum adadada fasdgfasdgraesd gedagdfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 16 },
            { id: 1, name: 'pepsi', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851613/172935e5ab484423dd674574b205a77d_whbquq.jpg', price: 22, amount: 2, Description: 'lipsum adadada fasdgfasdgraesdgeda gdfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 25 },
            { id: 2, name: '7up', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851614/71wN2KS-i1L._SL1500__qahrbm.jpg', price: 16, amount: 1, Description: 'lipsum adadada fasdgfasdgraesdgedag dfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 18 },
            { id: 3, name: 'fanta', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851613/c47555d95d284d6de5abeaf1049b0474b53b906c-large_ptsrtr.jpg', price: 30, amount: 0, Description: 'lipsum adadada fasdgfasdgra esdgedagdfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 31 }
        ]
    },
    {
        id: 1, groupName: 'Vegetable', description: 'Storage 2-3 day in chiller',
        location: `1°20'48.0"N 103°57'21.7"E 132 Simei Street 1, Block 132`, limit: new Date('2020-10-18T21:12:54'), collect: new Date('2020-10-18T21:12:54'),
        item: [
            { id: 0, name: 'Chinese pomfret', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1601875546/IMG_9641_copy_grande_bts0yp.webp', price: 15, amount: 3, Description: 'lipsum adadada fasdgfasdgraesd gedagdfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 16 },
            { id: 1, name: 'brown mushroom', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1601875547/0000020985646_hgcsbe.webp', price: 22, amount: 2, Description: 'lipsum adadada fasdgfasdgraesdgeda gdfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 25 },
            { id: 2, name: 'oyster mushroom', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1601875546/product-jpeg-500x500_z04c43.jpg', price: 16, amount: 1, Description: 'lipsum adadada fasdgfasdgraesdgedag dfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 18 },
        ]
    }
];

const CONTAINER_SCREEN = 'CONTAINER_SCREEN'
const MODAL_ADD_GROUP_SCREEN = 'MODAL_ADD_GROUP_SCREEN'
const MODAL_ADD_ITEM_SCREEN = 'MODAL_ADD_ITEM_SCREEN'

function CreaterShopContainer() {

    const [itemState, setItemState] = useState(creater);
    const { width, height } = useWindowSize()
    const router = useRouter()
    const [expanded, setExpanded] = React.useState<number | false>(0);
    const [currentScreen, setCurrentScreen] = useState(CONTAINER_SCREEN)
    const [groupData, setGroupData] = useState({
        id: 1, groupName: '', description: '',
        location: ``, limit: new Date('2020-10-18T21:12:54'), collect: new Date('2020-10-18T21:12:54'),
        item: []
    })

    const [itemData, setItemData] = useState({ id: 0, name: '', image: '', price: 0, amount: 3, Description: '', retailPrice: 0 },)
    const [stateId,setStateId] =useState(0)

    const [groupReady, setgroupReady] = useState(false)
    const [itemReady, setItemReady] = useState(false)
    useEffect(() => {
        if (itemState) {

        }
    }, [itemState]);

    useEffect(() => {
        if (groupData.groupName.length >= 1 && groupData.description.length >= 1 && groupData.location.length >= 1) {
            setgroupReady(true)
        }
    }, [groupData]);

    useEffect(() => {
        if (itemData.name.length >= 1 && itemData.Description.length >= 1) {
            setItemReady(true)
        }
    }, [itemData]);
  

    const linkToPage = (pagename: string) => {
        router.push('/' + pagename)
    }

    const _addGroup = () => {
        setCurrentScreen(MODAL_ADD_GROUP_SCREEN)
    }

    const _addItemData = (id: number) => {
        //console.log(id)
        setCurrentScreen(MODAL_ADD_ITEM_SCREEN)
        setStateId(id)
    }


    const handleChange = (panel: number) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    const _handleGroupChange = (key: string, event) => {
        let code = event.target.value
        let data = { ...groupData }
        //console.log('DATA>>>', data)
        data[key] = key
        //let keyItem = data[key]
        //let final = {[keyItem]: code }
        //console.log('will set', final)
        const editValue = { ...data, [key]: code }
        //console.log('editValue>>>', editValue)
        setGroupData(editValue)
    }

    const _handleDateChange = (key: string, date) => {
        let code = date
        let data = { ...groupData }
        //console.log('DATA>>>', data)
        data[key] = key
        //let keyItem = data[key]
        //let final = {[keyItem]: code }
        //console.log('will set', final)
        const editValue = { ...data, [key]: code }
        //console.log('editValue>>>', editValue)
        setGroupData(editValue)
    }

    const _handleItemChange = (key: string, event) => {
        let code = event.target.value
        let data = { ...itemData }
        //console.log('DATA>>>', data)
        data[key] = key
        //let keyItem = data[key]
        //let final = {[keyItem]: code }
        //console.log('will set', final)
        const value = { ...data, [key]: code }
        //console.log('editValue>>>', editValue)
        setItemData(value)
    }


    const _createGroup = () => {
        //console.log('itemState', itemState)
        let cloneItemState = [...itemState]
        let newObject = { ...groupData }
        newObject.id = itemState.length + 1
        //console.log('new',newObject)
        setGroupData(newObject)
        //console.log('CHECK ARRAYS',cloneItemState)
        //console.log('CHECK OBJECT',newObject)
        //let Clone = {...groupData}
        //console.log('Clone',Clone)
        //console.log('cloneItemState',cloneItemState)
        cloneItemState.push(newObject);
        //console.log('LAST',cloneItemState)
        setItemState(cloneItemState)
        setCurrentScreen(CONTAINER_SCREEN)
        setGroupData({
            id: 1, groupName: '', description: '',
            location: ``, limit: new Date('2020-10-18T21:12:54'), collect: new Date('2020-10-18T21:12:54'),
            item: []
        })
    }

    const _createItem = () => {
        let ID = stateId
        let cloneItemState = [...itemState]
        let newObject = { ...itemData } 
        console.log('cloneItemState',cloneItemState)
        console.log('newObject',newObject)

        cloneItemState.forEach(item => {
            if(item.id === ID){
              let cloneItem = [...item.item]
              let object = {...itemData}
              object.id = cloneItem.length+1
              cloneItem.push(object)
              //console.log('New object---->',cloneItem)
              //setItemArrayData(cloneItem)
              //console.log('>>>>',itemArrayData)
              item.item = cloneItem
              console.log('>>>>>>',item)
              return item
            }
        })

        setItemState(cloneItemState)
        setCurrentScreen(CONTAINER_SCREEN)
        setItemReady(false)
        setItemData({ id: 0, name: '', image: '', price: 0, amount: 3, Description: '', retailPrice: 0 },)
    }

    return (
        <div>
            {currentScreen === CONTAINER_SCREEN && <div>
                <div style={{ marginTop: '5%' }}>
                    <Typography variant='h6' color='primary' style={{ marginLeft: '7px', textAlign: 'center', paddingTop: '2%', paddingBottom: '2%' }}>Creater</Typography>

                    {itemState && itemState.map((groupList, index: number) => (
                        <Accordion expanded={expanded === groupList.id} key={index} onChange={handleChange(groupList.id)} style={{ margin: 0 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Grid container spacing={0} direction="row" justify="space-around" alignItems="center" >
                                    <Grid item xs={12} style={{ margin: '0 auto' }}>
                                        <Typography variant='h6' color='primary' >{groupList.groupName}</Typography>
                                        <Typography variant='subtitle2' color='primary' >{groupList.description}</Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ margin: '0 auto' }}>
                                        <Typography variant='caption' color='secondary' >Collect Location:{groupList.location}</Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ margin: '0 auto' }}>
                                        <Typography variant='caption' color='secondary' >End:{moment(groupList.limit).format("Do-MMM-YY")}</Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ margin: '0 auto' }}>
                                        <Typography variant='caption' color='secondary' >Collect Time: {moment(groupList.collect).format("Do-MMM-YY")}</Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ margin: '0 auto' }}>
                                        <Typography variant='caption' color='secondary' >Total Item:{groupList.item.length}</Typography>
                                    </Grid>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={0} direction="row" justify="space-around" alignItems="center" >
                                    {groupList.item && groupList.item.map((itemList, index: number) => (
                                        <Grid container spacing={0} style={{ marginTop: '2%', marginBottom: '2%' }} direction="row" justify="space-around" alignItems="center" key={index}>
                                            <Grid item xs={5} style={{ margin: '0 auto' }}>
                                                <div style={{ margin: '10px', textAlign: 'center' }}>
                                                    <CardMedia
                                                        component="img"
                                                        alt={itemList.image}
                                                        image={itemList.image}
                                                        title={itemList.image}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={5} style={{ margin: '0 auto' }}>
                                                <Typography variant='h5' style={{ textAlign: 'left', color: TEXT_COLOR, fontWeight: 'bold', }}>{itemList.name}</Typography>
                                                <Typography variant='body2' style={{ textAlign: 'left', color: DESCRIPTION_COLOR }}>{itemList.Description}</Typography>
                                                <Typography variant='h6' style={{ textAlign: 'left', color: PRICE_COLOR }}>$ {itemList.price}</Typography>
                                            </Grid>
                                            <Grid item xs={2} style={{ margin: '0 auto', textAlign: 'right' }}>
                                                <Typography variant='subtitle1' color='secondary'>edit</Typography>
                                            </Grid>
                                        </Grid>))}

                                    <Button color='primary' variant="contained" fullWidth style={{ width: '97%', color: 'white' }} onClick={() => _addItemData(groupList.id)}> +</Button>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                    <div> <List aria-label="SPACEing" style={{ marginTop: '45px', marginBottom: '45px' }} /></div>
                </div>


                <AppBar position="fixed" color="inherit" style={{ top: 'auto', bottom: 0, }}>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                            <Typography variant='subtitle1' color='secondary' style={{ paddingTop: '1vh', paddingBottom: '1vh', textAlign: 'center' }}>Total Group</Typography>
                        </Grid>
                        <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
                            <Typography variant='subtitle1' color='secondary' style={{ paddingTop: '1vh', paddingBottom: '1vh', textAlign: 'center' }}>{itemState.length} </Typography>
                        </Grid>
                    </Grid>

                    <Fab
                        onClick={() => _addGroup()}
                        color="secondary" aria-label="add" style={{
                            position: 'absolute',
                            zIndex: 1,
                            top: -30,
                            left: 0,
                            right: 0,
                            margin: '0 auto',
                        }}>
                        <AddIcon />
                    </Fab>
                </AppBar>

            </div>}

            {currentScreen === MODAL_ADD_GROUP_SCREEN && <div style={{ margin: 8 }}>
                <TextField
                    label="groupName"
                    //style={{ margin: 8 }}
                    placeholder="groupName"
                    helperText="Your groupName name"
                    fullWidth
                    margin="normal"
                    type='text'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={groupData.groupName}
                    onChange={(e) => _handleGroupChange("groupName", e)}
                />

                <TextField
                    label="description"
                    //style={{ margin: 8 }}
                    placeholder="description"
                    helperText="Your description name"
                    fullWidth
                    margin="normal"
                    type='text'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={groupData.description}
                    onChange={(e) => _handleGroupChange("description", e)}
                />

                <TextField
                    label="location"
                    //style={{ margin: 8 }}
                    placeholder="location"
                    helperText="Your location name"
                    fullWidth
                    margin="normal"
                    type='text'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={groupData.location}
                    onChange={(e) => _handleGroupChange("location", e)}
                />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        //style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        id="date-picker-limit"
                        label="limit Date"
                        format="MM/dd/yyyy"
                        helperText="Your limit Date"
                        value={groupData.limit}
                        onChange={(e) => _handleDateChange("limit", e)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        //style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        id="date-picker-collect"
                        label="collect Date"
                        format="MM/dd/yyyy"
                        helperText="Your collect Date"
                        value={groupData.collect}
                        onChange={(e) => _handleDateChange("collect", e)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>

                <div style={{ margin: '8px', textAlign: 'center' }}>
                    {groupReady === true && <Button style={{ marginTop: '15px', }} variant='outlined' fullWidth color="primary" onClick={() => _createGroup()}>Create Group</Button>}
                    {groupReady === false && <Button style={{ marginTop: '15px', }} disabled variant='outlined' fullWidth color="primary"> Create Group</Button>}
                </div>
            </div>}

            {currentScreen === MODAL_ADD_ITEM_SCREEN && <div style={{ margin: 8 }}>
                <TextField
                    label="name"
                    //style={{ margin: 8 }}
                    placeholder="name"
                    helperText="Your item name"
                    fullWidth
                    margin="normal"
                    type='text'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={itemData.name}
                    onChange={(e) => _handleItemChange("name", e)}
                />

                <TextField
                    label="image"
                    //style={{ margin: 8 }}
                    placeholder="image"
                    helperText="Your image name"
                    fullWidth
                    margin="normal"
                    type='text'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={itemData.image}
                    onChange={(e) => _handleItemChange("image", e)}
                />

                <TextField
                    label="Description"
                    //style={{ margin: 8 }}
                    placeholder="Description"
                    helperText="Your Description name"
                    fullWidth
                    margin="normal"
                    type='text'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={itemData.Description}
                    onChange={(e) => _handleItemChange("Description", e)}
                />

                <div style={{ margin: '8px', textAlign: 'center' }}>
                    {itemReady === true && <Button style={{ marginTop: '15px', }} variant='outlined' fullWidth color="primary" onClick={() => _createItem()}>Create Item</Button>}
                    {itemReady === false && <Button style={{ marginTop: '15px', }} disabled variant='outlined' fullWidth color="primary"> Create Item</Button>}
                </div>
            </div>}



        </div >
    );

}



export default CreaterShopContainer;
