> 完成正则表达式`TRIM_REGX`，可以用它来删除一个字符串前后多余的空白字符

例如:

```
' ScriptOJ   '.replace(TRIM_REGX, '') // => ScriptOJ
```

答案:

```
const TRIM_REGX = /^\s+|\s+$/g
```

[测试用例](./index.test.html)