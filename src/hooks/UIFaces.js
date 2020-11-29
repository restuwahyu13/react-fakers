import { useEffect, useState } from 'react'
import { paramsBind } from '../utils/paramsBind'
import { errorHandlers } from '../utils/errorHandlers'

/**
 * @description useUIFaces is a service provider for displaying dummy data
 */

const useUIFaces = (props) => {
  const { params, apiKey } = { ...props }

  const [values, setValues] = useState({
    success: [],
    error: null,
    loading: false,
    stateParams: !params ? {} : params,
    stateApiKey: !apiKey ? '43651248-182440F6-8653E4E2-5438FCB2' : apiKey
  })

  const { success, error, loading, stateParams, stateApiKey } = values

  useEffect(() => {
    onState()
    onFetch()

    return () => {
      if (success.length > 0) {
        setValues({
          success: [],
          error: null,
          loading: false,
          stateParams: {},
          stateApiKey: '43651248-182440F6-8653E4E2-5438FCB2'
        })
      }
    }
  }, [])

  const onState = () => {
    setValues({
      ...values,
      stateParams: Object.keys(stateParams).length < 1 && stateParams,
      stateApiKey: stateApiKey !== '43651248-182440F6-8653E4E2-5438FCB2' && stateApiKey
    })
  }

  /**
   * @description this method for fetching all data type from ui faces
   */

  const onFetch = () => {
    const paramsBindUIFaces = paramsBind({ ...stateParams })

    fetch(`https://uifaces.co/api?${paramsBindUIFaces}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': `${stateApiKey}`,
        Accept: 'application/json',
        'Cache-Control': 'no-cache'
      }
    })
      .then((res) => {
        if (res.ok) return res.json()
        return Promise.reject(res)
      })
      .then((res) => res && setValues({ ...values, loading: true, success: res }))
      .catch((err) => err && setValues({ ...values, error: errorHandlers({ type: 'httpErrorHandlers', error: err }) }))
  }

  return { success: loading && success, error, loading }
}

export default useUIFaces
