import React, { useContext } from 'react';
import { useEffect } from 'react';
import useRequest from '../../hooks/use-request';
import { useHistory } from 'react-router-dom';
import UserContext from '../../contexts/user_context';

const SignOut = () => {
  const history = useHistory();
  const context = useContext(UserContext);

  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => {
      context?.setUser(null);
      //  history.push('/auth/signin');
    },
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out...</div>;
};

export default SignOut;
