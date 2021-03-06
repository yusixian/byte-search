/*
 * @Author: cos
 * @Date: 2022-05-29 00:42:46
 * @LastEditTime: 2022-06-19 02:32:27
 * @LastEditors: cos
 * @Description:
 * @FilePath: \byte-search\src\pages\Login\index.tsx
 */
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import { login } from 'services/api';
import localStorageUtil from 'utils/localStorageUtil';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserCache } from 'redux/userSlice';

const Login = React.memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoRegister = () => {
    navigate('/register');
  };
  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 登录
      const { username, password } = values;
      //   console.log('values:', values);
      const loginRes = await login({ username, password });
      //   console.log('loginRes:', loginRes);
      if (loginRes.code === 200) {
        const { token } = loginRes;
        console.log('token:', token);
        const defaultLoginSuccessMessage = '登录成功！';
        message.success(defaultLoginSuccessMessage);
        localStorageUtil.setItem('token', token);
        dispatch(setUserCache({ username, password, token }));
        navigate('/home');
        return;
      }
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };
  return (
    <div style={{ backgroundColor: 'white' }}>
      <LoginForm
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="余弦搜索"
        subTitle="副标题还没有想到就先不想了"
        onFinish={async (values) => {
          await handleSubmit(values as API.LoginParams);
        }}
      >
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'用户名: admin or user'}
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'密码: ant.design'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </>
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            onClick={handleGoRegister}
            style={{
              float: 'right',
              color: 'red',
            }}
          >
            没有账户？前往注册！
          </a>
        </div>
      </LoginForm>
    </div>
  );
});
export default Login;
