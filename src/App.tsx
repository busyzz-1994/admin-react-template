/*
 * @Author: busyzz
 * @Date: 2021-08-01 01:05:52
 * @Description:
 */
import React, { useReducer, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import routes from 'config/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { GlobalProvider, ActionType } from 'context';
import ScrollToTop from 'components/ui/scrollToTop';
import { defaultValue, reducer } from 'context';
import zhCN from 'antd/lib/locale/zh_CN';
function App() {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  // 初始化操作
  useEffect(() => {
    // mock request 通过后端返回的数据做一些初始化操作
    setTimeout(() => {
      dispatch({
        type: ActionType.CHANGE_USER_INFO,
        preload: {
          name: 'busyzz',
        },
      });
    }, 2000);
  }, []);
  return (
    <ConfigProvider locale={zhCN}>
      <GlobalProvider
        value={{
          ...state,
          dispatch,
        }}
      >
        <Router
          basename={
            process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : ''
          }
        >
          <ScrollToTop>{renderRoutes(routes)}</ScrollToTop>
        </Router>
      </GlobalProvider>
    </ConfigProvider>
  );
}

export default App;
