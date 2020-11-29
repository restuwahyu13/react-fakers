import React, { useEffect } from 'react'
import propTypes from 'prop-types'
import fetch from 'isomorphic-fetch'
import { paramsBindDeep } from '../utils/paramsBind'
import { replaceString } from '../utils/replaceString'
import { errorHandlers } from '../utils/errorHandlers'

/**
 * @description Faker is a service provider for displaying fake data
 */

const Faker = (props) => {
  const { success, error, type, params } = props

  useEffect(() => {
    onCheck()
  }, [])

  const onCheck = () => {
    switch (type) {
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
        fetch(`https://fakerapi.it/api/v1/${type}/?${replaceString(paramsBindFetch.value)}`, {
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
          .then((res) => res && success(res.data))
          .catch((err) => err && error(errorHandlers({ type: 'httpErrorHandlers', error: err })))
        break
      default:
        fetch(`https://fakerapi.it/api/v1/${type}`, {
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
          .then((res) => res && success(res.data))
          .catch((err) => err && error(errorHandlers({ type: 'httpErrorHandlers', error: err })))
    }
  }

  return <>{!success && new Error(errorHandlers({ type: 'propertyHandler', props }).message)}</>
}

Faker.propTypes = {
  success: propTypes.func,
  error: propTypes.func,
  type: propTypes.string,
  params: propTypes.object
}

Faker.defaultProps = {
  type: 'users'
}

export default Faker
