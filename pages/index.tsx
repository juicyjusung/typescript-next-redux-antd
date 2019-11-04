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
      <h1>IndexPage</h1>
      <Link href="/login">
        <a>
          <StyledButton type="primary">LoginPage</StyledButton>
        </a>
      </Link>
    </div>
  );
};

Home.getInitialProps = context => {
  return {};
};

export default Home;
