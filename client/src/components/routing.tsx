import React, { useContext } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import UserContext from '../contexts/user_context';
import Home from '../pages/content/home';
import SignIn from '../pages/auth/signin';
import SignUp from '../pages/auth/signup';
import SignOut from '../pages/auth/signout';

const Routing = () => {
  const context = useContext(UserContext);

  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/auth/signin'>
        <SignIn />
      </Route>
      <Route path='/auth/signup'>
        <SignUp />
      </Route>
      <Route path='/auth/signout'>
        <SignOut />
      </Route>
    </Switch>
  );
};

export default Routing;
