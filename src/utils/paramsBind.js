export const paramsBind = (property) => {
  if (typeof property === 'object' && property !== undefined && property !== null) {
    const params = new URLSearchParams(property)
    return params.toString()
  }
}

export const paramsBindDeep = (property) => {
  if (typeof property === 'object' && property !== undefined && property !== null) {
    const value = Object.values(property)[0]
    const params = new URLSearchParams(value)
    return { value: params.toString() }
  }
}

export const paramsBindDeepRefs = (property, url) => {
  if (typeof property === 'object' && property !== undefined && property !== null) {
    const storeRefs = []
    const value = Object.values(property)[0]
    const params = new URLSearchParams(value).toString()
    const getIdRefs = params.replace(/(id|tag)+(=)|(refs)/g, '').replace(/&=/g, '/')
    const getRefs = params.replace(/(id|tag)+(=)|(refs)/g, '').replace(/(&|=|\d)/g, '')
    storeRefs.push(getRefs)
    const matchRefs = storeRefs.indexOf(getRefs) !== -1 ? `${url}/${getIdRefs}` : `${url}/${value}`
    return { url: matchRefs }
  }
}

export const paramsBindRefs = (property) => {
  if (typeof property === 'object' && property !== undefined && property !== null) {
    const value = Object.values(property)[0]
    const params = new URLSearchParams(value).toString()
    const getIdRefs = params.replace(/(id|tag)+(=)|(refs)/g, '').replace(/&=/g, '/')
    return { id: getIdRefs.split('/')[0], refs: getIdRefs.split('/')[1] }
  }
}
