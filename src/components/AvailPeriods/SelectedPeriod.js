import React from 'react';
import {Panel,ListGroup,ListGroupItem}  from 'react-bootstrap'
import './AvailPeriods.css'


class SelectedPeriod extends React.Component{
    handleClick() {
        alert('You have clicked on me');
      }
    render(){
          return(
            <Panel >
                <Panel.Heading >Selected Periods</Panel.Heading>
                     <select multiple className='form-control'>
                         
                     </select>
               </Panel>
          )
      }




    


}

export default SelectedPeriod;