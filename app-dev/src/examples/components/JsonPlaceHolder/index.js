import React, { Component } from 'react'
import { JsonPlaceHolder } from 'react-fakers'

class JsonPlaceHolderComponents extends Component {
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
        <JsonPlaceHolder success={this.onSuccess} error={this.onError} />
        {!this.state.loading && <h4>Loading....</h4>}
        {this.state.loading &&
          this.state.data.map((val, id) => (
            <ul key={id}>
              <li>
                {val.name} - {val.email}
              </li>
            </ul>
          ))}
      </>
    )
  }
}

export default JsonPlaceHolderComponents
