/**
 * Created by m853684 on 6/11/17.
 */
import React from 'react';

export const StockForm = (props)=> (
    <div className="">
    <form id="portfolio" name="portfolio" onSubmit={props.handleFormSubmit}>
        <div className="row form-group nopadding">
            <div className="col-md-3 nopadding">
                <input type="text" className="form-control" id="stock-symbol" placeholder="Symbol" required value={props.currentStockName} onChange={props.handleNameChange}/>
            </div>
            <div className="col-md-2 nopadding">

                <input type="text" className="form-control" id="stock-price" placeholder="Price" required value={props.currentStockPrice} onChange={props.handlePriceChange}/>
            </div>
            <div className="col-md-2 nopadding">

                <input type="text" className="form-control" id="stock-qty" placeholder="Qty" required value={props.currentStockQuantity} onChange={props.handleQtyChange}/>
            </div>
            <div className="col-md-3 nopadding">
                <div className="form-group">
                    <input type="text" id="stock-datepicker" className="form-control" placeholder="DD/MM/YYYY" value={props.currentStockDateTime} onChange={props.handleDateChange}/>
                </div>
            </div>
            <div className="col-md-1 nopadding">
                <button type="submit" className="btn btn-default" id="submit">
                    <span className="glyphicon glyphicon-plus"></span>
                </button>
            </div>
        </div>

    </form>
    </div>
)