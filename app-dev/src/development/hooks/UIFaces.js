import { useEffect, useState } from 'react'
import { paramsBind } from '../utils/paramsBind'
import { errorHandlers } from '../utils/errorHandlers'

/**
 * @description useUIFaces is a service provider for displaying dummy data from UI Faces provider
 */

export const useUIFaces = (props) => {
  const { params, apiKey, effect } = { ...props }

  const [values, setValues] = useState({
    success: [],
    error: null,
    loading: false,
    stateParams: !params ? {} : params,
    stateApiKey: !apiKey ? '43651248-182440F6-8653E4E2-5438FCB2' : apiKey,
    stateEffect: !effect ? false : effect
  })

  const { success, error, loading, stateParams, stateApiKey, stateEffect } = values

  useEffect(() => {
    onState()
    onCheck()

    return () => {
      if (success.length > 0) {
        setValues({
          success: [],
          error: null,
          loading: false,
          stateParams: {},
          stateApiKey: '43651248-182440F6-8653E4E2-5438FCB2',
          stateEffect: false
        })
      }
    }
  }, [])

  const onState = () => {
    setValues({
      ...values,
      stateParams: Object.keys(stateParams).length > 0 ? stateParams : {},
      stateApiKey: stateApiKey !== '43651248-182440F6-8653E4E2-5438FCB2' ? stateApiKey : '43651248-182440F6-8653E4E2-5438FCB2',
      stateEffect: stateEffect !== false ? stateEffect : false
    })
  }

  const onCheck = () => {
    switch (stateEffect) {
      case true:
        stateEffect && onFetch()
        break
      default:
        return []
    }
  }

  const onHandler = () => {
    window.addEventListener('submit', (e) => e.preventDefault())
    switch (stateEffect) {
      case false:
        !stateEffect && onFetch()
        window.removeEventListener('submit', (e) => e.preventDefault())
        break
      default:
        return []
    }
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

  return { success: loading && success, handler: !stateEffect ? onHandler : (e) => e.preventDefault(), error, loading }
}
