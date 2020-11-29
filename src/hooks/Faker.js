import { useEffect, useState } from 'react'
import fetch from 'isomorphic-fetch'
import { paramsBindDeep } from '../utils/paramsBind'
import { replaceString } from '../utils/replaceString'
import { errorHandlers } from '../utils/errorHandlers'

/**
 * @description useFaker is a service provider for displaying dummy data
 */

const useFaker = (props) => {
  const { type, params } = { ...props }

  const [values, setValues] = useState({
    loading: false,
    error: null,
    success: [],
    stateType: !type ? 'users' : type,
    stateParams: !params ? {} : params
  })

  const { loading, error, success, stateType, stateParams } = values

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
          stateParams: {}
        })
      }
    }
  }, [])

  const onState = () => {
    setValues({
      ...values,
      stateType: stateType !== 'users' && stateType,
      stateParams: Object.keys(stateParams).length < 1 && stateParams
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
        onFetch()
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

  return { success: loading && success, error, loading }
}

export default useFaker
