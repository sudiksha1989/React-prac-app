import React from 'react';
import {Panel,ListGroup,ListGroupItem}  from 'react-bootstrap'
import './AvailPeriods.css'
import SelectedPeriod from './SelectedPeriod'

class AvailPeriods extends React.Component{

  constructor(props){
    super(props);
    this.state={
      option:[{item:'item1',value:'item1'},
              {item:'item2',value:'item2'},
              {item:'item3',value:'item3'},
              {item:'item4',value:'item4'},
              {item:'item5',value:'item5'},
              {item:'item6',value:'item6'},
              {item:'item7',value:'item7'},
              {item:'item8',value:'item8'},
              {item:'item9',value:'item9'},
              {item:'item10',value:'item10'},
              {item:'item11',value:'item11'}
            ],
          selectedval:''}

          this.selectedperiod=this.selectedperiod.bind(this)
  }
  handleChange(e) {
        var array = [...this.state.option];
        this.setState({selectedval:e.target.value})
        array.forEach((val,index)=>{
          if(e.target.value===val.item)
                array.splice(index,1);
          })
                     //   {return ()})
        
        this.setState({option:array});
        console.log('You have clicked on me----')
      }

      createOptions(){
          this.optionItems=this.state.option.map((arr)=><option value={arr.item}
          
          
          
          
          
          
          
          onClick={this.handleChange.bind(this)}>{arr.value}</option>)
            return(this.optionItems)
      }
      selectedperiod(){
        this.setState({ greetings: [...this.state.greetings, newName] });
      }

    render(){
          return(
            <Panel >
                <Panel.Heading >Available Periods</Panel.Heading>
                     <select multiple className='form-control' >
                          <SelectedPeriod selectedperiod={this.selectedperiod}/>
                           {this.createOptions()}
                     </select>
               </Panel>
          )
      }




    


}

export default AvailPeriods;