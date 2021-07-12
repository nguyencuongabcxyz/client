import React from 'react';
import {Input, Button} from 'semantic-ui-react';
import './Login.scss';
import apps from '../../assets/apps.svg';

function Login() {
  return (
    <div className="login">
      <div className="login-form">
        <img src={apps} alt="AppLogo" className="logo" />
        <h1 className="title">Login</h1>
        <Input icon='user' iconPosition='left' placeholder='User name' />
        <Input icon='lock' iconPosition='left' placeholder='Password' />
        <a href="#">Forgot password?</a>
        <Button color='teal'>LOGIN</Button>
        <p>Or sign up using</p>
        <div>
          <Button circular icon='facebook f' />
          <Button circular icon='google' />
        </div>
      </div>
    </div>
  )
}

export default Login;