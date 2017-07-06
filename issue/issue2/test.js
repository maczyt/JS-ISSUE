const plusFor = (name) => {
  let times = 0
  return function () {
    times ++
    return `为${name}+${times}s`
  }
}

QUnit.test('Testing_____闭包', (assert) => {
  assert.expect(2)
  const counter1 = plusFor('maczyt')
  let state = counter1()
  assert.ok(state, `state: ${state}`)
  state = counter1()
  assert.ok(state, `state: ${state}`)
})