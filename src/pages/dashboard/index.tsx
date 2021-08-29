import React, { FC } from 'react';
import { Alert, Row, Col, Card, message } from 'antd';
import { RowProps } from 'antd/lib/row';
import styles from './index.module.scss';
// echarts相关依赖
/**
 * @see 'https://echarts.apache.org/zh/tutorial.html#ECharts%20%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%E6%A6%82%E8%A7%88'
 */
import * as echarts from 'echarts/core';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { optionsLine } from './options';
import {
  BarChart,
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
} from 'echarts/charts';
import {
  TitleComponent,
  TitleComponentOption,
  GridComponent,
  GridComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// 配置类型
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | ToolboxComponentOption
>;
// 注册必须的组件
echarts.use([
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  ToolboxComponent,
  LegendComponent,
  CanvasRenderer,
]);
const rowGutter: RowProps['gutter'] = [
  { xs: 8, sm: 16, md: 24 },
  { xs: 8, sm: 16, md: 24 },
];

const DashBoard: FC = () => {
  const onChartReady = () => {
    message.success('折线图渲染完成！');
  };
  return (
    <>
      <Alert
        type='info'
        showIcon
        message='图形依赖 echarts v5，支持按需引入 v5 版本对 Tree-shaking 兼容更友好了，配合 echarts-for-react 实现'
      />
      <div className={styles.container}>
        <Row gutter={rowGutter}>
          <Col span={12}>
            <Card title='折线图' bordered={false}>
              <ReactEChartsCore
                echarts={echarts}
                option={optionsLine}
                notMerge={true}
                lazyUpdate={true}
                onChartReady={onChartReady}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title='Card title' bordered={false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='Card title' bordered={false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='Card title' bordered={false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashBoard;
