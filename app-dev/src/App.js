// import React from 'react'
// // import FakerComponents from './examples/components/Faker'
// // import JsonPlaceHolderComponents from './examples/components/JsonPlaceHolder'
// // import DummyComponents from './examples/components/Dummy'
// // import UIFacesComponents from './examples/components/UIFaces'
// // import { useStarWars } from './development/hooks/StarWars'
// import { useStarWars } from 'react-fakers'

// const App = () => {
//   const { success, error, loading } = useStarWars()
//   if (error) {
//     console.log(error.message)
//   }

//   return (
//     <>
//       {!loading && <h4>Loading....</h4>}
//       <ul>{loading && success.map((val, id) => <li key={id}>{val.name}</li>)}</ul>
//     </>
//   )
// }

// export default App

import React, { Component } from 'react'
import { Faker } from 'react-fakers'
// import Faker from './development/components/Faker'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: []
    }
  }

  onSuccess = (res) => {
    this.setState({
      loading: true,
      data: res
    })
  }

  onError = (error) => {
    if (error) {
      alert(error.message)
    }
  }

  render() {
    return (
      <>
        <Faker success={this.onSuccess} error={this.onError} />

        {!this.state.loading && <h4>Loading....</h4>}
        <ul>
          {this.state.loading &&
            this.state.data.map((val, id) => (
              <li key={val.uuid}>
                {val.firstname} {val.lastname} - {val.email}
              </li>
            ))}
        </ul>
      </>
    )
  }
}

export default App
