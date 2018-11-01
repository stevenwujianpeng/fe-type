module.exports = {
  "env": {
    "browser": true, // 浏览器中的环境
    "commonjs": true,  // commonjs 比如：module exports
    "node": true, // node运行环境
    "es6": true, // 识别ES6中的 Set Promise 等新特性和语法
    "mocha": true,
  },
  "extends": "eslint:recommended", // 继承eslint标准库的集合
  "parserOptions": {
    "ecmaVersion": "6", // 不同阶段的es6，特殊情况下需要自己设置
    "sourceType": "module", // 如果你的代码是 ECMAScript 语法
    // "ecmaFeatures": { // 假如需要支持JSX语法
    //   "jsx": true
    // }
  },
  "rules": {} // 自定义规则的细节
};
