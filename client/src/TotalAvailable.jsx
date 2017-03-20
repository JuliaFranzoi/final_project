import React from 'react'
import calculateTotal from './CalculateTotal'


var TotalAvailable = function(props){
  var previousAmount = 20;
  var totalAvailable = previousAmount - props.total 

    return (<div id= "totalAvaiableDiv">
      <p> Total Available </p>
      <p value={totalAvailable}> {totalAvailable} </p>
      </div>
      );

  }

export default TotalAvailable