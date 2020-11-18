import React, { useEffect, useState } from 'react'
import { useJsonPlaceHolder } from 'react-fakers'

const ResultAllData = () => {
  const [state, setState] = useState(false)
  const { success, error } = useJsonPlaceHolder()

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
              {val.name} - {val.email}
            </li>
          </ul>
        ))}
    </>
  )
}

export default ResultAllData
