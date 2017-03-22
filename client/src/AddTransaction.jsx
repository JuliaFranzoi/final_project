import React from 'react'

var AddTransaction = React.createClass({
  
  handleButtonClick: function(event){
    var whereText = document.getElementById("name")
    var valueText = document.getElementById("value")
    var dateText = document.getElementById("date")
    var tagText = document.getElementById("tag")
    console.log(whereText.value)

    var newTransaction = {
      where: whereText.value,
      value: valueText.value,
      date: dateText.value,
      tag: tagText.value
    }
    console.log(newTransaction)
    this.makePostRequest(this.props.updateTransactions, JSON.stringify(newTransaction))
  },

  makePostRequest: function(callback, newTransaction){
    var url = 'http://localhost:3000/transactions'
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader('Content-type', "application/json");
    request.onload = callback;//what to do with the new transaction
    request.send(newTransaction);
  },
  

  render:function(){
    return(
      <div id="addTransactions">
      <label>Where </label>
      <input type="text" id="name"/>
      
      <label>Value </label>
      <input type="number" id="value"/>
     
      <label>Date </label>
      <input type="text" id="date"/>
      
      <label>Tag</label>
      <input type="text" id="tag"/>
      <br></br>
      
      <button onClick={this.handleButtonClick}>Add Transaction</button>
      </div>
      )
  }
  
})


export default AddTransaction