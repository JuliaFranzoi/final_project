import React from 'react'
import DisplayTransactions from './DisplayTransactions'
import SelectOptions from './SelectOptions'
import CalculateTotal from './CalculateTotal'
import AddTransaction from './AddTransaction'
import Budget from './Budget'


var Main = React.createClass({
  getInitialState: function(){
    return { transactions: [], displayTransactions: []};
  },

  componentDidMount: function(){
    this.makeRequest()
    // setState
  },

  makeRequest: function() {
    console.log("Make request being called");
    var url = 'http://localhost:3000/transactions'
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState({
        transactions: data,
        displayTransactions: data
      })
    }.bind(this)
    request.send()
  },

  showAllTransactions: function () {
    var allTransactions = this.state.transactions
    this.setState({displayTransactions: allTransactions})
  },

  displayTransactions: function(filteredTransactions) {
    console.log(filteredTransactions)
    this.setState({displayTransactions: filteredTransactions})
  },

  render: function(){
    return (
      <div>
        <h1>CashBoard</h1>
        <h2>Your Transactions</h2>
        <Budget transactions={this.state.transactions} />
        <AddTransaction updateTransactions={this.makeRequest}/>
        <SelectOptions transactions={this.state.displayTransactions} displayTransactions={this.displayTransactions} allTransactions={this.showAllTransactions}/>
        <DisplayTransactions transactions={this.state.displayTransactions}/>
        <CalculateTotal transactions={this.state.displayTransactions} type="Selected"/>
        <CalculateTotal transactions={this.state.transactions} type="All"/>
        
      </div>
      );  
  }
});

  




export default Main