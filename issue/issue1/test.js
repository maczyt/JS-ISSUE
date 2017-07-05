let testArr = [
  ' zyt',
  'zyt ',
  ' zyt ',
  '     zyt    '
]

let TRIM_REGX = /^\s+|\s+$/g

testArr.forEach(function (item, idx) {
  QUnit.test('测试: '+ item + '原本长度为: ' + item.length, function (assert) {
    assert.equal(item.replace(TRIM_REGX, ''), 'zyt', '[' + item.replace(TRIM_REGX, '=') + '] -> zyt' )
  })
})