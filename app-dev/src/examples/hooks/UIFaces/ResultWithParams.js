import React, { useEffect, useState } from 'react'
import { useUIFaces } from 'react-fakers'

const ResultWithParams = () => {
  /**
   * You can retrieve data using parameters, according to the specifications of the available service types as stated in the UI FACES
   * @description example usage
   * useUIFaces({ params: {users: {limit: 5, gender: 'female', emotion: 'smile'}} })
   * more about information please check documentation from UI FACES
   */

  const [state, setState] = useState(false)
  const { success, error } = useUIFaces({
    params: {
      limit: 5,
      gender: 'female',
      emotion: 'smile'
    }
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
              {val.name} - {val.email} - {val.position}
            </li>
          </ul>
        ))}
    </>
  )
}

export default ResultWithParams
