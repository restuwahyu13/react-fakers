import React from 'react'
import { useStarWars } from 'react-fakers'
// import FakerComponents from './examples/components/Faker'
// import JsonPlaceHolderComponents from './examples/components/JsonPlaceHolder'
// import DummyComponents from './examples/components/Dummy'
// import UIFacesComponents from './examples/components/UIFaces'
// import { useStarWars } from './development/hooks/StarWars'

const App = () => {
  const { success, error, loading } = useStarWars({
    type: 'films',
    params: { films: { id: 1, refs: 'planets' } }
  })

  if (error) {
    console.log(error.message)
  }

  return (
    <>
      {!loading && <h4>Loading....</h4>}
      <ul>{loading && success.map((val, id) => <li key={id}>{val.title}</li>)}</ul>
    </>
  )
}

export default App
