const test = require('ava')
const OpenProps = require('../dist/props.cjs')

test('Import should have colors', async t => {
  t.assert(Object.keys(OpenProps.darkColors).includes('--base-1'))
  t.assert(Object.keys(OpenProps.lightColors).includes('--base-1'))
})
