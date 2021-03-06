import React from 'react'
import { useJsonPlaceHolder } from 'react-fakers'

const ResultWithFilters = () => {
  /**
   * @note You can filter data according to the response given, but you cannot filter data that has sub-documents
   */

  const { success, error, loading } = useJsonPlaceHolder({
    filters: {
      name: 'Leanne Graham'
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
              {val.name} - {val.email}
            </li>
          ))}
      </ul>
    </>
  )
}

export default ResultWithFilters
