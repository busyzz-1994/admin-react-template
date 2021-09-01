/*
 * @Author: busyzz
 * @Date: 2021-09-01 16:24:10
 * @Description:
 */
import { TablePaginationConfig } from 'antd/lib/table';
import { SorterResult } from 'antd/lib/table/interface';
/**
 * @desc 请求参数类型
 */
export interface ListQueryParams {
  sortField?: SorterResult<RecordType>['field'];
  sortOrder?: SorterResult<RecordType>['order'];
  pagination: TablePaginationConfig;
  [name: string]: any;
}
/**
 * @desc 每个列表项类型
 */
export interface RecordType {
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: 'male' | 'female';
  email: string;
}
/**
 * @desc 服务端返回类型
 */
export interface ListResponse {
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
  results: RecordType[];
}
