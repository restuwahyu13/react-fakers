import React, { useEffect } from 'react'
import propTypes from 'prop-types'
import { paramsBindRefs } from '../utils/paramsBind'
import { bodyFilters, bodyFiltersWithLimit, swrFilter } from '../utils/bodyFilters'
import { errorHandlers } from '../utils/errorHandlers'

/**
 * @description Dummy is a service provider for displaying dummy data
 */

const StarWars = (props) => {
  const { success, error, type, params, options, filters } = props

  error && error(errorHandlers({ type: 'propertyHandler', props }))

  useEffect(() => {
    onCheck()
  }, [])

  const onCheck = () => {
    switch (type) {
      case 'films':
      case 'people':
      case 'planets':
      case 'species':
      case 'starships':
      case 'vehicles':
        onFetch()
        break
      default:
        return []
    }
  }

  /**
   * @description this method for fetching all data type from startwars
   */

  const onFetch = () => {
    const paramsBindFetch = params && paramsBindRefs({ ...params })

    switch (typeof params) {
      case 'object':
        if (params[type].refs) {
          onFetchRefs(paramsBindFetch)
        } else {
          params[type] &&
            window
              .fetch(`https://swapi.dev/api/${type}/${paramsBindFetch.id}`)
              .then((res) => {
                if (res.ok) return res.json()
                return Promise.reject(res)
              })
              .then((res) => {
                const fetchData = []
                const filterCount = Object.keys(filters).length

                const data = res && [].concat(res)
                const filtersData = filterCount > 0 && res && bodyFilters(data, filters)
                filtersData && res && fetchData.push(filtersData)
                filterCount < 1 && res && fetchData.push(data)
                fetchData && success(fetchData[0])
              })
              .catch((err) => err && error(errorHandlers({ type: 'httpErrorHandlers', error: err })))
        }
        break
      default:
        window
          .fetch(`https://swapi.dev/api/${type}`)
          .then((res) => {
            if (res.ok) return res.json()
            return Promise.reject(res)
          })
          .then((res) => {
            const fetchData = []
            const filterCount = Object.keys(filters).length

            if (options.limit === 0) {
              const filtersData = filterCount > 0 && res && bodyFilters(res.results, filters)
              filtersData && res && fetchData.push(filtersData)
              filterCount < 1 && res && fetchData.push(res.results)
              fetchData && success(fetchData[0])
            } else {
              const limitFiltersData = filterCount > 0 && res && bodyFiltersWithLimit(res.results, options.limit, filters)
              const limitData = res && res.results.slice(0, options.limit)
              limitFiltersData && res && fetchData.push(limitFiltersData)
              filterCount < 1 && res && fetchData.push(limitData)
              fetchData && success(fetchData[0])
            }
          })
          .catch((err) => err && error(errorHandlers({ type: 'httpErrorHandlers', error: err })))
    }
  }

  const onFetchRefs = (paramsRefs) => {
    window
      .fetch(`https://swapi.dev/api/${paramsRefs.refs}/${paramsRefs.id}`)
      .then((res) => {
        if (res.ok) return res.json()
        return Promise.reject(res)
      })
      .then((res) => {
        const fetchData = []
        const filterCount = Object.keys(filters).length

        const data = res && [].concat(res)
        const filtersData = filterCount > 0 && res && swrFilter(data, filters)
        filtersData && res && fetchData.push(filtersData)
        filterCount < 1 && res && fetchData.push(data)
        fetchData && success(fetchData[0])
      })
      .catch((err) => err && error(errorHandlers({ type: 'httpErrorHandlers', error: err })))
  }

  return <div />
}

StarWars.propTypes = {
  success: propTypes.func,
  error: propTypes.func,
  type: propTypes.string,
  params: propTypes.object,
  filters: propTypes.object,
  options: propTypes.object
}

StarWars.defaultProps = {
  type: 'people',
  filters: {},
  options: { limit: 0 }
}

export default StarWars
