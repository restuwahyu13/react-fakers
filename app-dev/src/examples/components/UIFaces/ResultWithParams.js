import React, { Component } from 'react'
import { UIFaces } from 'react-fakers'

class ResultWithParams extends Component {
  /**
   * You can retrieve data using parameters, according to the specifications of the available service types as stated in the FAKER
   * @description example usage
   *  <UIFaces success={this.onSuccess} error={this.onError} params={{ limit: 5, gender: 'female', emotion: 'smile' }} />
   * more about information please check documentation from UI FACES
   */

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
        <UIFaces success={this.onSuccess} error={this.onError} params={{ limit: 5, gender: 'female', emotion: 'smile' }} />
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

export default ResultWithParams
