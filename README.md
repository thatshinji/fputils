# [fputils](https://github.com/thatshinji/fputils)
[![](https://img.shields.io/badge/Powered%20by-fputils-brightgreen.svg)](https://github.com/thatshinji/fputils)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/thatshinji/fputils/blob/master/LICENSE)
[![npm](https://img.shields.io/badge/npm-0.0.1-orange.svg)](https://www.npmjs.com/package/@evageeks/fputils)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/thatshinji/fputils.svg)](http://isitmaintained.com/project/thatshinji/fputils "Percentage of issues still open")

**一个纯函数式的工具库**


## :star: 特性

- 支持ES6+或TypeScript编写源码，编译生成生产代码
- 集成代码风格校验(eslint)
- 集成单元测试环境（jest）
- 集成测试覆盖率（istanbul）
- 集成Github Action

## :rocket: 如何使用
```ts
import { curried } from '@evageeks/fputils';

const add = (x, y) => {
    return x + y
}

const curryAdd10 = curried(add)(10)
const curryAdd2 = curryAdd10(2) // 12
```
