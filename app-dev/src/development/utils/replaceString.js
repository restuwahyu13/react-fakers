export const replaceString = (data) => {
  return data.replace(/[&]/gi, '&_').replace(/^/gi, '_')
}
