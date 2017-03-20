import React from 'react'
import DisplayTransactions from './DisplayTransactions'
import SelectOptions from './SelectOptions'
import CalculateTotal from './CalculateTotal'

var Main = React.createClass({
  getInitialState: function(){
    return {transactions: [],
            filteredTransactions: []};
  },

  componentDidMount: function(){
    var url = 'http://localhost:3000/transactions'
    



    // setState
  },

  filterTransactions: function(filteredTransactions) {
    console.log(filteredTransactions)
    this.setState({transactions: filteredTransactions})
  },

  render: function(){
    return (
      <div>
        <h1>CashBoard</h1>
        <CalculateTotal transactions={this.state.transactions}/>
        <DisplayTransactions transactions={this.state.transactions}/>
        <SelectOptions transactions={this.state.transactions} filterTransactions={this.filterTransactions}/>
      </div>
      );  
  }
});

  




export default Main