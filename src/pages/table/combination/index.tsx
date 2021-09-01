/*
 * @Author: busyzz
 * @Date: 2021-09-01 11:55:16
 * @Description:
 */
import React, { FC, useState, useEffect } from 'react';
import { Alert, Table } from 'antd';
import { TableProps, TablePaginationConfig } from 'antd/lib/table';
import { SorterResult } from 'antd/lib/table/interface';
import { RecordType, ListQueryParams, ListResponse } from './type';
import { columns } from './column';
import { useSetState } from 'hooks';
import service from 'service';

const CombinationTable: FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Array<string>>([]);
  // table 相关数据
  const [tableInfo, setTableInfo] = useSetState<{
    data: RecordType[];
    pagination: TablePaginationConfig;
    loading: boolean;
  }>({
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
    },
    loading: false,
  });
  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };
  const handleTableChange: TableProps<RecordType>['onChange'] = (
    pagination,
    filters,
    sorter
  ) => {
    sorter = sorter as SorterResult<RecordType>;
    fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };
  const getRandomuserParams = (params: ListQueryParams) => {
    const newParams = {
      results: params.pagination.pageSize,
      page: params.pagination.current,
      ...params,
    };
    delete newParams.pagination;
    return newParams;
  };
  const fetch = (params: ListQueryParams) => {
    setTableInfo({ loading: true });
    service.table
      .getList<ListResponse>({
        params: getRandomuserParams(params),
      })
      .then(({ data }) => {
        setTableInfo({
          loading: false,
          data: data.results.map((item, index) => ({ ...item, index })),
          pagination: {
            ...params.pagination,
            total: 200,
          },
        });
      });
  };
  useEffect(() => {
    fetch({
      pagination: tableInfo.pagination,
    });
  }, []);
  return (
    <div>
      <Alert
        message='更多 table API 查看：https://ant.design/components/table-cn/'
        type='info'
        showIcon
      />
      <Table
        rowKey='email'
        style={{ marginTop: 20 }}
        columns={columns}
        dataSource={tableInfo.data}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
        loading={tableInfo.loading}
        onChange={handleTableChange}
        pagination={tableInfo.pagination}
        scroll={{ x: 1500 }}
      />
    </div>
  );
};

export default CombinationTable;
