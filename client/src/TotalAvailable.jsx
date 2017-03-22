import React from 'react'
import calculateTotal from './CalculateTotal'


var TotalAvailable = function(props){
  var previousAmount = null;
  var totalAvailable = previousAmount - props.total 

    return (<div id= "totalAvaiableDiv">
      <p> Total Available: £{totalAvailable} </p>
      </div>
      );

  }

export default TotalAvailable