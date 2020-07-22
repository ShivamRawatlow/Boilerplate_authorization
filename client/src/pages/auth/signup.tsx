import React, { useContext } from 'react';
import { useState } from 'react';
import useRequest from '../../hooks/use-request';
import { useHistory } from 'react-router-dom';
import UserContext from '../../contexts/user_context';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const context = useContext(UserContext);

  const [
    passwordMatchError,
    setPasswordMatchError,
  ] = useState<JSX.Element | null>(null);

  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
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
    if (password !== confirmPassword) {
      setPasswordMatchError(
        <div className='alert alert-danger'>
          <h4>Ooops....</h4>
          <span className='my-0'>
            Password and Confirm Password do not match
          </span>
        </div>
      );
      return;
    } else {
      setPasswordMatchError(null);
      doRequest();
    }
  };

  return (
    <div className='container p-md-5'>
      <div className='card mt-5 m-md-5 p-5 shadow p-3 mb-5 bg-white rounded'>
        <form onSubmit={onSubmit}>
          <h1>Sign Up</h1>
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
          <div className='form-group'>
            <label>Confirm Password</label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type='password'
              className='form-control'
            />
          </div>
          {errors}
          {passwordMatchError}
          <button className='btn btn-primary'>SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
