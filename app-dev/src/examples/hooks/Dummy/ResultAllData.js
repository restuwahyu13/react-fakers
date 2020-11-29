import React from 'react'
import { useDummy } from 'react-fakers'

const ResultAllData = () => {
  const { success, error, loading } = useDummy()

  if (error) {
    window.alert(error.message)
  }

  return (
    <>
      {!loading && <h4>Loading....</h4>}
      <ul>
        {loading &&
          success.map((val, id) => (
            <li key={val.id}>
              {val.firstName} {val.lastName} - {val.email}
            </li>
          ))}
      </ul>
    </>
  )
}

export default ResultAllData
