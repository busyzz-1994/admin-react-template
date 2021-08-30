import { ECOption } from './index';
import * as echarts from 'echarts/core';
const label = [233, 233, 200, 180, 199, 233, 210, 180];
const value = [233, 233, 200, 180, 199, 233, 210, 180];
// 折线图配置
export const optionsLine: ECOption = {
  backgroundColor: '#101e44',
  grid: {
    top: 100,
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(255,255,255,0)', // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: 'rgba(255,255,255,1)', // 100% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(255,255,255,0)', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        formatter: '{value}',
        fontSize: 14,
        margin: 20,
        color: '#7ec7ff',
      },
      axisLine: {
        lineStyle: {
          color: '#243753',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#243753',
        },
      },
      axisTick: {
        show: false,
      },
      data: label,
    },
  ],
  yAxis: [
    {
      boundaryGap: false,
      type: 'value',
      axisLabel: {
        color: '#7ec7ff',
      },
      nameTextStyle: {
        color: '#fff',
        fontSize: 12,
        lineHeight: 40,
      },
      splitLine: {
        lineStyle: {
          color: '#243753',
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#283352',
        },
      },
      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: '报名',
      type: 'line',
      smooth: true,
      showSymbol: true,
      symbolSize: 8,
      zlevel: 3,
      itemStyle: {
        color: '#19a3df',
        borderColor: '#a3c8d8',
      },
      lineStyle: {
        width: 3,
        color: '#19a3df',
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: 'rgba(88,255,255,0.2)',
            },
            {
              offset: 0.8,
              color: 'rgba(88,255,255,0)',
            },
          ],
          false
        ),
      },
      data: value,
    },
  ],
};

// 柱状图
export const optionsBar: ECOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};

// 饼图
export const optionsPie: ECOption = {
  title: {
    text: '某站点用户访问来源',
    subtext: '纯属虚构',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
        { value: 484, name: '联盟广告' },
        { value: 300, name: '视频广告' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};

// 百分比
export const optionsProgress = {
  backgroundColor: '#222',
  title: {
    text: `{a|${33}}{b|%}`,
    x: 'center',
    y: 'center',
    subtext: '增长',
    subtextStyle: {
      color: '#fff',
      fontSize: 14,
    },
    itemGap: 2,
    textStyle: {
      rich: {
        a: {
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
        },
        b: {
          color: '#fff',
          fontSize: 14,
        },
      },
    },
  },
  series: [
    {
      type: 'liquidFill',
      waveAnimation: 20,
      radius: '100%',
      data: [0.35, 0.3],
      color: ['rgba(83, 211, 228, 0.79)', 'rgba(83, 211, 228, 1)'],
      amplitude: 5,
      backgroundStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.55,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(7, 112, 135, 0.01)', // 100% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(7, 112, 135, 0.69)',
            },
          ],
          globalCoord: false, // 缺省为 false
        },
      },
      outline: {
        show: false,
      },
      label: {
        show: false,
      },
    },
  ],
};

// 环形图
var data = [
  {
    name: '装备制造',
    value: 54,
  },
  {
    name: '现代材料',
    value: 44,
  },
  {
    name: '新能源',
    value: 35,
  },
  {
    name: '新一代信息技术',
    value: 30,
  },
  {
    name: '商贸物流',
    value: 20,
  },
];

const titleArr = [],
  seriesArr = [];
const colors = [
  ['#389af4', '#dfeaff'],
  ['#ff8c37', '#ffdcc3'],
  ['#ffc257', '#ffedcc'],
  ['#fd6f97', '#fed4e0'],
  ['#a181fc', '#e3d9fe'],
];
data.forEach(function (item, index) {
  titleArr.push({
    text: item.name,
    left: index * 20 + 10 + '%',
    top: '77%',
    textAlign: 'center',
    textStyle: {
      fontWeight: 'normal',
      fontSize: '16',
      color: colors[index][0],
      textAlign: 'center',
    },
  });
  seriesArr.push({
    name: item.name,
    type: 'pie',
    clockWise: false,
    radius: [60, 70],
    itemStyle: {
      normal: {
        color: colors[index][0],
        shadowColor: colors[index][0],
        shadowBlur: 0,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
      },
    },
    hoverAnimation: false,
    center: [index * 20 + 10 + '%', '50%'],
    data: [
      {
        value: item.value,
        label: {
          normal: {
            formatter: function (params) {
              return params.value + '%';
            },
            position: 'center',
            show: true,
            textStyle: {
              fontSize: '20',
              fontWeight: 'bold',
              color: colors[index][0],
            },
          },
        },
      },
      {
        value: 100 - item.value,
        name: 'invisible',
        itemStyle: {
          normal: {
            color: colors[index][1],
          },
          emphasis: {
            color: colors[index][1],
          },
        },
      },
    ],
  });
});
export const optionsArray: ECOption = {
  backgroundColor: '#fff',
  title: titleArr,
  series: seriesArr,
};
