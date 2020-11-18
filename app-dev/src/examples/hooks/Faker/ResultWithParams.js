import React, { useEffect, useState } from 'react'
import { useFaker } from 'react-fakers'

const ResultWithParams = () => {
  /**
   * You can retrieve data using parameters, according to the specifications of the available service types as stated in the FAKER
   * @description example usage
   * useFaker({ params: {users: {quantity: 5, gender: 'female'}} })
   * more about information please check documentation from FAKER
   */

  const [state, setState] = useState(false)
  const { success, error } = useFaker({
    params: {
      users: {
        quantity: 5,
        gender: 'female'
      }
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
              {val.firstname} {val.lastname} - {val.email}
            </li>
          </ul>
        ))}
    </>
  )
}

export default ResultWithParams
