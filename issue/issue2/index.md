> 完成一个生成计数器的函数 plusFor，调用它会返回一个计数器。计数器本身也是一个函数，每次调用会返回一个字符串。

达到以下的效果：

```
const counter1 = plusFor('小明')
counter1() // => 为小明+1s
counter1() // => 为小明+2s
counter1() // => 为小明+3s
...

const counter2 = plusFor('李梅')
counter2() // => 为李梅+1s
counter2() // => 为李梅+2s
counter2() // => 为李梅+3s
...
```

答案:

```
const plusFor = (name) => {
  let times = 0
  return function () {
    times ++
    return `为${name}+${times}s`
  }
}
```

[测试用例](./index.test.html)

