import React, { Component } from 'react'
import ResultAllData from './ResultAllData'
import ResultWithParams from './ResultWithParams'

class DummyComponents extends Component {
  render() {
    return (
      <>
        <ResultAllData />
        {/* <ResultWithParams /> */}
      </>
    )
  }
}

export default DummyComponents
