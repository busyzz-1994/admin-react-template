/*
 * @Author: busyzz
 * @Date: 2021-08-01 01:05:52
 * @Description:
 */
import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from 'config/routes';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router
      basename={
        process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : ''
      }
    >
      {renderRoutes(routes)}
    </Router>
  );
}

export default App;
