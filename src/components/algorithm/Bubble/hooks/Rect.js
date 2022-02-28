/*
 * @Author: tanshaobo
 * @Date: 2022-01-30 13:57:56
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-02-28 17:32:43
 * @Description: 长方形构造
 * @FilePath: \trans-color\src\components\algorithm\maopao\hooks\Rect.js
 */

class Rect {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  draw() {
    this.ctx.beginPath() // 开始画一个
    this.ctx.fillRect(this.x, this.y, this.width, this.height) // 画一个
    this.ctx.closePath() // 结束画一个
  }
}

export default Rect
