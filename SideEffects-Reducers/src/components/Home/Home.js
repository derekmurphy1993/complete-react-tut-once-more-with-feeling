import React, {useContext, useEffect} from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import { useCallback } from 'react';
import AuthContext from '../../store/auth-context';

const Home = (props) => {
  const authCtx = useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button onClick={authCtx.onLogout}>Logout</button>
    </Card>
  );
};

export default Home;
