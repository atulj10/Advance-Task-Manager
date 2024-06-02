import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './add.css'

function Add({ taskAdded, setAdd }) {
    const user = useSelector(selectUser);
    const value = collection(database, user.email);
    const navigate = useNavigate()
    const Day = new Date()

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState();
    const [blur, setBlur] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await addDoc(value, {
                title: title,
                description: description,
                date: date,
            });

            setTitle('');
            setDescription('');
            setDate('');

            taskAdded()
            setAdd(false)
            navigate('/')

        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div className='main-container'>
            <form onSubmit={submitHandler} className={`form-container ${blur ? "form-container-blur" : ""}`}>
                <label>Title</label>
                <input className=' input title ' value={title} type='text' onClick={() => setBlur(true)} onChange={(e) => setTitle(e.target.value)} required />
                <label>Description</label>
                <textarea className=' input description ' value={description} type='text-area' onClick={() => setBlur(true)} onChange={(e) => setDescription(e.target.value)} required />
                <label>Date</label>
                <input className=' input date' value={date} type='date' onClick={() => setBlur(true)} onChange={(e) => setDate(e.target.value)} />
                <div className='div-btn'>
                    <button className='submit' type='submit' onClick={() => setBlur(true)}>SUBMIT</button>
                </div>
            </form>
        </div>
    );
}

export default Add;
