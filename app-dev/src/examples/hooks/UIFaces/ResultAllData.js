import React from 'react'
import { useUIFaces } from 'react-fakers'

const ResultAllData = () => {
  const { success, error, loading } = useUIFaces()
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
              {val.name} - {val.email} - {val.position}
            </li>
          ))}
      </ul>
    </>
  )
}

export default ResultAllData
