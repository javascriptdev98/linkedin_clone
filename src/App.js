import React, { useEffect } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Login from './components/login/Login';
import Widgets from './components/widgets/Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

import { auth } from './firebase/firebase';


function App() {
  const user = useSelector(selectUser);
 
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.profilePic,

        }))
     
      }
      else{
        // user is logged out
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="app">

      {/* Header */}
      <Header />

      {
        !user ? <Login /> : (


          <div className='app__body'>

            {/* sidebar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widgets />

          </div>

        )
      }





    </div>
  );
}

export default App;
