import React, { useEffect, useState } from 'react'
import { useDummy } from 'react-fakers'

const ResultAllData = () => {
  const [state, setState] = useState(false)
  const { success, error } = useDummy()

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
          <ul key={val.id}>
            <li>
              {val.firstName} {val.lastName} - {val.email}
            </li>
          </ul>
        ))}
    </>
  )
}

export default ResultAllData
