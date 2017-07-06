const proposeToMissHan = (isOK) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOK) resolve('ok')
      else reject('no')
    }, 20)
  })
}

function assert(expr, msg) {
  if (!expr) throw new Error(msg || 'failed');
}

describe('求婚咯, (´▽`ʃ♡ƪ)', () => {
  it('求婚成功', () => {
    proposeToMissHan(true)
      .then((reply) => {
        assert(reply === 'ok')
      })
  })

  it('求婚失败', () => {
    proposeToMissHan(false)
      .catch((reply) => {
        assert(reply === 'no')
      })
  })
})