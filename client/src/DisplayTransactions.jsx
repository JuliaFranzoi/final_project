import React from 'react'


var DisplayTransactions = function(props){

  if (props.transactions === null) {
    return (
      <div>
        <p>Please make a choice</p>
      </div>
    )
    
  } else {
    var displayData = props.transactions.map(function(transaction, index){
      return (<div key={index} id= "transactionBox">
        <p>£{transaction.value}  {transaction.date}  {transaction.where}  {transaction.tag}</p>
        </div>
        );
    })

    return (
      <div id="transactionDiv">
        {displayData}
      </div>
    )
    
  }
  

  
    
    
}
export default DisplayTransactions