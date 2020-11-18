import React, { Component } from 'react'
import { JsonPlaceHolder } from 'react-fakers'

class ResultWithOptions extends Component {
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
      window.alert(error.message)
    }
  }

  render() {
    return (
      <>
        <JsonPlaceHolder success={this.onSuccess} error={this.onError} options={{ limit: 5 }} />
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

export default ResultWithOptions
