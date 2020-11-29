import React from 'react'
import { useStarWars } from 'react-fakers'

const ResultAllData = () => {
  const { success, error, loading } = useStarWars()

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

export default ResultAllData
