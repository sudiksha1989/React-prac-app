import React from 'react';
import {Panel,ListGroup,ListGroupItem}  from 'react-bootstrap'


class AvailPeriods extends React.Component{
    handleClick() {
        alert('You have clicked on me');
      }
    render(){
          return(
            <Panel>
                <Panel.Heading >Available Periods</Panel.Heading>
                     <ListGroup >
                        <ListGroupItem className='btn'>Item 1</ListGroupItem>
                        <ListGroupItem className='btn'>Item 2</ListGroupItem>
                        <ListGroupItem className='btn'>Item 3</ListGroupItem>
                        <ListGroupItem className='btn'>Item 1</ListGroupItem>
                        <ListGroupItem className='btn'>Item 2</ListGroupItem>
                        <ListGroupItem className='btn'>Item 3</ListGroupItem>
                        <ListGroupItem className='btn'>Item 1</ListGroupItem>
                        <ListGroupItem className='btn'>Item 2</ListGroupItem>
                        <ListGroupItem className='btn'>Item 3</ListGroupItem>
                        <ListGroupItem className='btn'>Item 1</ListGroupItem>
                        <ListGroupItem className='btn'>Item 2</ListGroupItem>
                        <ListGroupItem className='btn'>Item 3</ListGroupItem>
                    </ListGroup>
                
            </Panel>
          )
      }




    


}

export default AvailPeriods;