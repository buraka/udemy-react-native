import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN = 'login';
export const LOGIN_USER_FAILED = 'login_user_failed';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  }
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginSuccess(dispatch, user))
          .catch(() => loginUserFailed(dispatch))
      })
  }
}

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })

  Actions.main();
}

const loginUserFailed = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAILED
  })
}
