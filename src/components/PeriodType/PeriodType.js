import React from 'react';
import {DropdownButton,MenuItem,ButtonToolbar}  from 'react-bootstrap'

const BUTTONS = ['Daily','Weekly','WeeklyWednesday','WeeklyThursday','WeeklySaturday','WeeklySunday','BiMonthly','Quarterly','SixMonthly','SixMonthlyApril','Yearly','FinancialApril','FinancialJuly','FinancialOct'];

function renderDropdownButton(title, i) {
  return (
    <DropdownButton
      bsStyle={title.toLowerCase()}
      title={title}
      key={i}
      id={`dropdown-basic-${i}`}
    >
      <MenuItem eventKey={}>{}</MenuItem>
      </DropdownButton>
  );
}

const PeriodType = () => (
  <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
)

export default PeriodType
/*    
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