import React, { useEffect, useState } from 'react'
import { useJsonPlaceHolder } from 'react-fakers'

const ResultWithParams = () => {
  /**
   * @note You can retrieve data using parameters, according to the specifications of the available service types as stated in the JSON PLACE HOLDER
   * @description example usage
   * useJsonPlaceHolder({ type: todos, params: {todos: {userId: 1}} })
   * if userId displays a lot of data you can combine them by adding options.limit and filters
   * mix with options and filters, useJsonPlaceHolder({ type: todos, params: {todos: {userId: 1}}, options:{limit: 5} filters: {id: 1} })
   * more about information please check documentation from JSON PLACE HOLDER
   */

  const [state, setState] = useState(false)

  const { success, error } = useJsonPlaceHolder({
    params: { users: { id: 1 } }
  })

  useEffect(() => {
    if (success) {
      setState(true)
    }
  }, [])

  if (error) {
    window.alert(error.message)
  }

  return (
    <>
      {!state && <h4>Loading....</h4>}
      {state &&
        success.map((val, id) => (
          <ul key={id}>
            <li>
              {val.name} - {val.email}
            </li>
          </ul>
        ))}
    </>
  )
}

export default ResultWithParams
