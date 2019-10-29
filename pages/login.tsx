import React from 'react';
import styled from 'styled-components';
import { Button, Form, Icon, Input, message } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../src/redux/user';
import { FormProps } from 'antd/lib/form';
import { RootState } from '../src/redux';

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

const StyledLoginForm = styled(Form)`
  position: relative;
  z-index: 1;
  background: #ffffff;
  /*max-width: 420px;*/
  width: 420px;
  margin: 0 auto;
  padding: 45px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 0.3em;
  -moz-border-radius: 0.3em;
  -webkit-border-radius: 0.3em;
`;

const LoginForm = ({ form }: FormProps) => {
  const { getFieldDecorator } = form;
  const dispatch = useDispatch();
  // const { isLoggingIn, loginErrorReason } = useSelector(state => state.user);
  const userInfo = useSelector((state: RootState) => state.persist);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: LOG_IN_REQUEST,
          payload: values,
        });
      } else {
        message.error('아이디/ 비밀번호를 정확히 입력해주세요.');
      }
    });
  };

  return (
    <LoginFormContainer>
      <StyledLoginForm onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your user ID!' }],
          })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="User ID" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
          Or{' '}
          <Link href="/signup">
            <a>register now!</a>
          </Link>
        </Form.Item>
        <Link href="/">
          <a>
            <Button>홈</Button>
          </a>
        </Link>
      </StyledLoginForm>
    </LoginFormContainer>
  );
};

const Login = Form.create({ name: 'normal_login' })(LoginForm);

LoginForm.getInitialProps = async context => {
  const state = context.store.getState();
  console.log(`JL - state : `, state);
};

export default Login;
