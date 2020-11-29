import React, { Component } from 'react'
import ResultAllData from './ResultAllData'
import ResultWithParams from './ResultWithParams'
import ResultWithOptions from './ResultWithOptions'
import ResultWithFilters from './ResultWithFilters'

class JsonPlaceHolderComponents extends Component {
  render() {
    return (
      <>
        <ResultAllData />
        {/* <ResultWithParams />
				<ResultWithOptions/>
				<ResultWithFilters/> */}
      </>
    )
  }
}

export default JsonPlaceHolderComponents
