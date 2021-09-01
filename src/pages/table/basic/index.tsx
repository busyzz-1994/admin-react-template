/*
 * @Author: busyzz
 * @Date: 2021-09-01 11:55:16
 * @Description:
 */
import React, { FC } from 'react';
import { Alert, Space, Tag, Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';
type Combine<T, U> = T & U;
interface RecordType {
  name: string;
  age: number;
  address: string;
  tags: string[];
}
const data: Combine<RecordType, { key: string }>[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const columns: ColumnProps<RecordType>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size='middle'>
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const BasicTable: FC = () => {
  return (
    <div>
      <Alert
        message='更多 table API 查看：https://ant.design/components/table-cn/'
        type='info'
        showIcon
      />
      <Table style={{ marginTop: 20 }} columns={columns} dataSource={data} />
    </div>
  );
};

export default BasicTable;
