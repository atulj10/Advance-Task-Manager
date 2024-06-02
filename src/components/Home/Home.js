import React, { useEffect, useState } from 'react';
import './Home.css';
import Nav from '../Navbar/Nav';
import Task from '../Task/Task';
import { collection, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { database } from '../../firebase';
import Add from '../Add/add';
import { faAngleDoubleDown, faAngleUp, faPlus, faPlusCircle, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    const user = useSelector(selectUser);
    const value = collection(database, user.email);
    const [filter, setFilter] = useState("date")
    const date = new Date();
    const [add, setAdd] = useState(false)
    const [tasks, setTasks] = useState([]);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 700) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function getTimeOfDay() {
        const now = new Date();
        const hours = now.getHours();

        if (hours >= 5 && hours < 12) {
            return 'MORNING';
        } else if (hours >= 12 && hours < 17) {
            return 'AFTERNOON';
        } else {
            return 'EVENING';
        }
    }


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

    const handleFilter = (e) => {
        setFilter(e.target.value)
        getData()
    }

    return (
        <>
            <Nav className="navbar" />
            <div className='heading'>
                <h5 className='heading-date'>Today's</h5>
                <p className='heading-date'>{date.toDateString()}</p>
                <h1 className='greet'>GOOD</h1>
                <h2 id="add" className='greet'>{getTimeOfDay()} !</h2>
                <a href='#home'><button className='go-down-btn'><FontAwesomeIcon icon={faAngleDoubleDown} /></button></a>
            </div>
            <div id='home' className='home-container'>
                <div className='Task-container'>
                    <div className='dropdown'>
                        <label>
                            <FontAwesomeIcon className='filter-icon' icon={faSort} />
                            <select className='select' onChange={handleFilter} value={filter} >
                                <option className='option' value="title">Title</option>
                                <option className='option' value="description">Description</option>
                                <option className='option' value="date">Date</option>
                            </select>
                        </label>
                    </div>
                    {add && <Add taskAdded={handleTaskAdded} setAdd={setAdd} />}
                    <div className='task-holder'>
                        {tasks.map((task) => (
                            <Task key={task.id} taskId={task.id} title={task.title} description={task.description} date={task.date} onDelete={handleDeleteTask} />
                        ))}
                    </div>
                </div>
            </div>
            {scroll && <div className='top-btn-container'>
                <a href='#top'><button className='top-btn' onClick={() => setAdd(true)}><FontAwesomeIcon className='p-0' icon={faAngleUp} /></button></a>
            </div>}
            <div className='add-btn-container'>
                <a href='#add'><button className={`add-btn `} onClick={() => setAdd(true)}><FontAwesomeIcon className='p-0' icon={faPlus} /></button></a>
            </div>
        </>
    );
}

export default Home;
