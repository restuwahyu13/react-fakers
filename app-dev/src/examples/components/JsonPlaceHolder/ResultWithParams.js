import React, { Component } from 'react'
import { JsonPlaceHolder } from 'react-fakers'

class ResultWithParams extends Component {
  /**
   * @note You can retrieve data using parameters, according to the specifications of the available service types as stated in the JSON PLACE HOLDER
   * @description example usage
   * <JsonPlaceHolder success={this.onSuccess} error={this.onError} type='todos' params={{ userId: 1 }} />
   * if userId displays a lot of data you can combine them by adding options.limit and filters
   * mix with options and filters, useJsonPlaceHolder({ type: 'todos' params: {todos: {userId: 1}}, options:{limit: 5} filters: {id: 1} })
   * more about information please check documentation from JSON PLACE HOLDER
   * <JsonPlaceHolder success={this.onSuccess} error={this.onError} params={{ todos: {userId: 1 }}} options={{limit: 5}} filters={{id: 1}} />
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
        <JsonPlaceHolder success={this.onSuccess} error={this.onError} params={{ users: { id: 1 } }} />
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

export default ResultWithParams
