import { Button, CardMedia, Divider, Fab, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';

import { useRouter, Router } from 'next/router'
import MyGoogleMap from './Map';
const MainText = '#A60321';
const SubText = '#2678BF';
const ListText = '#D2D2D2';
const LOCATION = `1°20'48.0"N 103°57'21.7"E 132 Simei Street 1, Block 132'`
const DISTANCE = `1KM`
let items = [
    {
        id: 0, name: 'Demo SHOP', description: 'Just softdrink sent every week Storage 2-3 day in chiller',
    },
    {
        id: 1, name: 'Jane Doe Shop', description: 'This is Orchard group buy for vegetable. Deliver every Wednesday afternoon',
    },
    {
        id: 2, name: 'KingCrap Shop', description: 'Just soap i order in whole sales',
    },
];

const MAP = { title: 'my Map', alt: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1601953291/Component_8_1_qcmeyc.png', map: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1601953291/Component_8_1_qcmeyc.png' };



function GroupList() {

    const [itemState, setItemState] = useState(items);
    const { width, height } = useWindowSize()
    const router = useRouter()

    useEffect(() => {
        if (itemState) {

        }
    }, [itemState]);


    const linkToPageGroupShop = () => {
        router.push('/groupshop')
    }


    return (
        <div>
            <Typography variant='h6' color='primary' style={{ textAlign: 'center', paddingTop: '3vh', paddingBottom: '1vh' }}>Near me</Typography>
            <div style={{ margin: '0 auto', textAlign: 'center' }}>
                <CardMedia
                    component="img"
                    alt={MAP.alt}
                    image={MAP.map}
                    title={MAP.title}
                />
            </div>
            <Paper variant="outlined" style={{ margin: '10px' }} >
                <div style={{ margin: '10px' }}>
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <Grid item lg={2} xl={2} md={2} sm={2} xs={false}>
                            <Typography variant='caption' color='inherit' style={{ textAlign: 'left', paddingTop: '3vh', paddingBottom: '1vh' }}>Location :</Typography>
                        </Grid>
                        <Grid item lg={9} xl={9} md={9} sm={9} xs={10}>
                            <Typography variant='caption' color='primary' style={{ textAlign: 'left', paddingTop: '3vh', paddingBottom: '1vh' }}>{LOCATION}</Typography>
                        </Grid>
                    </Grid>
                    <Divider style={{ width: '80%' }} />
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" style={{ marginTop: '10px', marginBottom: '10px' }} >
                        <Grid item lg={2} xl={2} md={2} sm={2} xs={false}>
                            <Typography variant='caption' color='inherit' style={{ textAlign: 'left', paddingTop: '3vh', paddingBottom: '1vh' }}>Distance :</Typography>
                        </Grid>
                        <Grid item lg={9} xl={9} md={9} sm={9} xs={10}>
                            <Typography variant='caption' color='primary' style={{ textAlign: 'left', paddingTop: '3vh', paddingBottom: '1vh' }}>{DISTANCE}</Typography>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
            {
                itemState && itemState.map((shop, index: number) => (
                    <Paper variant="outlined" key={index} style={{ margin: '10px' }} >
                        <div style={{ margin: '10px' }}>

                            <Fab
                                style={{ float: 'right', backgroundColor: '#F26D85', color: 'white' }}
                                variant="extended"
                                size="small"
                                aria-label="add"
                                onClick={linkToPageGroupShop}
                            >
                                JOIN GROUP
                                <ArrowForwardIosIcon fontSize='small' />

                            </Fab>



                            <Typography variant='h6' style={{ color: MainText }}>{shop.name}</Typography>
                            <Typography variant='caption' style={{ color: ListText }}>Description</Typography>
                            <Typography variant='body2'> {shop.description}</Typography>

                            {/*shop.groupList && <Typography variant='caption' style={{ color: ListText }}>GroupList</Typography>*/}

                            {/*shop.groupList && shop.groupList.map((groupListitem, index: number) => (
                                <div key={index}>
                                    <Typography style={{ color: MainText }} variant='body1'> {groupListitem.group}</Typography>
                                    <Typography variant='caption' style={{ color: ListText }}>Description</Typography>
                                    <Typography  variant='body2'> {groupListitem.description}</Typography>
                                    <Divider style={{margin:'10px'}}/>
                                    {groupListitem.item && groupListitem.item.map((goods, index: number) => (
                                        <div key={index}>
                                            <Typography style={{ color: SubText, textIndent: '20px' }} variant='body2'>{goods.item}</Typography>
                                        </div>))}
                                        }
                                    </div>))*/}
                        </div>
                    </Paper>))}

        </div >
    );

}



export default GroupList;
