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
            periodType:null,// use null as default
            availPeriod:null,
            selectedPeriod: null, 
            availDataSets:null,
            SelectedDataSets:null
         }
      }

      handleAvailPeriods(item) {
        this.setState({selectedPeriod:item,availPeriod:null,periodType:null})
       }
       handleSelPeriods(item) {
        this.setState({availPeriod:item,selectedPeriod:null})
       }
       updatePeriodType(item){
           this.setState({periodType:item})
       }
       handleAvailDataSets(item) {
        this.setState({SelectedDataSets:item,availDataSets:null,periodType:null})
       }
       handleSelDataSets(item) {
        this.setState({availDataSets:item,SelectedDataSets:null})
       }

      render(){
        


        return (
            <div className='MainPage'>
            <div className='display'>
            <table>
            <tr><th><PeriodType   callback={this.updatePeriodType.bind(this)}/></th></tr>
            <tr>
                <th ><AvailPeriods PeriodType={this.state.periodType} callback={this.handleAvailPeriods.bind(this)} AvailPeriods={this.state.availPeriod}/></th>
                <th ><SelectedPeriod PeriodType={this.state.periodType} SelectedPeriod={this.state.selectedPeriod}  callback={this.handleSelPeriods.bind(this)}/></th>
            </tr>
                <th ><AvailDataSets   PeriodType={this.state.periodType} callback={this.handleAvailDataSets.bind(this)}  AvailDataSets={this.state.availDataSets} /></th>
                <th ><SelectedDataSets   PeriodType={this.state.periodType} SelectedDataSets={this.state.SelectedDataSets} callback={this.handleSelDataSets.bind(this)} /></th>
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