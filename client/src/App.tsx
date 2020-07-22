import React, { useState, useEffect } from 'react';
import axiosextension from './utils/axiosextension';
import UserContext from './contexts/user_context';
import { IUser } from './interfaces/i_user';
import NavBar from './components/nav_bar';
import { BrowserRouter, useHistory } from 'react-router-dom';
import Routing from './components/routing';

const App = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axiosextension.get('/api/users/currentuser');
      const userValue = result.data.currentUser;
      setUser(userValue);
    } catch (err) {
      console.log('Error occured', err);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
