import { bodyFilters, bodyFiltersWithLimit, tagFilter } from '../src/utils/bodyFilters'

const bodyData = [
  { id: 1, name: 'jane doe' },
  { id: 2, name: 'john doe' }
]

const tagData = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']

describe('group all test bodyFilters utils', () => {
  it('bodyFilters test matching value', () => {
    const filters = bodyFilters(bodyData, { id: 1, name: 'jane doe' })
    expect(filters.length).toStrictEqual(1)
  })

  it('bodyFiltersWithLimit test matching value', () => {
    const filters = bodyFiltersWithLimit(bodyData, 1, { id: 1, name: 'jane doe' })
    expect(bodyData.length).not.toStrictEqual(filters)
  })

  it('tagFilter test matching value', () => {
    const filters = tagFilter(tagData, ['rabu'])
    expect(filters.length).toStrictEqual(1)
  })
})
