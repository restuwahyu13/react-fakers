import { paramsBind } from '../src/utils/paramsBind'
import { replaceString } from '../src/utils/replaceString'

it('replaceString string matching value', () => {
  const params = paramsBind({ quantity: 10, local: 10 })
  expect(replaceString(params)).toStrictEqual('_quantity=10&_local=10')
})
