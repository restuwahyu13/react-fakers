import { useEffect, useState } from 'react'
import fetch from 'isomorphic-fetch'
import { paramsBindDeep } from '../utils/paramsBind'
import { bodyFilters, bodyFiltersWithLimit } from '../utils/bodyFilters'
import { errorHandlers } from '../utils/errorHandlers'

/**
 * @description useJsonPlaceHolder is a service provider for displaying dummy data from Json Place Holder provider
 */

const useJsonPlaceHolder = (props) => {
  const { type, params, effect, options, filters } = { ...props }

  const [values, setValues] = useState({
    loading: false,
    error: null,
    success: [],
    stateType: !type ? 'users' : type,
    stateParams: !params ? {} : params,
    stateEffect: !effect ? false : effect,
    stateFilters: !filters ? {} : filters,
    stateOptions: !options ? { limit: 0 } : options
  })

  const { loading, error, success, stateType, stateParams, stateEffect, stateOptions, stateFilters } = values

  useEffect(() => {
    onState()
    onCheck()

    return () => {
      if (success.length > 0) {
        setValues({
          loading: false,
          error: null,
          success: [],
          stateType: 'users',
          stateParams: {},
          stateEffect: false,
          stateFilters: {},
          stateOptions: { limit: 0 }
        })
      }
    }
  }, [])

  const onState = () => {
    setValues({
      ...values,
      stateType: stateType !== 'users' ? stateType : 'users',
      stateParams: Object.keys(stateParams).length > 0 ? stateParams : {},
      stateEffect: stateEffect !== false ? stateEffect : false,
      stateFilters: Object.keys(stateFilters).length > 0 ? stateFilters : {},
      stateOptions: stateOptions.limit !== 0 ? stateOptions : { limit: 0 }
    })
  }

  const onCheck = () => {
    switch (stateType) {
      case 'posts':
      case 'comments':
      case 'albums':
      case 'photos':
      case 'todos':
      case 'users':
        stateEffect && onFetch()
        break
      default:
        return []
    }
  }

  const onHandler = () => {
    window.addEventListener('submit', (e) => e.preventDefault())
    switch (stateType) {
      case 'posts':
      case 'comments':
      case 'albums':
      case 'photos':
      case 'todos':
      case 'users':
        !stateEffect && onFetch()
        window.removeEventListener('submit', (e) => e.preventDefault())
        break
      default:
        return []
    }
  }

  /**
   * @description this method for fetching all data type from json placeholder
   */

  const onFetch = () => {
    const paramsBindFetch = stateParams && paramsBindDeep({ ...stateParams })

    switch (typeof params) {
      case 'object':
        fetch(`https://jsonplaceholder.typicode.com/${stateType}?${paramsBindFetch.value}`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
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
              res && fetchData.push(res)
              fetchData && setValues({ ...values, loading: true, success: fetchData[0] })
            } else {
              const limitFiltersData = filterCount > 0 && res && bodyFiltersWithLimit(res, stateOptions.limit, stateFilters)
              const limitData = res && res.slice(0, stateOptions.limit)
              limitFiltersData && res && fetchData.push(limitFiltersData)
              filterCount < 1 && res && fetchData.push(limitData)
              fetchData && setValues({ ...values, loading: true, success: fetchData[0] })
            }
          })
          .catch((err) => setValues({ ...values, error: errorHandlers({ type: 'httpErrorHandlers', error: err }) }))
        break
      default:
        fetch(`https://jsonplaceholder.typicode.com/${stateType}`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
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
              const filtersData = filterCount > 0 && res && bodyFilters(res, stateFilters)
              filtersData && res && fetchData.push(filtersData)
              filterCount < 1 && res && fetchData.push(res)
              fetchData && setValues({ ...values, loading: true, success: fetchData[0] })
            } else {
              const limitFiltersData = filterCount > 0 && res && bodyFiltersWithLimit(res, stateOptions.limit, stateFilters)
              const limitData = res && res.slice(0, stateOptions.limit)
              limitFiltersData && res && fetchData.push(limitFiltersData)
              filterCount < 1 && res && fetchData.push(limitData)
              fetchData && setValues({ ...values, loading: true, success: fetchData[0] })
            }
          })
          .catch((err) => err && setValues({ ...values, error: errorHandlers({ type: 'httpErrorHandlers', error: err }) }))
    }
  }

  return { success: loading && success, handler: !stateEffect ? onHandler : (e) => e.preventDefault(), error, loading }
}

export default useJsonPlaceHolder
