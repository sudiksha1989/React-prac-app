import React from 'react';
import {DropdownButton,MenuItem,ButtonToolbar}  from 'react-bootstrap'



class PeriodType extends React.Component{
constructor(props){
  super(props)
  this.state={
    error:null,
    isLoaded:false,
    period:[],
    button:'Period Type'
  }
}

componentDidMount(){
  fetch('../../../api/periodTypes.json')
  .then(res=>res.json())
  .then((result)=>{
    
    result.periodTypes.map((item)=>{
      this.state.period.push(item.name)
    })
    this.setState({isLoaded:true})
  })

}
handleUpdate(event){
  console.log(event)
  this.setState({button:event})
  this.props.callback(event)
}


render() {
  
  if(this.state.isLoaded==true){
    var  listItems = this.state.period.map((val) =>
    <MenuItem eventKey={val}>{val}</MenuItem>
    );
  }
  
  return (
      <ButtonToolbar >
        <DropdownButton onSelect={this.handleUpdate.bind(this)}
          title={this.state.button}>
           {listItems}
        </DropdownButton>
     </ButtonToolbar>
   );
}}

export default PeriodType
