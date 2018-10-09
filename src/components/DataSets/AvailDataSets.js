import React from 'react';
import {Panel}  from 'react-bootstrap'
import './style.css'

class AvailPeriods extends React.Component{

  constructor(props){
    super(props);
    this.state={
      option:['item1','item2','item3','item4','item5','item6','item7','item8','item9','item10','item11']}
      }
  handleUpdate(e) {
        var array = [...this.state.option];
        this.setState({selectedval:e.target.value})
        array.forEach((val,index)=>{
          if(e.target.value===val)
                array.splice(index,1);
          })
        this.setState({option:array});
        }

     
    render(){
     if(this.props.selPeiod.length!=0)
       this.state.option.push(this.props.selPeiod);
        
      var optionItems=this.state.option.map((arr)=>
      <option value={arr} onClick={this.handleUpdate.bind(this)}>{arr}</option>)
      return(
            <Panel>
                <Panel.Heading >Available DataSets</Panel.Heading>
                     <select multiple className='form-control' onChange={this.props.handleAvailPeriods}>
                        {optionItems}
                     </select>
               </Panel>
          )
      }

}

export default AvailPeriods;