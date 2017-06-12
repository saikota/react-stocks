/**
 * Created by m853684 on 6/11/17.
 */
import React from 'react';

export const StockItem=(props)=>(

    <li>
        <div className="row stock-row">
            <div>
                {props.name} / <span className="stock-fld">{props.quantity} * ${props.price}         = ${props.purchasePrice} </span> /         <span className="stock-fld">{props.dateTime}</span>
            </div>

           <span className={props.change+" stock-fld-detail text-mute price-change"} >${props.currentPrice}    /  ${props.currentTotal}</span>


        </div>
    </li>
)