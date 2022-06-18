/*
 * @Author: cos
 * @Date: 2022-05-29 00:42:46
 * @LastEditTime: 2022-06-19 02:53:37
 * @LastEditors: cos
 * @Description:
 * @FilePath: \byte-search\src\pages\Register\index.tsx
 */
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import { login, register } from 'services/api';
import localStorageUtil from 'utils/localStorageUtil';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserCache } from 'redux/userSlice';

const Register = React.memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoLogin = () => {
    navigate('/login');
  };
  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 注册
      const { username, password } = values;

      const regisRes = await register({ username, password });
      console.log('regisRes:', regisRes);
      if (regisRes.code === 0) {
        const { token } = await login({ username, password });
        // console.log('token:', token);
        message.success('注册成功！');
        localStorageUtil.setItem('token', token);
        dispatch(setUserCache({ username, password, token }));
        navigate('/home');
      }
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };
  return (
    <div style={{ backgroundColor: 'white' }}>
      <LoginForm
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="注册"
        subTitle="快来注册吧"
        actions={
          <div
            style={{
              width: '100%',
              textAlign: 'center',
            }}
          >
            <a
              onClick={handleGoLogin}
              style={{
                color: 'red',
                fontSize: 16,
              }}
            >
              已有帐户？前往登录！
            </a>
          </div>
        }
        onFinish={async (values) => {
          await handleSubmit(values as API.LoginParams);
        }}
        submitter={{ searchConfig: { submitText: '注册' } }}
      >
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'用户名'}
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
            placeholder={'密码'}
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
        ></div>
      </LoginForm>
    </div>
  );
});
export default Register;
