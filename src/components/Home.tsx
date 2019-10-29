import * as React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin: 20px;
`;

export const Home: React.FunctionComponent = props => {
  return (
    <div>
      <h1>hello</h1>
      <StyledButton type="primary">Login</StyledButton>
    </div>
  );
};
