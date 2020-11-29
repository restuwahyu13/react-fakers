import React from 'react'
import { useStarWars } from 'react-fakers'

const ResultWithParams = () => {
  /**
   * @note You can retrieve data using parameters, according to the specifications of the available service types as stated in the Star Wars
   * @description example usage
   * useStarWars({ type: people, params: {people: {id: 1}} })
   * get another data using reference useStarWars({params: { people: { id: 1, refs: 'films' } }})
   * more about information please check documentation from Star Wars
   */

  const { success, error, loading } = useStarWars({
    params: { people: { id: 1, refs: 'films' } }
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
