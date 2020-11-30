import React from 'react'
// import { useStarWars } from 'react-fakers'
// import FakerComponents from './examples/components/Faker'
// import JsonPlaceHolderComponents from './examples/components/JsonPlaceHolder'
// import DummyComponents from './examples/components/Dummy'
// import UIFacesComponents from './examples/components/UIFaces'
// import { useStarWars } from './development/hooks/StarWars'
import { useFaker } from './development/hooks/Faker'
import { useJsonPlaceHolder } from './development/hooks/JsonPlaceHolder'
import { useDummy } from './development/hooks/Dummy'
import { useUIFaces } from './development/hooks/UIFaces'
import { useStarWars } from './development/hooks/StarWars'

const App = () => {
  const { success, error, loading, handler } = useStarWars({
    effect: true
  })

  if (error) {
    console.log(error.message)
  }

  return (
    <>
      <button onClick={handler}>Button Click</button>
      {!loading && <h4>Loading....</h4>}
      <ul>{loading && success.map((val, id) => <li key={id}>{val.name}</li>)}</ul>
    </>
  )
}

export default App
