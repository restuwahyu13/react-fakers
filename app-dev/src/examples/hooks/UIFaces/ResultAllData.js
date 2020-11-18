import React, { useEffect, useState } from 'react'
import { useUIFaces } from 'react-fakers'

const ResultAllData = () => {
  const [state, setState] = useState(false)
  const { success, error } = useUIFaces()

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

export default ResultAllData
