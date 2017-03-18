import React from 'react'


var DisplayTransactions = function(props){

  var displayData = props.transactions.map(function(transaction, index){
    return (<div id= "transactionDiv">
      <p key={index}>{transaction.value} {transaction.date} {transaction.tag}</p>
      </div>
      );
  })

  return(
    <div id="transactionBox">
      {displayData}
    </div>
    )
}
export default DisplayTransactions