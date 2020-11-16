import { useEffect, useState } from 'react'
import fetch from 'isomorphic-fetch'
import _ from 'lodash'
import { paramsBindDeepRefs } from '../../utils/paramsBind'
import { bodyFilters, bodyFiltersWithLimit, tagFilter } from '../../utils/bodyFilters'
import { errorHandlers } from '../../utils/errorHandlers'

/**
 * @description useDummy is a service provider for displaying dummy data
 */

const useDummy = (props) => {
  const { type, apiKey, params, options, filters } = { ...props }

  const [values, setValues] = useState({
    success: [],
    error: null,
    stateType: !type ? 'user' : type,
    stateApiKey: !apiKey ? '5faa1fab5317ae96860c0be3' : apiKey,
    stateParams: !params ? {} : params,
    stateOptions: !options ? { limit: 0 } : options,
    stateFilters: !filters ? {} : filters
  })

  const { success, error, stateType, stateApiKey, stateParams, stateOptions, stateFilters } = values

  useEffect(() => {
    onState()
    onCheck()

    return () => {
      if (success.length > 0) {
        setValues({
          success: [],
          error: null,
          stateType: 'user',
          stateParams: {},
          stateApiKey: '5faa1fab5317ae96860c0be3',
          stateOptions: { limit: 0 },
          stateFilters: {}
        })
      }
    }
  }, [])

  const onState = () => {
    setValues({
      ...values,
      stateType: stateType !== 'user' && stateType,
      stateApiKey: stateApiKey !== '5faa1fab5317ae96860c0be3' && stateApiKey,
      stateParams: Object.keys(stateParams).length < 1 && stateParams,
      stateOptions: stateOptions.limit !== 0 && stateOptions,
      stateFilters: Object.keys(stateFilters).length < 1 && stateFilters
    })
  }

  const onCheck = () => {
    switch (stateType) {
      case 'user':
      case 'post':
      case 'tag':
        onFetch()
        break
      default:
        return []
    }
  }

  /**
   * @description this method for fetching all data type from dummyapi
   */

  const onFetch = () => {
    const url = `https://dummyapi.io/data/api/${stateType}`
    const paramsBindFetch = paramsBindDeepRefs({ ...stateParams }, url)

    switch (typeof params) {
      case 'object':
        fetch(paramsBindFetch.url, {
          method: 'GET',
          headers: {
            'app-id': `${stateApiKey}`,
            accept: 'application/json',
            'content-type': 'application/json'
          }
        })
          .then((res) => {
            if (res.ok) return res.json()
            return Promise.reject(res)
          })
          .then((res) => {
            const fetchData = []
            const filterCount = Object.keys(stateFilters).length

            if (stateOptions.limit === 0) {
              const data = !res.data ? [].concat(res) : res.data
              const filtersData = filterCount > 0 && res && bodyFilters(res.data, stateFilters)
              filtersData && res && fetchData.push(filtersData)
              filterCount < 1 && res && fetchData.push(data)
              fetchData && setValues({ ...values, success: fetchData[0] })
            } else {
              const limitData = res && _.slice(res.data, 0, stateOptions.limit)
              const limitFiltersData = filterCount > 0 && res && bodyFiltersWithLimit(res.data, stateOptions.limit, stateFilters)
              limitFiltersData && res && fetchData.push(limitFiltersData)
              filterCount < 1 && res && fetchData.push(limitData)
              fetchData && setValues({ ...values, success: fetchData[0] })
            }
          })
          .catch((err) => err && setValues({ ...values, error: errorHandlers({ type: 'httpErrorHandlers', error: err }) }))
        break
      default:
        fetch(`https://dummyapi.io/data/api/${stateType}`, {
          headers: {
            'app-id': `${stateApiKey}`,
            accept: 'application/json',
            'content-type': 'application/json'
          }
        })
          .then((res) => {
            if (res.ok) return res.json()
            return Promise.reject(res)
          })
          .then((res) => {
            const fetchData = []
            const filterCount = Object.keys(stateFilters).length

            if (stateType !== 'tag') {
              if (stateOptions.limit === 0) {
                const filtersData = filterCount > 0 && res && bodyFilters(res.data, stateFilters)
                filtersData && res && fetchData.push(filtersData)
                filterCount < 1 && res && fetchData.push(res.data)
                fetchData && setValues({ ...values, success: fetchData[0] })
              } else {
                const limitFiltersData = filterCount > 0 && res && bodyFiltersWithLimit(res.data, stateOptions.limit, stateFilters)
                const limitData = res && _.slice(res.data, 0, stateOptions.limit)
                limitFiltersData && res && fetchData.push(limitFiltersData)
                filterCount < 1 && res && fetchData.push(limitData)
                fetchData && setValues({ ...values, success: fetchData[0] })
              }
            } else if (stateOptions.limit === 0) {
              const filtersData = filterCount > 0 && res && tagFilter(res.data, stateFilters)
              filtersData && res && fetchData.push(filtersData)
              filterCount < 1 && res && fetchData.push(res.data)
              fetchData && setValues({ ...values, success: fetchData[0] })
            } else {
              const filtersData = filterCount > 0 && res && tagFilter(res.data, stateFilters)
              const limitData = res && _.slice(res.data, 0, stateOptions.limit)
              filtersData && res && fetchData.push(filtersData)
              filterCount < 1 && res && fetchData.push(limitData)
              fetchData && setValues({ ...values, success: fetchData[0] })
            }
          })
          .catch((err) => err && setValues({ ...values, error: errorHandlers({ type: 'httpErrorHandlers', error: err }) }))
    }
  }

  return { success, error }
}

export default useDummy
