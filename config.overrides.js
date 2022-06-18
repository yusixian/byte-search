/*
 * @Author: cos
 * @Date: 2022-06-18 23:41:52
 * @LastEditTime: 2022-06-18 23:45:31
 * @LastEditors: cos
 * @Description:
 * @FilePath: \byte-search\config.overrides.js
 */
import { override, addLessLoader, fixBabelImports } from 'customize-cra';
export default override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
    },
    sourceMap: true,
  })
);
