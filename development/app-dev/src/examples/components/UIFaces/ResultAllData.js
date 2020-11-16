import React, { Component } from 'react'
import { UIFaces } from 'react-fakers'

class ResultAllData extends Component {
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
        <UIFaces success={this.onSuccess} error={this.onError} />
        {!this.state.loading && <h4>Loading....</h4>}
        {this.state.loading &&
          this.state.data.map((val, id) => (
            <ul key={val.id}>
              <li>
                {val.name} - {val.email} - {val.position}
              </li>
            </ul>
          ))}
      </>
    )
  }
}

export default ResultAllData
