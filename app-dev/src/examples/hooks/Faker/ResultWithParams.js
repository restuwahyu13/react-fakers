import React from 'react'
import { useFaker } from 'react-fakers'

const ResultWithParams = () => {
  /**
   * You can retrieve data using parameters, according to the specifications of the available service types as stated in the FAKER
   * @description example usage
   * useFaker({ params: {users: {quantity: 5, gender: 'female'}} })
   * more about information please check documentation from FAKER
   */

  const { success, error, loading } = useFaker({
    params: {
      users: {
        quantity: 5,
        gender: 'female'
      }
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
              {val.firstname} {val.lastname} - {val.email}
            </li>
          ))}
      </ul>
    </>
  )
}

export default ResultWithParams
