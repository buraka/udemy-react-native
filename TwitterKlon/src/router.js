import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Tweets from './components/tweets';
import NewTweet from './components/newTweet';
import UpdateTweet from './components/updateTweet';

const RouterComp = () => {
  return (
    <Router titleStyle={{color: '#E87B79'}}>
      <Scene key='root' hideNavBar={true}>
        <Scene key='auth'>
          <Scene key='login'
                 component={LoginForm}
                 title='Login'
                 hideNavBar={true}
                 initial
                 />
        </Scene>
        <Scene key='main' initial>
          <Scene key='tweets'
                 component={Tweets}
                 title='Tweets'
                 rightTitle='New'
                 onRight={() => Actions.newTweet()}
                 leftTitle='Update'
                 onLeft={() => Actions.updateTweet()}
                 initial
                 />
           <Scene key='newTweet'
                  component={NewTweet}
                  title='New Tweet'
                  />
           <Scene key='updateTweet'
                  component={UpdateTweet}
                  title='Update / Delete Tweet'
                  />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComp;
