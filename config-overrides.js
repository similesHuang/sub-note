// 在根目录下新增config-overrides.js文件并新增如下配置
const { name } = require("./package");

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;

    // 新增 Less 支持
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);
    
    // 添加 less-loader
    const lessRule = {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,  // 如果需要使用 Less 的 JavaScript 功能
              modifyVars: {            // 可以在这里定义全局 Less 变量
                // '@primary-color': '#1DA57A' // 示例：修改主题色
              }
            }
          }
        }
      ]
    };
    
    // 将 less 规则插入到 oneOf 数组的开头
    oneOfRule.oneOf.unshift(lessRule);
    return config;
  }
};