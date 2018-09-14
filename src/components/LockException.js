import React,{Component} from 'react';
import './LockException.css'

import PeriodType from './PeriodType/PeriodType';
import AvailPeriods from './AvailPeriods/AvailPeriods'
import SelectedPeriod from './AvailPeriods/SelectedPeriod'

class LockException extends Component{
    
    render(){
        return (
            <div className='MainPage'>
            <div className='display'>
            <table>
            <tr><th><PeriodType/></th></tr>
            <tr>
                <th rowspan="4"><AvailPeriods/></th>
                <th><input type="button" value="Click Me"></input></th>
                <th rowspan="4"><SelectedPeriod/></th>
            </tr>
            <tr>
                <td><input type="button" value="Click Me"></input></td>
            </tr>
            <tr>
                <td><input type="button" value="Click Me"></input></td>
            </tr>
            <tr>
                <td><input type="button" value="Click Me"></input></td>
            </tr>
            <tr>
                <th rowspan="4"><AvailPeriods/></th>
                <th><input type="button" value="Click Me"></input></th>
                <th rowspan="4"><SelectedPeriod/></th>
            </tr>
            <tr>
                <td><input type="button" value="Click Me"></input></td>
            </tr>
            <tr>
                <td><input type="button" value="Click Me"></input></td>
            </tr>
            <tr>
                <td><input type="button" value="Click Me"></input></td>
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