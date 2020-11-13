
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Button, CardMedia, Fab, Grid, List, Paper, Typography } from '@material-ui/core';
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

let creater = [
    {
        id: 0, groupName: 'Drink', description: 'Storage 2-3 day in chiller',
        location: `1°20'48.0"N 103°57'21.7"E 132 Simei Street 1, Block 132`, limit: '16 September', collect: '17 Septemper',
        item: [
            { id: 0, name: 'coke', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851614/001397056_qsr44y.jpg', price: 15, amount: 3, Description: 'lipsum adadada fasdgfasdgraesd gedagdfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 16 },
            { id: 1, name: 'pepsi', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851613/172935e5ab484423dd674574b205a77d_whbquq.jpg', price: 22, amount: 2, Description: 'lipsum adadada fasdgfasdgraesdgeda gdfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 25 },
            { id: 2, name: '7up', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851614/71wN2KS-i1L._SL1500__qahrbm.jpg', price: 16, amount: 1, Description: 'lipsum adadada fasdgfasdgraesdgedag dfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 18 },
            { id: 3, name: 'fanta', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1600851613/c47555d95d284d6de5abeaf1049b0474b53b906c-large_ptsrtr.jpg', price: 30, amount: 0, Description: 'lipsum adadada fasdgfasdgra esdgedagdfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 31 }
        ]
    },
    {
        id: 1, groupName: 'Vegetable', description: 'Storage 2-3 day in chiller',
        location: `1°20'48.0"N 103°57'21.7"E 132 Simei Street 1, Block 132`, limit: '16 September', collect: '17 Septemper',
        item: [
            { id: 0, name: 'Chinese pomfret', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1601875546/IMG_9641_copy_grande_bts0yp.webp', price: 15, amount: 3, Description: 'lipsum adadada fasdgfasdgraesd gedagdfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 16 },
            { id: 1, name: 'brown mushroom', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1601875547/0000020985646_hgcsbe.webp', price: 22, amount: 2, Description: 'lipsum adadada fasdgfasdgraesdgeda gdfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 25 },
            { id: 2, name: 'oyster mushroom', image: 'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1601875546/product-jpeg-500x500_z04c43.jpg', price: 16, amount: 1, Description: 'lipsum adadada fasdgfasdgraesdgedag dfgbhd fdhrfht rhrhrhtrdhserhe. asfdawsfasfdsafasf.', retailPrice: 18 },
        ]
    }
];

// get sum of price prop across all objects in array


function CreaterShopContainer() {

    const [itemState, setItemState] = useState(creater);
    const { width, height } = useWindowSize()
    const router = useRouter()
    const [expanded, setExpanded] = React.useState<number | false>(0);
    useEffect(() => {
        if (itemState) {

        }
    }, [itemState]);


    const linkToPage = (pagename: string) => {
        router.push('/' + pagename)
    }

    const handleChange = (panel: number) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
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
                                    <Typography variant='caption' color='secondary' >End:{groupList.limit}</Typography>
                                </Grid>
                                <Grid item xs={12} style={{ margin: '0 auto' }}>
                                    <Typography variant='caption' color='secondary' >Collect Time:{groupList.collect}</Typography>
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

                                <Button color='primary' variant="contained" fullWidth style={{ width: '97%', color: 'white' }}> +</Button>
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

        </div >
    );

}



export default CreaterShopContainer;
