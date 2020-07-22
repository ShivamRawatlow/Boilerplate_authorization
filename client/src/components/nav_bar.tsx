import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../contexts/user_context';
import { IUser } from '../interfaces/i_user';

const NavBar = () => {
  const history = useHistory();
  const context = useContext(UserContext);
  const currentUser = context?.user;

  const loggedIn = [
    <li key={1} className='nav-item'>
      <Link to={'/auth/signout'}>
        <span className='nav-link'>SignOut</span>
      </Link>
    </li>,
  ];

  const notLoggedIn = [
    <li key={2} className='nav-item'>
      <Link to={'/auth/signin'}>
        <span className='nav-link'>SignIn</span>
      </Link>
    </li>,
    <li key={3} className='nav-item'>
      <Link to={'/auth/signup'}>
        <span className='nav-link'>SignUp</span>
      </Link>
    </li>,
  ];

  if (context?.user) {
    history.push('/');
  } else {
    history.push('/auth/signin');
  }

  return (
    <nav className='navbar navbar-light bg-light'>
      <Link to='/'>
        <span className='navbar-brand'>BoilerPlate</span>
      </Link>

      <div className='d-flex justify-content-end'>
        <ul className='nav d-flex align-items-center'>
          {currentUser ? loggedIn : notLoggedIn}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
