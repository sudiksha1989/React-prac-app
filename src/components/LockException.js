import React,{Component} from 'react';
import './LockException.css'

import PeriodType from './PeriodType/PeriodType';
import AvailPeriods from './AvailPeriods/AvailPeriods'
import SelectedPeriod from './AvailPeriods/SelectedPeriod'

class LockException extends Component{

    constructor() {
        super();
        this.state = {
          selectValue: '' // use this as default
        }
      }

      handleOnChange(e) {
        this.setState({
          selectValue: e.target.value
        });
      }






    
    render(){
        const {selectValue} = this.state;


        return (
            <div className='MainPage'>
            <div className='display'>
            <table>
            <tr><th><PeriodType/></th></tr>
            <tr>
                <th ><AvailPeriods  handleOnChange={this.handleOnChange.bind(this)}/></th>
                <th ><SelectedPeriod  selectValue={selectValue}/></th>
            </tr>
            
            <tr>
                <th ><AvailPeriods/></th>
                <th ><SelectedPeriod/></th>
            </tr>
            </table>
            </div>
            </div>
        )
    }
}

export default LockException;


// WEBPACK FOOTER //
// ./src/components/HelloWorldList.js