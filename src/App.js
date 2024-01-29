import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { useEffect } from 'react';
import Login from '../src/components/login/login'
import Add from './components/Add/add';
import Guide from '../src/components/Guide/guide'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //loggedin
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else {
        //logged out
        dispatch(logout())
      }
    })

    return unsubscribe;
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        {!user ?
          <Login /> :
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/guide' element={<Guide />} />
          </Routes>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
