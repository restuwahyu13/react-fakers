import React, { useEffect, useState } from 'react'
import { useJsonPlaceHolder } from 'react-fakers'

const ResultWithFilters = () => {
  /**
   * @note You can filter data according to the response given, but you cannot filter data that has sub-documents
   */

  const [state, setState] = useState(false)

  const { success, error } = useJsonPlaceHolder({
    filters: {
      name: 'Leanne Graham'
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
              {val.name} - {val.email}
            </li>
          </ul>
        ))}
    </>
  )
}

export default ResultWithFilters
