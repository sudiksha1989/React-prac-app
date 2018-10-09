import React,{Component} from 'react';
import './LockException.css'

import PeriodType from './PeriodType/PeriodType';
import AvailPeriods from './Periods/AvailPeriods'
import SelectedPeriod from './Periods/SelectedPeriod'
import AvailDataSets from './DataSets/AvailDataSets'
import SelectedDataSets from './DataSets/SelectedDataSets'

class LockException extends Component{

    constructor() {
        super();
        this.state = {
            availPeriod:null,
            selectedPeiod: null, // use this as default

         }
      }

      handleAvailPeriods(item) {
        this.setState({selectedPeiod:item,availPeriod:null})
       }
       handleSelPeriods(item) {
        this.setState({availPeriod:item,selectedPeiod:null})
       }

      render(){
        


        return (
            <div className='MainPage'>
            <div className='display'>
            <table>
            <tr><th><PeriodType/></th></tr>
            <tr>
                <th ><AvailPeriods    callback={this.handleAvailPeriods.bind(this)} AvailPeriods={this.state.availPeriod}/></th>
                <th ><SelectedPeriod  SelectedPeiod={this.state.selectedPeiod}  callback={this.handleSelPeriods.bind(this)}/></th>
            </tr>
            
            <tr>
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