import React from 'react'
import DisplayTransactions from './DisplayTransactions'
import TagSelect from './TagSelect'




var Main = React.createClass({
  getInitialState: function(){
    return {transactions :[ 
  {where: "Freud", value: 5.00, date:"24/03", tag: "supermarket"},
  {where: "boots", value: 5.00, date:"24/03", tag: "pharmacy"}]
}
},

  render: function(){
    return (
      <div>
        <h1>budget</h1>
        <h3>Display Transactions</h3>
        <DisplayTransactions transactions={this.state.transactions}/>
        <TagSelect transactions={this.state.transactions}/>
      </div>
      );  
  }
});

  




export default Main