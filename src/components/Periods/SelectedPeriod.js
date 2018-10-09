import React from 'react';
import {Panel,LisoupItem}  from 'react-bootstrap'
import './style.css'

class SelectedPeriod extends React.Component{
    constructor(props){
        super(props);
         this.state={
          option:[]}
          }

    
        getcontent(event){
            var array = [...this.state.option];
            array.forEach((val,index)=>{
              if(event.target.value===val)
                    array.splice(index,1);
              })
            this.setState({option:array});
            this.props.callback(event.target.value)
        }



   
      render(){
       if(this.props.SelectedPeiod!=null)
         this.state.option.push(this.props.SelectedPeiod)
        
         var optionItems= this.state.option.map((arr)=><option value={arr}>{arr}</option>)         
         
           return(
            <Panel >
                <Panel.Heading >Selected Periods</Panel.Heading>
                     <select multiple className='form-control' onChange={this.getcontent.bind(this)}>
                         {optionItems}
                     </select>
               </Panel>
          )
      }




    


}

export default SelectedPeriod;