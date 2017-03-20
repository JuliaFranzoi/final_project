import React from 'react'
import DisplayTransactions from './DisplayTransactions'
import SelectOptions from './SelectOptions'
import CalculateTotal from './CalculateTotal'


var Main = React.createClass({
  getInitialState: function(){
    return {transactions: [], displayTransactions: []};
  },

  componentDidMount: function(){
    var url = 'http://localhost:3000/transactions'
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState({
        transactions: data
      })

    }.bind(this)
    request.send()
    // setState
  },

  displayTransactions: function(filteredTransactions) {
    console.log(filteredTransactions)
    this.setState({displayTransactions: filteredTransactions})
  },

  render: function(){
    return (
      <div>
        <h1>CashBoard</h1>
        <CalculateTotal transactions={this.state.displayTransactions}/>
        <DisplayTransactions transactions={this.state.displayTransactions}/>
        <SelectOptions transactions={this.state.transactions} displayTransactions={this.displayTransactions}/>
      </div>
      );  
  }
});

  




export default Main