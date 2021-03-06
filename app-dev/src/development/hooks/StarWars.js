import { useEffect, useState } from 'react'
import fetch from 'isomorphic-fetch'
import { paramsBindRefs } from '../utils/paramsBind'
import { bodyFilters, bodyFiltersWithLimit, swrFilter } from '../utils/bodyFilters'
import { errorHandlers } from '../utils/errorHandlers'

/**
 * @description useJsonPlaceHolder is a service provider for displaying dummy data from SWP Provider
 */

const useStarWars = (props) => {
  const { type, params, effect, options, filters } = { ...props }

  const [values, setValues] = useState({
    success: [],
    error: null,
    loading: false,
    stateType: !type ? 'people' : type,
    stateParams: !params ? {} : params,
    stateEffect: !effect ? false : effect,
    stateFilters: !filters ? {} : filters,
    stateOptions: !options ? { limit: 0 } : options
  })

  const { success, error, loading, stateType, stateParams, stateEffect, stateOptions, stateFilters } = values

  useEffect(() => {
    onState()
    onCheck()
    return () => {
      if (success.length > 0) {
        setValues({
          success: [],
          error: null,
          loading: false,
          stateType: 'people',
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
      stateType: stateType !== 'people' ? stateType : 'people',
      stateParams: Object.keys(stateParams).length > 0 ? stateParams : {},
      stateEffect: stateEffect !== false ? stateEffect : false,
      stateFilters: Object.keys(stateFilters).length > 0 ? stateFilters : {},
      stateOptions: stateOptions.limit !== 0 ? stateOptions : { limit: 0 }
    })
  }

  const onCheck = () => {
    switch (stateType) {
      case 'films':
      case 'people':
      case 'planets':
      case 'species':
      case 'starships':
      case 'vehicles':
        stateEffect && onFetch()
        break
      default:
        return []
    }
  }

  const onHandler = () => {
    window.addEventListener('submit', (e) => e.preventDefault())
    switch (stateType) {
      case 'films':
      case 'people':
      case 'planets':
      case 'species':
      case 'starships':
      case 'vehicles':
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
    const paramsBindFetch = params && paramsBindRefs({ ...stateParams })
    const stateParamsRefs = stateParams && stateParams[stateType] && stateParams[stateType].refs

    switch (typeof params) {
      case 'object':
        if (stateParamsRefs) {
          onFetchRefs(paramsBindFetch)
        } else {
          stateParams[stateType] &&
            fetch(`https://swapi.dev/api/${stateType}/${paramsBindFetch.id}`)
              .then((res) => {
                if (res.ok) return res.json()
                return Promise.reject(res)
              })
              .then((res) => {
                const fetchData = []
                const filterCount = Object.keys(stateFilters).length

                const data = res && [].concat(res)
                const filtersData = filterCount > 0 && res && bodyFilters(data, stateFilters)
                filtersData && res && fetchData.push(filtersData)
                filterCount < 1 && res && fetchData.push(data)
                fetchData && setValues({ ...values, loading: true, success: fetchData[0] })
              })
              .catch((err) => err && setValues({ ...values, error: errorHandlers({ type: 'httpErrorHandlers', error: err }) }))
        }
        break
      default:
        fetch(`https://swapi.dev/api/${stateType}`)
          .then((res) => {
            if (res.ok) return res.json()
            return Promise.reject(res)
          })
          .then((res) => {
            const fetchData = []
            const filterCount = Object.keys(stateFilters).length

            if (stateOptions.limit === 0) {
              const filtersData = filterCount > 0 && res && bodyFilters(res.results, stateFilters)
              filtersData && res && fetchData.push(filtersData)
              filterCount < 1 && res && fetchData.push(res.results)
              fetchData && setValues({ ...values, loading: true, success: fetchData[0] })
            } else {
              const limitFiltersData = filterCount > 0 && res && bodyFiltersWithLimit(res.results, stateOptions.limit, filters)
              const limitData = res && res.results.slice(0, stateOptions.limit)
              limitFiltersData && res && fetchData.push(limitFiltersData)
              filterCount < 1 && res && fetchData.push(limitData)
              fetchData && setValues({ ...values, loading: true, success: fetchData[0] })
            }
          })
          .catch((err) => err && setValues({ ...values, error: errorHandlers({ type: 'httpErrorHandlers', error: err }) }))
    }
  }

  const onFetchRefs = (paramsRefs) => {
    fetch(`https://swapi.dev/api/${paramsRefs.refs}/${paramsRefs.id}`)
      .then((res) => {
        if (res.ok) return res.json()
        return Promise.reject(res)
      })
      .then((res) => {
        const fetchData = []
        const filterCount = Object.keys(stateFilters).length

        const data = res && [].concat(res)
        const filtersData = filterCount > 0 && res && swrFilter(data, stateFilters)
        filtersData && res && fetchData.push(filtersData)
        filterCount < 1 && res && fetchData.push(data)
        fetchData && setValues({ ...values, loading: true, success: fetchData[0] })
      })
      .catch((err) => err && setValues({ ...values, error: errorHandlers({ type: 'httpErrorHandlers', error: err }) }))
  }

  return { success: loading && success, handler: !stateEffect ? onHandler : (e) => e.preventDefault(), error, loading }
}

export default useStarWars
