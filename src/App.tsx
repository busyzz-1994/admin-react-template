/*
 * @Author: busyzz
 * @Date: 2021-08-01 01:05:52
 * @Description:
 */
import React from 'react';
import Header from 'components/Header';
import moment from 'moment';
import dayjs from 'dayjs';
import maxImages from 'assets/max.jpg';
import maxI from 'assets/min/max.jpg';
// import $ from 'jquery';
import { BrowserRouter as Router } from 'react-router-dom';
console.log(dayjs);
console.log(moment);
const list = [12, 3, 3, 5];
const result = list.includes(2);
console.log(result);
console.log('popo');
console.log('popo');
console.log('popo');
// console.log($);
function App() {
  console.log(1111);
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <img src={maxImages} alt='' />
          <img src={maxI} alt='' />
          <Header />
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
