import React from 'react'
import { useStarWars } from 'react-fakers'

const ResultWithOptions = () => {
  /**
   * @note You can limit the data displayed using options.limit
   */

  const { success, error, loading } = useStarWars({
    options: { limit: 5 }
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

export default ResultWithOptions
