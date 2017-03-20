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
      return (<div key={index} id= "transactionDiv">
        <p>{transaction.value} {transaction.date} {transaction.tag}</p>
        </div>
        );
    })

    return (
      <div id="transactionBox">
        {displayData}
      </div>
    )
    
  }
  

  
    
    
}
export default DisplayTransactions