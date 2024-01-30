import { directusNode } from './directus-node'

describe('directusNode', () => {
  it('should work', () => {
    expect(directusNode()).toEqual('directus-node')
  })
})
