import React from 'react'

var TagSelect = React.createClass({
  getInitialState: function(){
    return{transactions: [], default: "disabled"}
  },

  createOptions: function(){
    var tagOptions = [];
    for(var index in this.props.transactions){
      tagOptions.push(this.props.transactions[index].tag)
    }
    var optionTags = tagOptions.map(function(tagOption, index){
      return(<option valule={tagOption} key={index}>{tagOption}</option>)
    })
    this.setState({optionTags});
  },
  handleSelectChange: function(event){
    var selectedTag = event.target.value;
    this.setState({default:event.target.value});
  },
  componentWillMount: function(){
    this.createOptions();
  },

  render: function(){
    return(
      <div id="select">
        <select value={this.state.default} onChange={this.handleSelectChange}>
        <option value="disabled" disable>Select by Tag</option>
        {this.state.OptionTags}
        </select>
        </div>
      )
  }
})

export default TagSelect