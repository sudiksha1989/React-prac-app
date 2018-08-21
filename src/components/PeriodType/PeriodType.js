import React from 'react';
import {DropdownButton,MenuItem,ButtonToolbar}  from 'react-bootstrap'



class PeriodType extends React.Component{
constructor(props){
  super(props)
  this.state={
    period:['Daily','Weekly','WeeklyWednesday','WeeklyThursday','WeeklySaturday','WeeklySunday','BiMonthly','Quarterly','SixMonthly','SixMonthlyApril','Yearly','FinancialApril','FinancialJuly','FinancialOct'],
    button:'Period Type'
  }
}
handleUpdate(event){
  console.log(event)
  this.setState({button:event})
}

renderDropdownButton() {
 
 
  var  listItems = this.state.period.map((val) =>
   <MenuItem eventKey={val}>{val}</MenuItem>
   );


  return (
    <DropdownButton onSelect={this.handleUpdate.bind(this)}
      title={this.state.button}>
      {listItems}
     </DropdownButton>
  );
}





render() {
  return (
      <ButtonToolbar>{this.renderDropdownButton()}</ButtonToolbar>
   );
}







}





export default PeriodType









/*


const BUTTONS = ['Daily','Weekly','WeeklyWednesday','WeeklyThursday','WeeklySaturday','WeeklySunday','BiMonthly','Quarterly','SixMonthly','SixMonthlyApril','Yearly','FinancialApril','FinancialJuly','FinancialOct'];






var listItems = BUTTONS.map(function(d, idx){
 return (<MenuItem eventKey={d}>{d}</MenuItem>)
})

function renderDropdownButton() {
  const title='default';
  return (
    <DropdownButton
      bsStyle={title.toLowerCase()}
      title={title}
      key={title}
     id={`dropdown-basic-${i}`}
    >
      {listItems}
      </DropdownButton>
  );
}

const PeriodType = () => (
  <ButtonToolbar>{renderDropdownButton}</ButtonToolbar>
)

export default PeriodType

const options = [
  { value: 'Daily', label: 'Daily' },
  { value: 'Weekly', label: 'Weekly' },
  { value: 'WeeklyWednesday', label: 'WeeklyWednesday' },
  { value: 'WeeklyThursday', label: 'WeeklyThursday' },
  { value: 'WeeklySaturday', label: 'WeeklySaturday' },
  { value: 'WeeklySunday', label: 'WeeklySunday' },
  { value: 'BiMonthly', label: 'BiMonthly' },
  { value: 'Quarterly', label: 'Quarterly' },
  { value: 'SixMonthly', label: 'SixMonthly' },
  { value: 'SixMonthlyApril', label: 'SixMonthlyApril' },
  { value: 'Yearly', label: 'Yearly' },
  { value: 'FinancialApril', label: 'FinancialApril' },
  { value: 'FinancialJuly', label: 'FinancialJuly' },
  { value: 'FinancialOct', label: 'FinancialOct' },
  


]

const PeriodType = () => (
  <Select options={options} />
)


export default PeriodType
*/