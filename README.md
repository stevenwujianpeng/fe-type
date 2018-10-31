# fe-type

<html>
<p>
    <a href="#backers" alt="Backers on Open Collective">
        <img src="https://img.shields.io/github/issues/stevenwujianpeng/fe-classNames.svg" />
    </a>
    <a href="#backers" alt="Backers on Open Collective">
        <img src="https://img.shields.io/github/license/stevenwujianpeng/fe-classNames.svg" />
    </a>
</p>
</html>

准确给出变量的类型，修复typeof的问题，目前不支持ES6中的Set,Map等数据类型。


# Feature
- 基本类型 null undefined number string 
- 引用类型 Object Array Date RegExp 
- 自定义的构造函数

# Install
npm: 
> npm i fe-type

yarn:
> yarn add fe-type

# Usage

```javascript
import type from 'fe-type';

type(true) === 'boolean';
type(undefined) === 'undefined';
type(null) === 'null';
type({name: 'test'}) === 'Object';
type([1,2,3]) === 'Array';
type(new Date()) === 'Date';

// 自定义
function ClassA () {}

type(new ClassA()) === 'ClassA'
```

# Test Coverage

```
  feType
    ✓ undefined
    ✓ null
    ✓ number
    ✓ boolean
    ✓ string
    ✓ Array
    ✓ Object
    ✓ Date
    ✓ RegExp
    ✓ 自定义的构造函数


  10 passing (12ms)

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |      100 |      100 |      100 |                   |
 index.js |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|


```

