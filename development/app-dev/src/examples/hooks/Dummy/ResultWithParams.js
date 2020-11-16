import React, { useEffect, useState } from 'react'
import { useDummy } from 'react-fakers'

const ResultWithParams = () => {
  /**
   * You can retrieve data using parameters, according to the specifications of the available service types as stated in the useDummy
   * if you want to display a data reference you must add the refs property
   * @description example usage
   * useDummy({ params: {user: {id: '0F8JIqi4zwvb77FGz6Wt', refs: 'post'}} }), check documentation for more information
   * you can mix with options and filters, useDummy({ params: {user: {id: '0F8JIqi4zwvb77FGz6Wt', refs: 'post'}}, options:{limit: 5} })
   * more about information please check documentation from DUMMY API
   */

  const [state, setState] = useState(false)

  const { success, error } = useDummy({
    params: { user: { id: '0F8JIqi4zwvb77FGz6Wt', refs: 'post' } },
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
      <h3>Using ID and Reference to POST</h3>
      {state &&
        success.map((val, id) => (
          <ul key={val.id}>
            <li>
              {val.id} - {val.text}
            </li>
          </ul>
        ))}
    </>
  )
}

export default ResultWithParams
