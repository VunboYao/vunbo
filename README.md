# 工具包

个人常用工具函数整合

## JavaScript

- getType: 获取返回数据类型
- isObject: 判断是否为object
- isNull: 判断是否为nul
- isUndefined: 判断是否为undefined

## to异步函数解决方案

```javascript
  function foo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('success')
      }, 2000)
    })
  }

  function bar() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('reject')
      }, 2000)
    })
  }
async function run() {
		// foo()是一个异步方法，若成功，err为null
    const [err, res] = await to(foo())
    console.log(err, res) // null, 'success'

		// bar()是一个异步方法，若失败，err2为抛出的错误
    const [err2, res2] = await to(bar())
    console.log(err2, res2) // reject undefined
  }
```
