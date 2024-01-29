import React, { useEffect, useState } from 'react';
import './Home.css';
import Nav from '../Navbar/Nav';
import Task from '../Task/Task';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { database } from '../../firebase';
import Add from '../Add/add';

function Home() {
    const user = useSelector(selectUser);
    const value = collection(database, user.email);

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const querySnapshot = await getDocs(value);
                setTasks(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            } catch (error) {
                console.error('Error getting documents: ', error);
            }
        };

        getData();
    }, []);

    const handleDeleteTask = async (taskId) => {
        try {
            const deleteVal = doc(database, user.email, taskId);
            await deleteDoc(deleteVal);
            setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    };

    return (
        <div className='home-container'>
            <Nav className="navbar" />
            <div className='Task-container'>
                <Add />
                {tasks.map((task) => (
                    <Task key={task.id} taskId={task.id} title={task.title} description={task.description} date={task.date} onDelete={handleDeleteTask} />
                ))}
            </div>
        </div>
    );
}

export default Home;
