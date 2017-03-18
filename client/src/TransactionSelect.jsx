import React from 'react'

var TransactionSelect = React.createClass({
  getInitialState: function(){
    return{default:"disable", transactionOptionTags: []}
  },

  createOptions:function(){
    var optionTags = this.props.transactions.map(function(transaction, index){
      return(<option value={transaction.value} key={index}>{transaction.value}</option>)
    })
    this.setState({transactionOptionTags: OptionTags}); 
  },

  componentWillMount: function(){
    this.createOptions();
  },

  handleOnChange: function(event){
    this.setState({default: event.target.value});
    this.props.handleTransactionSelected("transaction", event.target.value)
  },

  render: function(){
    return(
      <div id="select">
      <select value={this.state.default} onChange={this.handleOnChange}>
       <option value="disabled", disabled>Select a transaction</option> 
       {this.state.transactionOptionTags}
       </select>
       </div>
      )
  }

})
export default TransactionSlect