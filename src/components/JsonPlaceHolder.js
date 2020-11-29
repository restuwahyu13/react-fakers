import React, { useEffect } from 'react'
import fetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'
import { paramsBindDeep } from '../utils/paramsBind'
import { bodyFilters, bodyFiltersWithLimit } from '../utils/bodyFilters'
import { errorHandlers } from '../utils/errorHandlers'

/**
 * @description JsonPlaceHolder is a service provider for displaying dummy data
 */

const JsonPlaceHolder = (props) => {
  const { success, error, type, params, options, filters } = props

  useEffect(() => {
    onCheck()
  }, [])

  const onCheck = () => {
    switch (type) {
      case 'posts':
      case 'comments':
      case 'albums':
      case 'photos':
      case 'todos':
      case 'users':
        onFetch()
        break
      default:
        return []
    }
  }

  /**
   * @description this method for fetching all data type from json placeholder
   */

  const onFetch = () => {
    const paramsBindFetch = params && paramsBindDeep({ ...params })

    switch (typeof params) {
      case 'object':
        fetch(`https://jsonplaceholder.typicode.com/${type}?${paramsBindFetch.value}`)
          .then((res) => {
            if (res.ok) return res.json()
            return Promise.reject(res)
          })
          .then((res) => {
            const fetchData = []
            const filterCount = Object.keys(filters).length

            if (options.limit === 0) {
              fetchData.push(res)
              fetchData && success(fetchData[0])
            } else {
              const limitData = res && res.slice(0, options.limit)
              filterCount > 0 && res && fetchData.push(bodyFiltersWithLimit(res, options.limit, filters))
              filterCount < 1 && res && fetchData.push(limitData)
              fetchData && success(fetchData[0])
            }
          })
          .catch((err) => err && error(errorHandlers({ type: 'httpErrorHandlers', error: err })))
        break
      default:
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
          .then((res) => {
            if (res.ok) return res.json()
            return Promise.reject(res)
          })
          .then((res) => {
            const fetchData = []
            const filterCount = Object.keys(filters).length

            if (options.limit === 0) {
              filterCount > 0 && res && fetchData.push(bodyFilters(res, filters))
              filterCount < 1 && res && fetchData.push(res)
              fetchData && success(fetchData[0])
            } else {
              const limitData = res && res.slice(0, options.limit)
              filterCount > 0 && res && fetchData.push(bodyFiltersWithLimit(res, options.limit, filters))
              filterCount < 1 && res && fetchData.push(limitData)
              fetchData && success(fetchData[0])
            }
          })
          .catch((err) => err && error(errorHandlers({ type: 'httpErrorHandlers', error: err })))
    }
  }

  return <>{!success && new Error(errorHandlers({ type: 'propertyHandler', props }).message)}</>
}

JsonPlaceHolder.propTypes = {
  success: PropTypes.func,
  error: PropTypes.func,
  type: PropTypes.string,
  params: PropTypes.object,
  options: PropTypes.object,
  filters: PropTypes.object
}

JsonPlaceHolder.defaultProps = {
  type: 'users',
  options: { limit: 0 },
  filters: {}
}

export default JsonPlaceHolder
