import React from 'react'


var CalculateTotal = function(props){
  var total = null; 
  props.transactions.forEach(function(transaction, index){
    total+=transaction.value;

    return (<div id= "totalDiv">
      <p key={index} value={total}>{total}</p>
      </div>
      );

  })

  return(
    <div id="totalDiv">
      {total}
    </div>
    )
}
export default CalculateTotal