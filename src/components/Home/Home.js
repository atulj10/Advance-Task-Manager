import React, { useEffect, useState } from 'react';
import './Home.css';
import Nav from '../Navbar/Nav';
import Task from '../Task/Task';
import { collection, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { database } from '../../firebase';
import Add from '../Add/add';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    const user = useSelector(selectUser);
    const value = collection(database, user.email);
    const [filter,setFilter]=useState("date")

    const [tasks, setTasks] = useState([]);
    const getData = async () => {
        try {
            const querySnapshot = await getDocs(query(value, orderBy(filter, "desc")));
            setTasks(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (error) {
            console.error('Error getting documents: ', error);
        }
    };
    useEffect(() => {
        getData();
    }, [filter]);

    const handleDeleteTask = async (taskId) => {
        try {
            const deleteVal = doc(database, user.email, taskId);
            await deleteDoc(deleteVal);
            setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    };

    const handleTaskAdded = () => {
        getData()
    }

    const handleFilter=(e)=>{
        setFilter(e.target.value)
        getData()
    }

    return (
        <div className='home-container'>
            <Nav className="navbar" />
            <div className='Task-container'>
                <div className='dropdown'>
                    <label>
                        <FontAwesomeIcon className='filter-icon' icon={faSort}/>
                        <select className='select' onChange={handleFilter} value={filter} >
                            <option className='option' value="title">Title</option>
                            <option className='option' value="description">Description</option>
                            <option className='option' value="date">Date</option>
                        </select>
                    </label>
                </div>
                <Add taskAdded={handleTaskAdded} />
                {tasks.map((task) => (
                    <Task key={task.id} taskId={task.id} title={task.title} description={task.description} date={task.date} onDelete={handleDeleteTask} />
                ))}
            </div>
        </div>
    );
}

export default Home;
