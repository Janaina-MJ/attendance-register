import React from 'react';
import './styles.css';
import { useState } from 'react';

export function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function createRegister(e) {
        e.preventDefault();

        await api.post('/registers', { //this function is not working yet because the project doesn't has the backend server
            name,
            email,
        });

        window.location.href = '../Home/index.js';
    }

    return (
        <div>
            <h1>Attendance Register</h1>
            <form className='form' onSubmit={createRegister}>
                <div className='field-set'>
                    <label htmlFor="event-name" className='field-title'> Event name/Class/Group:</label>
                    <input 
                        className='fields' 
                        type="text" 
                        id='event-name' 
                        name='name' 
                        placeholder='Enter the event name for which the attendance is being recorded' 
                        onChange={(e)=> setName(e.target.value)}
                        value={name}
                        required />
                </div>

                <div className='field-set'>
                    <label htmlFor="email" className='field-title'>Email</label>
                    <input 
                        className='fields' 
                        type="email" 
                        id='email' 
                        name='email' 
                        placeholder='Enter the email address of the person who will receive the list of attendees' 
                        onChange={(e)=> setEmail(e.target.value)}
                        value={email}
                        required />
                </div>

                <div className='field-set'>
                    
                </div>

                <div className='field-set'>
                    <button className='submit-form-button' type='submit'>Create new attendance register</button>
                </div>

            </form>
        </div>
    )
}