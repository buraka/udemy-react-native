import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/loginForm';

const RouterComp = () => {
  return (
    <Router>
      <Scene key='auth'>
        <Scene key='login'
               component={LoginForm}
               title='Login'
               hideNavBar={true}
               initial />
      </Scene>
    </Router>
  )
}

export default RouterComp;
