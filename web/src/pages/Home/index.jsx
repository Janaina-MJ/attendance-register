import React, { useState } from 'react';
import './styles.css';

import { Card } from '../../components/Card'

export function Home() {

  const [fullName, setFullName] = useState('');
  const [attendanceRegister, setAttendanceRegister] = useState([]);

  function handleAddRegister() {
    const newRegister = {
      name: fullName,
      time: new Date().toLocaleTimeString("en-uk", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setAttendanceRegister([...attendanceRegister, newRegister]);

  }

  return (
    <div className="container">
       <h1>Attendance Register</h1>

       <input 
       type="text" 
       placeholder="Enter your name"
       onChange={e => setFullName(e.target.value)} 
       />
       
       <button type="button" onClick={ handleAddRegister }>Register</button>

      {
        attendanceRegister.map(register => (
          <Card 
            key={register.time}
            name={ register.name } 
            time={ register.time}
          />
        ))
      }
    </div>
   
  )
}
