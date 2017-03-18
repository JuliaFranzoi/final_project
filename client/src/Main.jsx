import React from 'react'
import DisplayTransactions from './DisplayTransactions'
import TagSelect from './TagSelect'




var Main = React.createClass({
  getInitialState: function(){
    return {transactions :[ 
  {where: "Freud", value: 5.00, date:"24/03", tag: "supermarket"}]}
  },


  render: function(){
    return (
      <div>
        <h1>budget</h1>
        <DisplayTransactions transactions={this.state.transactions}/>
        <TagSelect transactions={this.state.transactions}/>
      </div>
      );  
  }
});

  




export default Main