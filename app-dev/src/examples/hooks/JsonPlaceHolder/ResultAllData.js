import React from 'react'
import { useJsonPlaceHolder } from 'react-fakers'

const ResultAllData = () => {
  const { success, error, loading } = useJsonPlaceHolder()

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
