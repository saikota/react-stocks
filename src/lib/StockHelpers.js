/**
 * Created by m853684 on 6/11/17.
 */

var baseUrl="http://finance.google.com/finance/info?q=";
export const addStock=  (list,stock)=> {

    baseUrl=`http://finance.google.com/finance/info?q=NASDAQ:${stock.name}`;
   return fetch(baseUrl)
        .then(res => {
            return (res.text());
        }).then(function(responseData) {
            var stockArr=JSON.parse(responseData.substring(3));
                stock.currentPrice=stockArr[0].l;
                stock.currentTotal=parseInt(stockArr[0].l)*stock.quantity;
           if(parseInt(stockArr[0].c_fix)>0){
               stock.change="stock-up"
           }else{
               stock.change="stock-down"
           }

           console.log(list,stock);
                return [...list, stock]
        }
        );




};