
import { CardMedia, Fab, Grid, List, Paper, Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router';
import MerchantName from '../component/MerchantName';
import { DescriptionText, MainText, SubText } from '../consts/const';


const merchant = {
    id: 0, name: 'Demo SHOP', host: 'ayesha', description: 'Just softdrink sent every week Storage 2-3 day in chiller', alt: '1', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1559550999/ING_33849_10771_v61zjx.jpg', location: 'Jurong, Tuas , 611140', date: '10 october 2020'
};

let items = [
    {
        id: 0, groupName: 'Drink', description: 'Storage 2-3 day in chiller', current: 0, required: 35, type: 'money',
        location: `1°20'48.0"N 103°57'21.7"E 132 Simei Street 1, Block 132`, limit: '16 September', collect: '17 Septemper',
        item: [{ id: 0, item: 'coke', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851614/001397056_qsr44y.jpg' }, { id: 1, item: 'pepsi', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851613/172935e5ab484423dd674574b205a77d_whbquq.jpg' }, { id: 2, item: '7 Up', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851614/71wN2KS-i1L._SL1500__qahrbm.jpg' }, { id: 2, item: 'fanta', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851613/c47555d95d284d6de5abeaf1049b0474b53b906c-large_ptsrtr.jpg' }]
    },
    {
        id: 1, groupName: 'Vegetable', description: 'Storage 2-3 day in chiller', current: 0, required: 35, type: 'money',
        location: `1°20'48.0"N 103°57'21.7"E 132 Simei Street 1, Block 132`, limit: '16 September', collect: '17 Septemper',
        item: [{ id: 0, item: 'Chinese pomfret', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1601875546/IMG_9641_copy_grande_bts0yp.webp' }, { id: 1, item: 'brown mushroom', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1601875547/0000020985646_hgcsbe.webp' }, { id: 2, item: 'oyster mushroom', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1601875546/product-jpeg-500x500_z04c43.jpg' },]
    }
];

// get sum of price prop across all objects in array


function GroupShop() {

    const [itemState, setItemState] = useState(items);
    const [merchantState, setMerchantState] = useState(merchant);
    const { width, height } = useWindowSize()
    const router = useRouter()

    useEffect(() => {
        if (itemState) {

        }
    }, [itemState]);


    const linkToPageOrder = () => {
        router.push('/order')
    }



    return (
        <div>
            <MerchantName
                type={'Paper'}
                image={merchantState.image}
                imageAlt={merchantState.alt}
                merchantName={merchantState.name}
            />
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
                                    <Grid item xs={12}>
                                        <Typography variant='body2' style={{ color: MainText }} >Item List</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {item.item && item.item.map((list, index: number) => (
                                            <div key={index}>
                                                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                                                    <Grid item xs={6}>
                                                        <CardMedia
                                                            component="img"
                                                            alt={list.image}
                                                            image={list.image}
                                                            title={list.image}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Typography variant='h6' style={{ color: SubText }}>{list.item}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        ))}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div> <List aria-label="SPACEing" style={{padding:0}}/></div>
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
                                            CHECK LIST
                                <ArrowForwardIosIcon fontSize='small' />

                                        </Fab>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div> <List aria-label="SPACEing" style={{padding:0}}/></div>
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
