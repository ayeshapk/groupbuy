
import { Fab, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router';
const MainText = '#A60321';
const DescriptionText = '#F26E22';
const SubText = '#2678BF';
const ListText = '#D2D2D2';
let items = [
    {
        id: 0, groupName: 'Drink', description: 'Storage 2-3 day in chiller', current: 0, required: 35, type: 'money',
        location: `1°20'48.0"N 103°57'21.7"E 132 Simei Street 1, Block 132`, limit: '16 September', collect: '17 Septemper',
        item: [{ id: 0, item: 'coke', }, { id: 1, item: 'pepsi', }, { id: 2, item: '7 Up', }, { id: 2, item: 'fanta', }]
    }, 
    {
        id: 1, groupName: 'Vegetable', description: 'Storage 2-3 day in chiller', current: 0, required: 35, type: 'money',
        location: `1°20'48.0"N 103°57'21.7"E 132 Simei Street 1, Block 132`, limit: '16 September', collect: '17 Septemper',
        item: [{ id: 0, item: 'Chinese pomfret', }, { id: 1, item: 'brown mushroom', }, { id: 2, item: 'oyster mushroom', },]
    }
];

// get sum of price prop across all objects in array


function GroupShop() {

    const [itemState, setItemState] = useState(items);
    const { width, height } = useWindowSize()
    const router = useRouter()

    useEffect(() => {
        if (itemState) {

        }
    }, [itemState]);


    const linkToPageOrder = () =>{
        router.push('/order')
    }



    return (
        <div>
            {
                itemState && itemState.map((item, index: number) => (
                    <Paper variant="outlined" key={index} style={{ margin: '10px' }} >
                        <div style={{ margin: '10px' }}>
                            <Typography variant='h6' style={{ color: MainText }}>{item.groupName}</Typography>
                            <Typography variant='caption' style={{ color: DescriptionText }}>{item.description}</Typography>
                            {item.type === 'money' && <div
                            >
                                <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start" >
                                    <Grid item xs={6}>
                                        <Typography variant='caption' style={{ color: MainText }}>current {item.current} $ </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant='caption' style={{ color: SubText }}>Minimum required {item.required} $ </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
                                    <Grid item xs={6}>
                                        <Typography variant='body2' style={{ color: MainText }} >Collect Location </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant='body2' style={{ color: SubText }} >{item.location} </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
                                    <Grid item xs={6}>
                                        <Typography variant='body2' style={{ color: MainText }} >Time Limit</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant='body2' style={{ color: SubText }} >{item.limit}</Typography>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
                                    <Grid item xs={6}>
                                        <Typography variant='body2' style={{ color: MainText }} >Collect Date</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant='caption' style={{ color: SubText }} >{item.collect}</Typography>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
                                    <Grid item xs={6}>
                                        <Typography variant='body2' style={{ color: MainText }} >Item List</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {item.item && item.item.map((list, index: number) => (
                                            <div key={index}>
                                                <Typography variant='caption' style={{ color: SubText }}>{list.item}</Typography>
                                            </div>
                                        ))}
                                    </Grid>
                                </Grid>


                                <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
                                    <Grid item xs={6}>
                                        <Fab
                                            style={{ backgroundColor: 'white', color: '#F26D85', width: '100%' }}
                                            variant="extended"
                                            size="small"
                                            aria-label="add"
                                        >
                                            MENU
                                <MenuIcon fontSize='small' />

                                        </Fab>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Fab
                                            style={{ backgroundColor: '#F26E22', color: 'white', width: '100%' }}
                                            variant="extended"
                                            size="small"
                                            aria-label="add"
                                            onClick={linkToPageOrder}
                                        >
                                            CHECK ITEM
                                <ArrowForwardIosIcon fontSize='small' />

                                        </Fab>
                                    </Grid>
                                </Grid>


                            </div>}
                        </div>
                    </Paper>
                ))
            }
        </div >
    );

}



export default GroupShop;
