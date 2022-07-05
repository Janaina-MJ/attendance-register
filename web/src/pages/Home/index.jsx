import React, { useState, useEffect } from 'react';
import './styles.css';

import { Card } from '../../components/Card'

export function Home() {

  const [fullName, setFullName] = useState('');
  const [attendanceRegister, setAttendanceRegister] = useState([]);
  const [meetingModerator, setMeetingModerator] = useState({name:'', avatar:''})

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

  useEffect(() => {

    async function fetchGithubAPIData() {
      const resp = await fetch('https://api.github.com/users/janaina-mj')
      const data = await resp.json();
      setMeetingModerator({
        name: data.name,
        avatar: data.avatar_url,
      })
    }
    
    fetchGithubAPIData();
    
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Attendance Register</h1>
        <div>
          <strong> { meetingModerator.name }</strong>
          <img src={ meetingModerator.avatar } alt="Profile picture" />
        </div>
      </header>

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
