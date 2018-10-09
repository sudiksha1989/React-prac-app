import React from 'react';
import {Panel,ListGroup,ListGroupItem}  from 'react-bootstrap'
import './style.css'
import PropTypes from 'prop-types';

class AvailPeriods extends React.Component{

  constructor(props){
    super(props);
    this.state={
      option:['item1','item2','item3','item4','item5','item6','item7','item8','item9','item10','item11']
     }

      
      
      }
 
    getContent(event){
          var array = [...this.state.option];
          array.forEach((val,index)=>{
            if(event.target.value===val)
                  array.splice(index,1);
            })
          this.setState({option:array});
          this.props.callback(event.target.value)
      }

     
    render(){
     if(this.props.AvailPeriods!=null)
       this.state.option.push(this.props.AvailPeriods);
        
     

      
      var optionItems=this.state.option.map((arr)=>
      <option value={arr}>{arr}</option>)
      return(
            <Panel>
                <Panel.Heading >Available Periods</Panel.Heading>
                     <select multiple className='form-control' onChange={this.getContent.bind(this)}>
                        {optionItems}
                     </select>
               </Panel>
          )
      }




  

}

AvailPeriods.protoTypes = {
  callback : PropTypes.func
  } 

export default AvailPeriods;