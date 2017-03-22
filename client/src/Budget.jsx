import React from 'react'
import calculateTotal from './CalculateTotal'


var Budget = React.createClass({

  getInitialState: function(){
    return {deposit:null, totalAvailable: 0}
  },

  calculateTotal: function(deposit){
    var total = 0; 
    
    this.props.transactions.forEach(function(transaction, index){
      total += transaction.value;
    })

    console.log(total)
    var newTotalAvailable = deposit - total
    this.setState({totalAvailable: newTotalAvailable});
  },

  budgetButtonClick: function(event){
    var budget = document.getElementById("budget");
    this.setState({deposit: parseFloat(budget.value)});

    this.calculateTotal(budget.value)
  },

  render:function(){
  return( 
    <div id="budgetDiv">
      <label>What's your budget? </label>
      <input type="number" id="budget"/>
      <button onClick={this.budgetButtonClick}> press me!</button>
      <br></br>
      <label>Total Available:</label>   {this.state.totalAvailable}
    </div>

    )}


})

export default Budget