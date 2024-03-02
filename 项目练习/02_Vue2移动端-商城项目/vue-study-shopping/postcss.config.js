module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // vw适配的标注屏幕的宽度 iPhone X
      // 设计图 750，改成 1 倍 => 适配375标准屏幕
      // 设计图 640，改成 1 倍 => 适配320标准屏幕
      viewportWidth: 375,
    }
  }
}