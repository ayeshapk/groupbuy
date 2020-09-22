import { Button, Fab, Paper, Typography } from '@material-ui/core';
import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';

import { useRouter, Router } from 'next/router'
const MainText = '#A60321';
const SubText = '#2678BF';
const ListText = '#D2D2D2';
let items = [
    {
        id: 0, name: 'Demo SHOP',
        groupList: [
            {
                id: 0,
                group: 'Drink',
                item: [{ id: 0, item: 'coke', }, { id: 1, item: 'pepsi', }, { id: 2, item: '7 Up', }, { id: 2, item: 'fanta', }]
            },
        ]
    },
    {
        id: 1, name: 'Jane Doe Shop',
        groupList: [
            {
                id: 0,
                group: 'Drink And Vegetable',
                item: [{ id: 0, item: 'Chinese pomfret', }, { id: 1, item: 'brown mushroom', }, { id: 2, item: 'CocaCola 1.25 L', },]
            },
            {
                id: 1,
                group: 'Cold storage',
                item: [{ id: 0, item: 'salmon fillet', }, { id: 1, item: 'kembongg fish', }, { id: 2, item: 'oyster mushroom', }, { id: 2, item: 'tiger prawn ', }]
            },
            {
                id: 2,
                group: 'Everyday food',
                item: [{ id: 0, item: 'Javanese belacan', }, { id: 1, item: 'lime', }, { id: 2, item: 'Authentic Japanese sweet potato', }, { id: 3, item: 'Coriander', }, { id: 4, item: 'Cauliflower', }]
            },
        ]
    },
    {
        id: 2, name: 'KingCrap Shop',
        groupList: [
            {
                id: 0,
                group: 'Soap',
                item: [{ id: 0, item: 'Lux', }, { id: 1, item: 'Protect', }, { id: 2, item: 'Detol', },]
            },
            {
                id: 1,
                group: 'Cold storage',
                item: [{ id: 0, item: 'Batang fillet', }, { id: 1, item: 'fresh baby sotong', }, { id: 2, item: 'Tiger prawns', }, { id: 3, item: 'French bean ', }]
            },
        ]
    },
];

// get sum of price prop across all objects in array


function GroupList() {

    const [itemState, setItemState] = useState(items);
    const { width, height } = useWindowSize()
    const router = useRouter()

    useEffect(() => {
        if (itemState) {

        }
    }, [itemState]);


    const linkToPageGroupShop = () =>{
        router.push('/groupshop')
    }


    return (
        <div>
            {
                itemState && itemState.map((shop, index: number) => (
                    <Paper variant="outlined" key={index} style={{ margin: '10px' }} >
                        <div style={{ margin: '10px' }}>

                            <Fab
                                style={{ float: 'right' ,backgroundColor:'#F26D85',color:'white'}}
                                variant="extended"
                                size="small"
                                aria-label="add"
                                onClick={linkToPageGroupShop}
                            >
                                JOIN GROUP
                                <ArrowForwardIosIcon fontSize='small'/>

        </Fab>



                            <Typography variant='h6' style={{ color: MainText }}>{shop.name}</Typography>
                            {shop.groupList && <Typography variant='caption' style={{ color: ListText }}>GroupList</Typography>}
                            {shop.groupList && shop.groupList.map((groupListitem, index: number) => (
                                <div key={index}>
                                    <Typography style={{ color: MainText }} variant='body1'> {groupListitem.group}</Typography>
                                    {groupListitem.item && groupListitem.item.map((goods, index: number) => (
                                        <div key={index}>
                                            <Typography style={{ color: SubText, textIndent: '20px' }} variant='body2'>{goods.item}</Typography>
                                        </div>))}
                                </div>))}
                        </div>
                    </Paper>))}
        </div >
    );

}



export default GroupList;
