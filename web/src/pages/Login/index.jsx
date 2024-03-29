import React from 'react';
import './styles.css';
import { useState } from 'react';
import { api } from '../../service/api'
import eventLogo1 from '../../assets/eventLogo1.png'
import eventLogo2 from '../../assets/eventLogo2.jpeg'


export function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [isLogoSelected, setIsLogoSelected] = useState(false);

    function handleFileSelect(e) {
        const image = e.target.files[0];
        setSelectedFile(image);

        const imageURL = URL.createObjectURL(image);
        setImageUrl(imageURL);

        //then display the selected image
    } 

    function displayEventLogo() {
        //display the selected image
    }

    async function createRegister(e) {
        e.preventDefault();

        await api.post('/registers', {
            name,
            email,
            //selectedFile,
        });

    }

    return (
        <div className='login-container'>
            <h1>Attendance Register</h1>
            <form className='form' onSubmit={createRegister}>
                <div className='field-set'>
                    <label htmlFor="event-name" className='field-title'> Event name/Class/Group:</label>
                    <input 
                        className='fields' 
                        type="text" 
                        id='event-name' 
                        name='name' 
                        placeholder='Enter event name for attendance recording' 
                        onChange={(e)=> setName(e.target.value)}
                        value={name}
                        required />
                </div>

                <div className='field-set'>
                    <label htmlFor="email" className='field-title'>Email:</label>
                    <input 
                        className='fields' 
                        type="email" 
                        id='email' 
                        name='email' 
                        placeholder="Enter recipient's email address for attendee list" 
                        onChange={(e)=> setEmail(e.target.value)}
                        value={email}
                        required />
                </div>

                <div className='field-set'>
                    <p className='field-title'>Select the event logo:</p>
                    <div className={imageUrl? 'display-none' : 'input-file-container' }>
                        <button onClick={()=> {setImageUrl(eventLogo1)}} className='logo-option eventLogo1' ></button>
                        <button onClick={()=> {setImageUrl(eventLogo2)}} className='logo-option eventLogo2'></button>
                        <label htmlFor="imageUpload" className='input-label'>Choose File</label>
                        <input 
                            className='input-file'
                            type="file" 
                            id="imageUpload" 
                            name="imageUpload" 
                            accept="image/*"
                            onChange={handleFileSelect} />
                    </div>
                    <div className={imageUrl? 'logo-selected' : 'display-none'}>
                        <button onClick={()=>{setImageUrl(null)}} type='button' className='delete-img-button'>x</button>
                        <img src={imageUrl} alt="" />
                    </div>
                </div>
                
                <div className='field-set'>
                    <button className='submit-form-button' type='submit'>Create</button>
                </div>

            </form>
        </div>
    )
}