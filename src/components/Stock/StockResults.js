/**
 * Created by m853684 on 6/11/17.
 */
import React from 'react';
import {StockItem} from './StockItem'

export const StockResults = (props) =>(
    <div>
        <ul className="container results pull-left">
            { props.stocksArr.map( stock =>
               <StockItem key={stock.id} {...stock} ></StockItem>
            )
            }

        </ul>
    </div>
)