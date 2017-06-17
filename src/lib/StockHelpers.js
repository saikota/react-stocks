/**
 * Created by m853684 on 6/11/17.
 */


import fetchJsonp from 'fetch-jsonp'
var baseUrl="http://finance.google.com/finance/info?q=";
export const addStock=  (list,stock)=> {

    baseUrl=`http://finance.google.com/finance/info?q=NASDAQ:${stock.name}`;

     return fetchJsonp(baseUrl)
        .then(function(response) {
            return response.json()
        }).then(function(data){

           // var stockArr=JSON.parse(res.text().substring(3));

            stock.currentPrice=data[0].l;
            stock.currentTotal=parseInt(data[0].l,10)*stock.quantity;
            if(parseInt(data[0].c_fix,10)>0){
                stock.change="stock-up"
            }else{
                stock.change="stock-down"
            }
            return [...list, stock]

        },function(){
             console.log("invalid stock entry");
             return [...list]
         })






};