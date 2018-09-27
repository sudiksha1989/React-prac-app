import React from 'react';
import {Panel,ListGroup,ListGroupItem}  from 'react-bootstrap'
import './AvailPeriods.css'

let array=[]
class SelectedPeriod extends React.Component{
   
 render(){
        console.log("-------------"+this.props.selectValue)
        array.push(this.props.selectValue);
        array = array.filter(function( element ) {
            return element !== undefined;
         });
        var optionItems=array.map((arr)=>
        <option value={arr}>{arr}</option>)
           return(
            <Panel >
                <Panel.Heading >Selected Periods</Panel.Heading>
                     <select multiple className='form-control'>
                         {optionItems}
                     </select>
               </Panel>
          )
      }




    


}

export default SelectedPeriod;