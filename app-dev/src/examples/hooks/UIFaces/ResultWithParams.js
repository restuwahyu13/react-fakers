import React from 'react'
import { useUIFaces } from 'react-fakers'

const ResultWithParams = () => {
  /**
   * You can retrieve data using parameters, according to the specifications of the available service types as stated in the UI FACES
   * @description example usage
   * useUIFaces({ params: {users: {limit: 5, gender: 'female', emotion: 'smile'}} })
   * more about information please check documentation from UI FACES
   */

  const { success, error, loading } = useUIFaces({
    params: {
      limit: 5,
      gender: 'female',
      emotion: 'smile'
    }
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
              {val.name} - {val.email} - {val.position}
            </li>
          ))}
      </ul>
    </>
  )
}

export default ResultWithParams
