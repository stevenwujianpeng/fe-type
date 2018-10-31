const feType = require('fe-type');

// 基本使用类型
console.log(feType(true));
console.log(feType(undefined));
console.log(feType(null));
console.log(feType({name: 'test'}));
console.log(feType([1,2,3]));
console.log(feType(new Date()));
// 自定义
function ClassA() {
}

console.log(feType(new ClassA()));
