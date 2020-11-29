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

  const { success, error, loading } = useDummy({
    params: { user: { id: '0F8JIqi4zwvb77FGz6Wt', refs: 'post' } },
    options: { limit: 5 }
  })

  if (error) {
    window.alert(error.message)
  }

  return (
    <>
      {!loading && <h4>Loading....</h4>}
      <h3>Using ID and Reference to POST</h3>
      <ul>
        {loading &&
          success.map((val, id) => (
            <li key={val.id}>
              {val.id} - {val.text}
            </li>
          ))}
      </ul>
    </>
  )
}

export default ResultWithParams
