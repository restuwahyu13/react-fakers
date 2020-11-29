import React from 'react'
import { useFaker } from 'react-fakers'

const ResultAllData = () => {
  const { success, error, loading } = useFaker()

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
              {val.firstname} {val.lastname} - {val.email}
            </li>
          ))}
      </ul>
    </>
  )
}

export default ResultAllData
