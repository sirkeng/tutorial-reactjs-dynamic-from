import React from 'react';
import './App.css';
import { DateTimePicker } from 'react-widgets'

function App() {
  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
        <DateTimePicker
    dropUp
    data={[
      'orange',
      'red',
      'blue',
      'purple'
    ]}
  />
    </div>
  );
}

export default App;
