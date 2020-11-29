import React from 'react'
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

  const { success, error, loading } = useJsonPlaceHolder({
    params: { users: { id: 1 } }
  })

  if (error) {
    window.alert(error.message)
  }

  return (
    <>
      {!loading && <h4>Loading....</h4>}
      <ul>
        {loading &&
          success.map((val, id) => (
            <li key={id}>
              {val.name} - {val.email}
            </li>
          ))}
      </ul>
    </>
  )
}

export default ResultWithParams
