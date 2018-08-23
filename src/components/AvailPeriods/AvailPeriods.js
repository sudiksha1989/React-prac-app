import React from 'react';
import {Panel,ListGroup,ListGroupItem}  from 'react-bootstrap'
import './AvailPeriods.css'

class AvailPeriods extends React.Component{
    handleClick() {
        alert('You have clicked on me');
      }
    render(){
          return(
            <Panel >
                <Panel.Heading >Available Periods</Panel.Heading>
               <div className='panel-display'>
                     <ListGroup >
                        <ListGroupItem >Item 1</ListGroupItem>
                        <ListGroupItem >Item 2</ListGroupItem>
                        <ListGroupItem >Item 3</ListGroupItem>
                        <ListGroupItem >Item 1</ListGroupItem>
                        <ListGroupItem >Item 2</ListGroupItem>
                        <ListGroupItem >Item 3</ListGroupItem>
                        <ListGroupItem >Item 1</ListGroupItem>
                        <ListGroupItem >Item 2</ListGroupItem>
                        <ListGroupItem >Item 3</ListGroupItem>
                        <ListGroupItem >Item 1</ListGroupItem>
                        <ListGroupItem >Item 2</ListGroupItem>
                        <ListGroupItem >Item 3</ListGroupItem>
                    </ListGroup>
                    </div>
            </Panel>
          )
      }




    


}

export default AvailPeriods;