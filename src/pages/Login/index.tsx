import React from 'react';
import { Container } from '../../Styles/Container';

const Login: React.FC = () => (

  <Container>
    <form>
      <h1>Sign in</h1>
      <input type="text" placeholder="E-mail" />
      <input type="password" placeholder="Password" />
      <button type="submit">Verify</button>
    </form>
  </Container>

);

export default Login;
