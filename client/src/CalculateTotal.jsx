import React from 'react'
import TotalAvailable from './TotalAvailable'


var CalculateTotal = function(props){
  var total = null; 
  
  props.transactions.forEach(function(transaction, index){
    total+=transaction.value;

    return (<div key={index} id= "totalDiv">
      <p value={total}> {total} </p>
      </div>
      );

  })

  return(
    <div id="totalDiv">
      <p> Total for Filters Selected</p>
      {total}
      <TotalAvailable total={total} />

 
    </div>
    )
}
export default CalculateTotal