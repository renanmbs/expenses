import './App.css'
import { Spending } from './spending/spending';
import React, {useState} from 'react';

function App() {
  
  const [month, setMonth] = useState('');

  const handleMonth = (event) => {
    setMonth(event.target.value);
  }

  return (
    <div id='body'>
      <div id='header'>

        <h1>Finances</h1>  
        <h2>Renan & Abbie 2024</h2>
      </div>

      <div id='selection'>

        <h2>Monthly Breakdown</h2>

        <select onChange={handleMonth} name='month'>
          <option selected="selected" value="Choose Month" disabled>Choose Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September" >September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

      </div>


      <Spending month={month}/>
    </div>
  );
}

export default App;
