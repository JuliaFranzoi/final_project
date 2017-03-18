import React from 'react'


var TagSelect = React.createClass({
  getInitialState: function(){
    return{transactions: [], default:"disabled"}

  },

  createOptions: function(){
    var tagOptions= [];
    for (var index in this.props.transactions){
      tagOptions.push(this.props.transactions[index].tag)
      console.log(tagOptions)
    }
    console.log(tagOptions)


  var optionTags = tagOptions.map(function(tagOption, index){
    return(<option value={tagOption} key={index}>{tagOption}</option>)

})
    this.setState({optionTags});

  },

  handleSelectChange: function(event){
    var selectedHair = event.target.value;
    this.setState({default: event.target.value});
  },

  componentWillMount: function(){
    this.createOptions();
  },
  
  render: function(){
      return (
        <div id="selectBoxes">
          <select value={this.state.default} onChange={this.handleSelectChange}>
            <option value="disabled" disabled>Pick a tag</option>
            {this.state.optionTags}
          </select>
        </div>
      )
    }
  })

export default TagSelect