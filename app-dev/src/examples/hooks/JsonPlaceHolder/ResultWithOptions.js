import React, { useEffect, useState } from 'react'
import { useJsonPlaceHolder } from 'react-fakers'

const ResultWithOptions = () => {
  /**
   * @note You can limit the data displayed using options.limit
   */

  const [state, setState] = useState(false)
  const { success, error } = useJsonPlaceHolder({
    options: { limit: 5 }
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
              {val.name} - {val.email}
            </li>
          </ul>
        ))}
    </>
  )
}

export default ResultWithOptions
