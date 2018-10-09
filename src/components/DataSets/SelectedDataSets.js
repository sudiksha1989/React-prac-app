import React from 'react';
import {Panel}  from 'react-bootstrap'
import './style.css'

let array=[]
class SelectedPeriod extends React.Component{
    constructor(props){
        super(props);
        this.state={
          option:[]}
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
        console.log("-------------"+this.props.availPeiod)
        this.state.option.push()
      /*  array.push(this.props.selectValue);
        array = array.filter(function( element ) {
            return element !== undefined;
         });*/

         if(this.props.availPeiod.length!=0)
         {
             this.props.availPeiod.map((arr)=>this.state.option.push(arr))
         }
       //  this.state.option.push(this.props.availPeiod)

         var optionItems= this.state.option.map((arr)=><option value={arr} onClick={this.handleUpdate.bind(this)}>{arr}</option>)         
         
           return(
            <Panel >
                <Panel.Heading >Selected DataSets</Panel.Heading>
                     <select multiple className='form-control' onChange={this.props.handleSelPeriods}>
                         {optionItems}
                     </select>
               </Panel>
          )
      }




    


}

export default SelectedPeriod;