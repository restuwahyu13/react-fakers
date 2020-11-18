import React, { Component } from 'react'
import { Dummy } from 'react-fakers'

class ResultWithParams extends Component {
  /**
   * You can retrieve data using parameters, according to the specifications of the available service types as stated in the useDummy
   * if you want to display a data reference you must add the refs property
   * @description example usage
   * <Dummy success={this.onSuccess} error={this.onError} params={{ user: { id: '0F8JIqi4zwvb77FGz6Wt', refs: 'post' } }} />
   * you can mix with options and filters, <Dummy success={this.onSuccess} error={this.onError} params={{ user: { id: '0F8JIqi4zwvb77FGz6Wt', refs: 'post' } options={limit: 5}}} />
   * more about information please check documentation from DUMMY API
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
        <Dummy success={this.onSuccess} error={this.onError} params={{ user: { id: '0F8JIqi4zwvb77FGz6Wt', refs: 'post' } }} options={{ limit: 5 }} />
        {!this.state.loading && <h4>Loading....</h4>}
        {this.state.loading &&
          this.state.data.map((val, id) => (
            <ul key={val.id}>
              <li>
                {val.id} - {val.text}
              </li>
            </ul>
          ))}
      </>
    )
  }
}

export default ResultWithParams
