import { Paper, Typography } from '@material-ui/core';
import React from 'react'

import { useState, useEffect } from 'react';
import useWindowSize from '../HookServerData/Windowsize';

let items = [
    { id: 0, name: 'coke', price: 15, amount: 3 },
    { id: 1, name: 'pepsi', price: 22, amount: 2 },
    { id: 2, name: '7up', price: 16, amount: 1 },
    { id: 3, name: 'fanta', price: 30, amount: 0 }
];

// get sum of price prop across all objects in array


function OrdersDetail() {

    const [itemState, setItemState] = useState(items);
    const { width, height } = useWindowSize()
    const [totalPriceState, setTotalPriceState] = useState(0);

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



    return (
        <div>
            <p>TEST {width} x {height}</p>
            {
                itemState && itemState.map((item, index: number) => (
                    <Paper variant="outlined" key={index} style={{margin:'10px'}} >
                        <div>
                            <Typography>{item.name}</Typography>
                            <Typography>{item.price}</Typography>
                            <Typography>{item.amount}</Typography>
                        </div>
                    </Paper>
                ))
            }
            <p>Total :{totalPriceState} dollar </p>
        </div >
    );

}



export default OrdersDetail;
