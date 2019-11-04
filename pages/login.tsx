import React from 'react';
import styled from 'styled-components';

import LoginForm from '../src/components/LoginForm';

const LoginFormContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-flex;
  -webkit-justify-content: center;
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8dc26f);
  background: -moz-linear-gradient(right, #76b852, #8dc26f);
  background: -o-linear-gradient(right, #76b852, #8dc26f);
  background: linear-gradient(to left, #76b852, #8dc26f);
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const LoginPage = () => {
  return (
    <LoginFormContainer>
      <LoginForm />
    </LoginFormContainer>
  );
};

LoginPage.getInitialProps = async context => {
  const state = context.store.getState();
  console.log(`JL - state : `, state);
};

export default LoginPage;
