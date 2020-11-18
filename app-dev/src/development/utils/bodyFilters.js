export const bodyFiltersWithLimit = (data, limit, entry) => {
  const limitData = data.slice(0, limit)
  const filterData = limitData.filter((property) => {
    return Object.keys(entry).every((keys) => entry[keys] === property[keys])
  })
  return filterData
}

export const bodyFilters = (data, entry) => {
  const filterData = data.filter((property) => {
    return Object.keys(entry).every((keys) => entry[keys] === property[keys])
  })
  return filterData
}

export const tagFilter = (data, entry) => {
  const tagIndex = data.findIndex((val) => val === Object.values(entry)[0])
  const tags = tagIndex !== -1 ? data[tagIndex] : []
  return [].concat(tags)
}
