import { useEffect, useState } from 'react'
import fetch from 'isomorphic-fetch'
import { paramsBindDeep } from '../utils/paramsBind'
import { replaceString } from '../utils/replaceString'
import { errorHandlers } from '../utils/errorHandlers'

/**
 * @description useFaker is a service provider for displaying dummy data from Faker provider
 */

const useFaker = (props) => {
  const { effect, type, params } = { ...props }

  const [values, setValues] = useState({
    loading: false,
    error: null,
    success: [],
    stateType: !type ? 'users' : type,
    stateParams: !params ? {} : params,
    stateEffect: !effect ? false : effect
  })

  const { loading, error, success, stateEffect, stateType, stateParams } = values

  useEffect(() => {
    onState()
    onCheck()

    return () => {
      if (success.length > 0) {
        setValues({
          ...values,
          loading: false,
          error: null,
          success: [],
          stateType: 'users',
          stateParams: {},
          stateEffect: false
        })
      }
    }
  }, [])

  const onState = () => {
    setValues({
      ...values,
      stateType: stateType !== 'users' ? stateType : 'users',
      stateParams: Object.keys(stateParams).length > 0 ? stateParams : {},
      stateEffect: stateEffect !== false ? stateEffect : false
    })
  }

  const onCheck = () => {
    switch (stateType) {
      case 'addresses':
      case 'books':
      case 'companies':
      case 'credit_cards':
      case 'images':
      case 'persons':
      case 'places':
      case 'products':
      case 'texts':
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
      case 'addresses':
      case 'books':
      case 'companies':
      case 'credit_cards':
      case 'images':
      case 'persons':
      case 'places':
      case 'products':
      case 'texts':
      case 'users':
        !stateEffect && onFetch()
        window.removeEventListener('submit', (e) => e.preventDefault())
        break
      default:
        return []
    }
  }

  /**
   * @description this method for fetching all data type from faker
   */

  const onFetch = () => {
    const paramsBindFetch = params && paramsBindDeep({ ...params })

    switch (typeof params) {
      case 'object':
        fetch(`https://fakerapi.it/api/v1/${stateType}/?${replaceString(paramsBindFetch.value)}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then((res) => {
            if (res.ok) return res.json()
            return Promise.reject(res)
          })
          .then((res) => res && setValues({ ...values, loading: true, success: res.data }))
          .catch((err) => err && setValues({ ...values, error: errorHandlers({ type: 'httpErrorHandlers', error: err }) }))
        break
      default:
        fetch(`https://fakerapi.it/api/v1/${stateType}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then((res) => {
            if (res.ok) return res.json()
            return Promise.reject(res)
          })
          .then((res) => res && setValues({ ...values, loading: true, success: res.data }))
          .catch((err) => err && setValues({ ...values, error: errorHandlers({ type: 'httpErrorHandlers', error: err }) }))
    }
  }

  return { success: loading && success, handler: !stateEffect ? onHandler : (e) => e.preventDefault(), error, loading }
}

export default useFaker
