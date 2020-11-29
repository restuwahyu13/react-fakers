import React, { useEffect } from 'react'
import fetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'
import { paramsBind } from '../utils/paramsBind'
import { errorHandlers } from '../utils/errorHandlers'

/**
 * @description UIFaces is a service provider for displaying dummy data
 */

const UIFaces = (props) => {
  const { success, error, apiKey, params } = props

  useEffect(() => {
    onFetch()
  }, [])

  /**
   * @description this method for fetching all data type from ui faces
   */

  const onFetch = () => {
    const paramsBindUIFaces = params && paramsBind({ ...params })

    fetch(`https://uifaces.co/api?${paramsBindUIFaces}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': `${apiKey}`,
        Accept: 'application/json',
        'Cache-Control': 'no-cache'
      }
    })
      .then((res) => {
        if (res.ok) return res.json()
        return Promise.reject(res)
      })
      .then((res) => res && success(res))
      .catch((err) => err && error(errorHandlers({ type: 'httpErrorHandlers', error: err })))
  }

  return <>{!success && new Error(errorHandlers({ type: 'propertyHandler', props }).message)}</>
}

UIFaces.propTypes = {
  success: PropTypes.func.isRequired,
  error: PropTypes.func,
  apiKey: PropTypes.string,
  params: PropTypes.object
}

UIFaces.defaultProps = {
  apiKey: '43651248-182440F6-8653E4E2-5438FCB2',
  params: { limit: 10 }
}

export default UIFaces
