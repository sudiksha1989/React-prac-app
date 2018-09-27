import React from 'react';
import {Panel,ListGroup,ListGroupItem}  from 'react-bootstrap'
import './AvailPeriods.css'

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
           
         
  }
  handleUpdate(e) {
        var array = [...this.state.option];
        this.setState({selectedval:e.target.value})
        array.forEach((val,index)=>{
          if(e.target.value===val.item)
                array.splice(index,1);
          })
        this.setState({option:array});
        this.setState({selectedval:e.target.value});
       }

     
    render(){


      var optionItems=this.state.option.map((arr)=>
      <option value={arr.item} onClick={this.handleUpdate.bind(this)}>{arr.value}</option>)




          return(
            <Panel >
                <Panel.Heading >Available Periods</Panel.Heading>
                     <select multiple className='form-control' onChange={this.props.handleOnChange}>
                     {optionItems}
                        
                     </select>
               </Panel>
          )
      }

}

export default AvailPeriods;