import React from 'react'
import DisplayTransactions from './DisplayTransactions'
import SelectOptions from './SelectOptions'




var Main = React.createClass({
  getInitialState: function(){
    return {transactions :[ 
  {where: "Freud", value: 6.00, date:"24/03", tag: "supermarket"},
  {where: "boots", value: 7.00, date:"23/03", tag: "pharmacy"},
  {where: "boots", value: 8.00, date:"23/03", tag: "pharmacy"},
  {where: "coop", value: 8.00, date:"25/03", tag: "supermarket"},
  ]}
  },

  render: function(){
    return (
      <div>
        <h1>budget</h1>
        
        <DisplayTransactions transactions={this.state.transactions}/>
        <SelectOptions transactions={this.state.transactions}/>
      </div>
      );  
  }
});

  




export default Main