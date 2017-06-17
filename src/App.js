import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

import {StockForm,StockResults} from './components/Stock';

import {addStock} from './lib/StockHelpers'

class App extends Component {

    state = {
        currentStockName:"",
        currentStockPrice:"",
        currentStockQuantity:"",
        currentStockDateTime:"",
        stocksArr:[
        ]}
    componentWillMount(){
        // console.log(("getting",sessionStorage.state));
        // if(typeof sessionStorage.state!="undefined"){
        //     this.setState({currentStockName:sessionStorage.state.currentStockName});
        //     this.setState({currentStockPrice:sessionStorage.state.currentStockPrice});
        //     this.setState({currentStockQuantity:sessionStorage.state.currentStockQuantity});
        //     this.setState({currentStockDateTime:sessionStorage.state.currentStockDateTime});
        //     this.setState({stocksArr:sessionStorage.state.stocksArr});
        // }

    }

    handleNameChange = (evt) =>{

        this.setState({currentStockName:evt.target.value})

   }
    handlePriceChange=(evt)=>{

        this.setState({currentStockPrice:evt.target.value})

    }
    handleQtyChange=(evt)=>{

        this.setState({currentStockQuantity:evt.target.value})

    }
    handleDateChange=(evt)=>{

        this.setState({currentStockDateTime:evt.target.value})

    }
    handleFormSubmit=(evt)=>{
        evt.preventDefault();
        const newStock={
            id:this.state.stocksArr.length+1,
            name:this.state.currentStockName,
            price:this.state.currentStockPrice,
            quantity:this.state.currentStockQuantity,
            purchasePrice:this.state.currentStockQuantity*this.state.currentStockPrice,
            dateTime:this.state.currentStockDateTime
        }
        addStock(this.state.stocksArr,newStock).then(newStocksArr=>this.setState({stocksArr:newStocksArr,currentStockName:"",currentStockPrice:"",currentStockQuantity:"",currentStockDateTime:""}));
       
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Stock Portfolio App !!</h2>
        </div>
        <div className="App-intro ">
          <StockForm currentStockName={this.state.currentStockName} currentStockPrice={this.state.currentStockPrice} currentStockQuantity={this.state.currentStockQuantity} currentStockDateTime={this.state.currentStockDateTime}
                     handleNameChange={this.handleNameChange} handlePriceChange={this.handlePriceChange} handleQtyChange={this.handleQtyChange} handleDateChange={this.handleDateChange}
          handleFormSubmit={this.handleFormSubmit}/>
            <div id="results">

                <StockResults stocksArr={this.state.stocksArr}/>



            </div>
        </div>
      </div>
    );
  }
}

export default App;
