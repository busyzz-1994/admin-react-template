/*
 * @Author: busyzz
 * @Date: 2021-09-02 11:50:38
 * @Description:
 */
import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
interface ScrollToTopProps {
  children: React.ReactElement;
}
/**
 * @desc 路由切换时,滚动到最顶部
 */
const ScrollToTop: FC<ScrollToTopProps> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);
  return children;
};

export default ScrollToTop;
