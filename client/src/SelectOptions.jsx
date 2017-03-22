import React from 'react'

var SelectOptions = React.createClass({
  

  getInitialState: function(){
    return{tagCategory: null, tagValue: null}
  },

  showAllButtonClick: function(event) {
    this.props.allTransactions()
  },

  filterButtonClick: function(event){
    console.log("filter button clicked")
    var filtered = [];
    var value = this.state.tagValue;
    var category = this.state.tagCategory;
    this.props.transactions.forEach(function(transaction) {
      if (transaction[category] === value) {
        filtered.push(transaction)
      }
    });
    console.log(filtered)
    this.props.displayTransactions(filtered) 
  },


  handleFirstSelectChange: function(event){
    var tagCategory = event.target.value;
    this.setState({tagCategory: tagCategory});
    
  },

 handleSecondSelectChange: function(event){
   var tagValue = event.target.value;
   this.setState({tagValue: tagValue});
 }, 

 createOptions: function(){
   var tagValues = this.props.transactions.map(function(transaction){
    return(transaction[this.state.tagCategory])
   }.bind(this));
   console.log('values', tagValues)
 
   var unique = tagValues.filter(function(tagValue,i,array){return(array.indexOf(tagValue)===i)
   })
   var options = unique.map(function(tagValue, i){return(
    <option key={i} value={tagValue}>{tagValue}</option>)
 });
   return options;
 },



  render: function(){
    if(this.props.transactions.length === 0) {
      return (
        <p>Loading</p>
      )
    }
    return(
      <div id="select-tag">
        <button onClick={this.showAllButtonClick}>Show all</button>
        <br></br>
        <select id="category select" onChange={this.handleFirstSelectChange}>
        <option>Select by Category</option>
        <option>tag</option>
        <option>date</option>
        <option>where</option>
        </select>
        
        <select id="value select" onChange={this.handleSecondSelectChange}>
        <option>Select by value</option>
        {this.createOptions()}
        </select>

        <button onClick={this.filterButtonClick}>filter</button> 
        </div>
      )
  }
})

export default SelectOptions