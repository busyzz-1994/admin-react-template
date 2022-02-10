/*
 * @Author: busyzz
 * @Date: 2021-08-01 11:05:52
 * @Description:
 */
import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import 'antd/dist/antd.css';
import './styles/index.scss';
// 如需使用 sentry 监控异常 , 设置自己的 REACT_APP_SENTRY_DSN 环境变量
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

// React.StrictMode
ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
