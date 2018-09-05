import React from 'react';
import {Panel,ListGroup,ListGroupItem}  from 'react-bootstrap'
import './AvailPeriods.css'


class AvailPeriods extends React.Component{

  constructor(props){
    super(props);
    this.state={
      option:[{item:'item1',value:'item13'},
              {item:'item2',value:'item14'},
              {item:'item3',value:'item155'},
              {item:'item4',value:'item145'},
              {item:'item5',value:'item15'},
              {item:'item6',value:'item145'},
              {item:'item7',value:'item145'},
              {item:'item8',value:'item145'},
              {item:'item9',value:'item19'},
              {item:'item10',value:'item10'},
              {item:'item11',value:'item11'}
            ]}

  }
  handleChange(event) {
        console.log('You have clicked on me----'+event.target.value)
      }

      createOptions(){
          this.optionItems=this.state.option.map((arr)=><option value={arr.item}>{arr.value}</option>)
            return(this.optionItems)
      }


    render(){
          return(
            <Panel >
                <Panel.Heading >Available Periods</Panel.Heading>
                     <select multiple className='form-control' onChange={this.handleChange}>
                           {this.createOptions()}
                     </select>
               </Panel>
          )
      }




    


}

export default AvailPeriods;