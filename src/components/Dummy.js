import React, { useEffect } from 'react'
import fetch from 'isomorphic-fetch'
import propTypes from 'prop-types'
import { paramsBindDeepRefs } from '../utils/paramsBind'
import { bodyFilters, bodyFiltersWithLimit, tagFilter } from '../utils/bodyFilters'
import { errorHandlers } from '../utils/errorHandlers'

/**
 * @description Dummy is a service provider for displaying dummy data
 */

const Dummy = (props) => {
  const { success, error, type, apiKey, params, options, filters } = props

  useEffect(() => {
    onCheck()
  }, [])

  const onCheck = () => {
    switch (type) {
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
    const url = `https://dummyapi.io/data/api/${type}`
    const paramsBindFetch = params && paramsBindDeepRefs({ ...params }, url)

    switch (typeof params) {
      case 'object':
        fetch(paramsBindFetch.url, {
          method: 'GET',
          headers: {
            'app-id': `${apiKey}`,
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
            const filterCount = Object.keys(filters).length

            if (options.limit === 0) {
              const data = !res.data ? [].concat(res) : res.data
              const filtersData = filterCount > 0 && res && bodyFilters(data, filters)
              filtersData && res && fetchData.push(filtersData)
              filterCount < 1 && res && fetchData.push(data)
              fetchData && success(fetchData[0])
            } else {
              const limitFiltersData = filterCount > 0 && res && bodyFiltersWithLimit(res.data, options.limit, filters)
              const limitData = res && res.data.slice(0, options.limit)
              limitFiltersData && res && fetchData.push(limitFiltersData)
              filterCount < 1 && res && fetchData.push(limitData)
              fetchData && success(fetchData[0])
            }
          })
          .catch((err) => err && error(errorHandlers({ type: 'httpErrorHandlers', error: err })))
        break
      default:
        fetch(`https://dummyapi.io/data/api/${type}`, {
          headers: {
            'app-id': `${apiKey}`,
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
            const filterCount = Object.keys(filters).length

            if (type !== 'tag') {
              if (options.limit === 0) {
                const filtersData = filterCount > 0 && res && bodyFilters(res.data, filters)
                filtersData && res && fetchData.push(filtersData)
                filterCount < 1 && res && fetchData.push(res.data)
                fetchData && success(fetchData[0])
              } else {
                const limitFiltersData = filterCount > 0 && res && bodyFiltersWithLimit(res.data, options.limit, filters)
                const limitData = res && res.data.slice(res.data, 0, options.limit)
                limitFiltersData && res && fetchData.push(limitFiltersData)
                filterCount < 1 && res && fetchData.push(limitData)
                fetchData && success(fetchData[0])
              }
            } else if (options.limit === 0) {
              const filtersData = filterCount > 0 && res && tagFilter(res.data, filters)
              filtersData && res && fetchData.push(filtersData)
              filterCount < 1 && res && fetchData.push(res.data)
              fetchData && success(fetchData[0])
            } else {
              const filtersData = filterCount > 0 && res && tagFilter(res.data, filters)
              const limitData = res && res.data.slice(0, options.limit)
              filtersData && res && fetchData.push(filtersData)
              filterCount < 1 && res && fetchData.push(limitData)
              fetchData && success(fetchData[0])
            }
          })
          .catch((err) => err && error(errorHandlers({ type: 'httpErrorHandlers', error: err })))
    }
  }

  return <>{!success && new Error(errorHandlers({ type: 'propertyHandler', props }).message)}</>
}

Dummy.propTypes = {
  success: propTypes.func,
  error: propTypes.func,
  type: propTypes.string,
  apiKey: propTypes.string,
  params: propTypes.object,
  filters: propTypes.object,
  options: propTypes.object
}

Dummy.defaultProps = {
  type: 'user',
  apiKey: '5faa1fab5317ae96860c0be3',
  filters: {},
  options: { limit: 0 }
}

export default Dummy
