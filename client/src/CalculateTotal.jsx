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

  if (props.type === "Selected") {
    return(
      <div id="totalDiv">
        <p> Total for Selected: £{total}</p>
      </div>
      )
  } else if (props.type === "All") {
    return (
      <div>
        <p>Total for all: £{total}</p>
      </div>
    )
    
  } else {
    return(
      <div>
        <p>Sorry something went wrong</p>
      </div>
    )
    
  }


  
}
export default CalculateTotal