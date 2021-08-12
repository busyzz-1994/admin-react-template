/*
 * @Author: busyzz
 * @Date: 2021-08-03 15:53:31
 * @Description:
 */
interface AMap {
  get: () => void;
  name: string;
}
/**
 * 声明window上属性的类型
 */
interface Window {
  map: AMap;
}
