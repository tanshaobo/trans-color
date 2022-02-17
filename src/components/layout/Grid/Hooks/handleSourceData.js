/*
 * @Author: tanshaobo
 * @Date: 2022-02-10 18:07:45
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-02-17 14:52:04
 * @Description: 处理原始数组 补充至列数倍数
 * @FilePath: \trans-color\src\components\layout\Grid\Hooks\handleSourceData.js
 */
import getShowList from '@/utils/getShowList'

const handleSourceData = (dataList, column, fillData) => {
  let remain = column - (dataList.length % column)
  dataList.length += remain
  dataList.fill(fillData, dataList.length - remain, dataList.length)
  return getShowList(dataList, column)
}

export default handleSourceData
