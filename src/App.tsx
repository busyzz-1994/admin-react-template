/*
 * @Author: busyzz
 * @Date: 2021-08-01 01:05:52
 * @Description:
 */
import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from 'config/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ScrollToTop from 'components/ui/scrollToTop';
import zhCN from 'antd/lib/locale/zh_CN';
function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Router
        basename={
          process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : ''
        }
      >
        <ScrollToTop>{renderRoutes(routes)}</ScrollToTop>
      </Router>
    </ConfigProvider>
  );
}

export default App;
