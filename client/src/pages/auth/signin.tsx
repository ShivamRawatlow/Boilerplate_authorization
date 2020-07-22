import React, { useContext } from 'react';
import { useState } from 'react';

import useRequest from '../../hooks/use-request';
import { useHistory } from 'react-router-dom';
import UserContext from '../../contexts/user_context';

const SignIn = () => {
  const context = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: (data) => {
      if (data) {
        context?.setUser(data.currentUser);
      }
    },
  });

  const onSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    doRequest();
  };

  return (
    <div className='container p-md-5 '>
      <div className='card mt-5 m-md-5 p-5 shadow p-3 mb-5 bg-white rounded'>
        <form onSubmit={onSubmit}>
          <h1>Sign In</h1>
          <div className='form-group'>
            <label>Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              className='form-control'
            />
          </div>
          {errors}
          <button className='btn btn-primary'>SignIn</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
