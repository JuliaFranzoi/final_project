import React from 'react'

var SelectOptions = React.createClass({
  

  getInitialState: function(){
    return{tagCategory: null, tagValue: null}
  },


  handleFirstSelectChange: function(event){
    var tagCategory = event.target.value;
    this.setState({tagCategory});
    
  },

 handleSecondSelectChange: function(event){
   var tagValue= event.target.value;
   this.setState({tagValue});
 }, 

 createOptions: function(){
   var tagValues = this.props.transactions.map(function(transaction){
    return(transaction[this.State.tagCategory])
   });
   console.log('values', tagValues)
 
   var unique = tagValues.filter(function(tagValue,i,array){return(array.indexOf(tagValue)===i)
   })
   var options = unique.map(function(tagValue, i){return(
    <option key={i} value={tagValue}>{tagValue}</option>)
 });
   return options;
 },


 getCategories: function(){
  var properties = Object.keys(this.props.transactions[0]);
  
  var propertyOptions = properties.map(function(property, index){return (<option value={property} key={index}>{property}</option>)
    });
  console.log('properties', properties)
  return propertyOptions
 },


  render: function(){
    return(
      <div id="select-tag">
        <select id="category select" onChange={this.handleFirstSelectChange}>
        <option>Select by Category</option>
        {this.getCategories()}
        </select>


        </div>
      )
  }
})

export default SelectOptions