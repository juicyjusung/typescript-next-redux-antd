import * as React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import styled from 'styled-components';
import Router from 'next/router';

const StyledButton = styled(Button)`
  margin: 10px;
`;

const Home = () => {
  return (
    <div>
      <h1>hello</h1>
      <Link href="/login">
        <a>
          <StyledButton type="primary">Login!</StyledButton>
        </a>
      </Link>
    </div>
  );
};

Home.getInitialProps = context => {
  return {};
};

export default Home;
