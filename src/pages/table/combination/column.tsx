/*
 * @Author: busyzz
 * @Date: 2021-09-01 15:22:16
 * @Description:
 */
import { ColumnProps } from 'antd/lib/table';
import { RecordType } from './type';
export const columns: ColumnProps<RecordType>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: 100,
    fixed: 'left',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: 100,
    fixed: 'left',
  },
  { title: 'Column 1', dataIndex: 'email', key: '1' },
  { title: 'Column 2', dataIndex: 'email', key: '2' },
  { title: 'Column 3', dataIndex: 'email', key: '3' },
  { title: 'Column 4', dataIndex: 'email', key: '4' },
  { title: 'Column 5', dataIndex: 'email', key: '5' },
  { title: 'Column 6', dataIndex: 'email', key: '6' },
  { title: 'Column 7', dataIndex: 'email', key: '7' },
  { title: 'Column 8', dataIndex: 'email', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];
