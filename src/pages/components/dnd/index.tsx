/*
 * @Author: busyzz
 * @Date: 2021-09-03 14:09:17
 * @Description:
 */
import React from 'react';
import Vertical from './components/vertical';
import Horizontal from './components/horizontal';
import Multiple from './components/multiple';
import Section from 'components/ui/section';
const Dnd = () => {
  return (
    <>
      <Section>垂直列表</Section>
      <Vertical />
      <Section>
        水平列表（
        注意：该组件为了更流畅的动画，使用的是原生浏览器的API，所以暂时不兼容多行拖放，也就是
        flex-wrap:wrap 状态下无法正常使用，如需要多行拖放使用 react-sortable-hoc
        ）
      </Section>
      <Horizontal />
      <Section>多个容器之间的拖放</Section>
      <Multiple />
    </>
  );
};

export default Dnd;
