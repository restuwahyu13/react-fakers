import React, { Component } from 'react'
import { Faker } from 'react-fakers'

class ResultWithParams extends Component {
  /**
   * You can retrieve data using parameters, according to the specifications of the available service types as stated in the FAKER
   * @description example usage
   * <Faker success={this.onSuccess} error={this.onError} params={{ users: { quantity: 5, gender: 'female' } }} />
   * more about information please check documentation from FAKER
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
        <Faker success={this.onSuccess} error={this.onError} params={{ users: { quantity: 5, gender: 'female' } }} />
        {!this.state.loading && <h4>Loading....</h4>}
        {this.state.loading &&
          this.state.data.map((val, id) => (
            <ul key={val.uuid}>
              <li>
                {val.firstname} {val.lastname} - {val.email}
              </li>
            </ul>
          ))}
      </>
    )
  }
}

export default ResultWithParams
