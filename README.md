## React Fakers

**React Fakers** is a collection of dummy data from the most popular dummy data providers such as **Json Place Holder, Faker, Pokemon, etc**, for application development testing.

[![Build Status](https://travis-ci.com/restuwahyu13/react-fakers.svg?branch=main)](https://travis-ci.com/restuwahyu13/react-fakers) [![npm version](https://badge.fury.io/js/react-fakers.svg)](https://badge.fury.io/js/react-fakers) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-fakers) ![npm bundle size (version)](https://img.shields.io/bundlephobia/minzip/react-fakers/1.0.1-rc1) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/restuwahyu13/react-fakers) ![npm](https://img.shields.io/npm/dm/react-fakers) [![Open Source Helpers](https://www.codetriage.com/restuwahyu13/react-fakers/badges/users.svg)](https://www.codetriage.com/restuwahyu13/react-fakers) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/restuwahyu13/react-fakers/blob/main/CONTRIBUTING.md)

<img src="./cover.png" alt="logo" width="850" height="750" style="object-fit:cover"/>

## TABLE OF CONTENT

- [Get Started](#get-started)
  - [Installation](#INSTALLATION)
  - [Example Usage](#EXAMPLE-USAGE)
  - [API Reference](#API-REFERENCE)
  - [API Status](#API-STATUS)
  - [API List](#API-LIST)
  - [Translation](#TRANSLATION)
  - [Notes](#NOTES)
  - [Contributing](#CONTRIBUTING)
  - [Bugs](#BUGS)
  - [Author](#AUTHOR)
  - [License](#LICENSE)

### INSTALLATION

```sh
npm i react-fakers | yarn add react-fakers
```

### EXAMPLE USAGE

- **Hooks**

  - **useFaker**

  ```js
  import React, { useState, useEffect } from 'react'
  import { useFaker } from 'react-fakers'

  const App = () => {
    const { success, error, loading } = useFaker()

    if (error) {
      alert(error.message)
    }

    return (
      <>
        {!loading && <h4>Loading....</h4>}
        <ul>
          {loading &&
            success.map((val, id) => (
              <li key={val.uuid}>
                {val.firstname} {val.lastname} - {val.email}
              </li>
            ))}
        </ul>
      </>
    )
  }

  export default App
  ```

  - **useFaker With Params**

  ```js
  import React, { useState, useEffect } from 'react'
  import { useFaker } from 'react-fakers'

  const App = () => {
  
    const { success, error, loading } = useFaker({
      type: 'addresses',
      params: { addresses: { quantity: 5 } }
    })

    if (error) {
      alert(error.message)
    }

    return (
        <>
        {!loading && <h4>Loading....</h4>}
         <ul>
          {loading &&
            success.map((val, id) => (
              <li key={val.uuid}>
                {val.firstname} {val.lastname} - {val.email}
              </li>
            ))}
        </ul>
      </>
    )
  }

  export default App
  ```

  - **useJsonPlaceHolder**

  ```js
  import React, { useState, useEffect } from 'react'
  import { useJsonPlaceHolder } from 'react-fakers'

  const App = () => {
  
    const { success, error, loading } = useJsonPlaceHolder()

    if (error) {
      alert(error.message)
    }

    return (
      <>
        {!loading && <h4>Loading....</h4>}
         <ul>
          {loading &&
            success.map((val, id) => (
              <li key={id}>
                {val.name} - {val.email}
              </li>
            ))}
        </ul>
      </>
    )
  }

  export default App
  ```

  - **useJsonPlaceHolder With Params**

  ```js
  import React, { useState, useEffect } from 'react'
  import { useJsonPlaceHolder } from 'react-fakers'

  const App = () => {

    const { success, error, loading } = useJsonPlaceHolder({
      type: 'posts',
      params: { posts: { userId: 1 } },
      options: { limit: 3 }
    })

    if (error) {
      alert(error.message)
    }

    return (
      <>
        {!loading && <h4>Loading....</h4>}
         <ul>
          {loading &&
            success.map((val, id) => (
              <li key={id}>
                {val.id} - {val.title}
              </li>
            ))}
        </ul>
      </>
    )
  }

  export default App
  ```

- **Components**

  - **Faker**

  ```js
  import React, { Component } from 'react'
  import { Faker } from 'react-fakers'

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
  ```

  - **Faker With Params**

  ```js
  import React, { Component } from 'react'
  import { Faker } from 'react-fakers'

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
          <Faker
            success={this.onSuccess}
            error={this.onError}
            type='addresses'
            params={{ addresses: { quantity: 5 } }}
          />

          {!this.state.loading && <h4>Loading....</h4>}
          <ul>
            {this.state.loading &&
              this.state.data.map((val, id) => (
                <li key={val.uuid}>
                  {val.street} - {val.streetName} - {val.zipcode}
                </li>
              ))}
          </ul>
        </>
      )
    }
  }

  export default App
  ```

  - **JsonPlaceHolder**

  ```js
  import React, { Component } from 'react'
  import { JsonPlaceHolder } from 'react-fakers'

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
          <JsonPlaceHolder success={this.onSuccess} error={this.onError} />

          {!this.state.loading && <h4>Loading....</h4>}
          <ul>
            {this.state.loading &&
              this.state.data.map((val, id) => (
                <li key={id}>
                  {val.name} - {val.email}
                </li>
              ))}
          </ul> 
        </>
      )
    }
  }

  export default App
  ```

  - **JsonPlaceHolder With Params**

  ```js
  import React, { Component } from 'react'
  import { JsonPlaceHolder } from 'react-fakers'

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
          <JsonPlaceHolder
            success={this.onSuccess}
            error={this.onError}
            type='posts'
            params = {{ posts: { userId: 1 } }},
            options={{ limit: 3 }}
          />

          {!this.state.loading && <h4>Loading....</h4>}
          <ul>
            {this.state.loading &&
              this.state.data.map((val, id) => (
                <li key={val.uuid}>
                  {val.id} - {val.title}
                </li>
              ))}
          </ul>
        </>
      )
    }
  }

  export default App
  ```

### API REFERENCE

- **HOOKS**

| Name                   | Property | Type Data | Optional/Required | Default Value                       | Description                                          |
| ---------------------- | -------- | --------- | ----------------- | ----------------------------------- | ---------------------------------------------------- |
| **useFaker**           | type     | _string_  | _optional_        | users                               | To display dummy data from the Faker API             |
|                        | params   | _object_  | _optional_        | { }                                 |                                                      |
| **useJsonPlaceHolder** | type     | _string_  | _optional_        | users                               | To display dummy data from the Json Place Holder API |
|                        | params   | _object_  | _optional_        | { }                                 |                                                      |
|                        | options  | _object_  | _optional_        | { limit: 0 }                        |                                                      |
|                        | filters  | _object_  | _optional_        | { }                                 |                                                      |
| **useDummy**           | type     | _object_  | _optional_        | user                                | To display dummy data from the Dummy API             |
|                        | apiKey   | _string_  | _optional_        | 5faa1fab5317ae96860c0be3            |                                                      |
|                        | params   | _object_  | _optional_        | { }                                 |                                                      |
|                        | options  | _object_  | _optional_        | { limit: 0 }                        |                                                      |
|                        | filters  | _object_  | _optional_        | { }                                 |                                                      |
| **useUIFaces**         | apiKey   | _string_  | _optional_        | 43651248-182440F6-8653E4E2-5438FCB2 | To display dummy data from the UI Faces API          |
|                        | params   | _object_  | _optional_        | { limit: 10 }                       |                                                      |
| **useStarWars**        | type     | _string_  | _optional_        | people                              | To display dummy data from the Star Wars API        | 
|                        | params   | _object_  | _optional_        | { }                                 |                                                      |
|                        | options  | _object_  | _optional_        | { limit: 0 }                        |                                                      |
|                        | filters  | _object_  | _optional_        | { }                                 |                                                      |


- **COMPONENTS**

| Name                | Property | Type Data  | Optional/Required | Default Value                       | Description                                          |
| ------------------- | -------- | ---------- | ----------------- | ----------------------------------- | ---------------------------------------------------- |
| **Faker**           | success  | _function_ | _required_        |                                     | To display dummy data from the Faker API             |
|                     | error    | _function_ | _optional_        |                                     |                                                      |
|                     | type     | _string_   | _optional_        | users                               |                                                      |
|                     | params   | _object_   | _optional_        |                                     |                                                      |
| **JsonPlaceHolder** | success  | _function_ | _required_        |                                     | To display dummy data from the Json Place Holder API |
|                     | error    | _function_ | _optional_        |                                     |                                                      |
|                     | type     | _string_   | _optional_        | users                               |                                                      |
|                     | options  | _object_   | _optional_        | { limit: 0 }                        |                                                      |
|                     | filters  | _object_   | _optional_        | { }                                 |                                                      |
| **Dummy**           | success  | _function_ | _required_        |                                     | To display dummy data from the Dummy API             |
|                     | error    | _function_ | _optional_        |                                     |                                                      |
|                     | apiKey   | _string_   | _optional_        | 5faa1fab5317ae96860c0be3            |                                                      |
|                     | params   | _object_   | _optional_        | { }                                 |                                                      |
|                     | options  | _object_   | _optional_        | { limit: 0 }                        |                                                      |
|                     | filters  | _object_   | _optional_        | { }                                 |                                                      |
| **UIFaces**         | success  | _function_ | _required_        |                                     | To display dummy data from the UI Faces API          |
|                     | error    | _function_ | _optional_        |                                     |                                                      |
|                     | apiKey   | _string_   | _optional_        | 43651248-182440F6-8653E4E2-5438FCB2 |                                                      |
|                     | params   | _object_   | _optional_        | { limit: 10 }                       |                                                      |

### API STATUS

| API Name          | API Key | Call Per/Day | Call Per/Month |
| ----------------- | ------- | ------------ | -------------- |
| Faker             | No      | Unlimited    | Unlimited      |
| Json Place Holder | No      | Unlimited    | Unlimited      |
| Dummy API         | Yes     | 500          | Undefined      |
| UI Faces          | Yes     | 500          | Undefined      |
| Star Wars         | No      | Unlimited    | Unlimited      | 

### API LIST

| API Name          | Status      | Documentation                              |
| ----------------- | ----------- | ------------------------------------------ |
| Faker             | Ready       | [Click Here](https://tinyurl.com/yy8m2xvo) |
| Json Place Holder | Ready       | [Click Here](https://tinyurl.com/y5s3yfkg) |
| Dummy API         | Ready       | [Click Here](https://tinyurl.com/y5a6dew8) |
| UI Faces          | Ready       | [Click Here](https://tinyurl.com/y4cv59qy) |
| Pokemon           | Coming Soon | [Click Here]()                             |
| Star Wars         | Ready       | [Click Here](https://swapi.dev/)           |
| Marvel            | Coming Soon | [Click Here]()                             |
| Harry Potter      | Coming Soon | [Click Here]()                             |
| IMDB              | Coming Soon | [Click Here]()                             |
| The Cat           | Coming Soon | [Click Here]()                             |
| Anime             | Coming Soon | [Click Here]()                             |
| Ricky And Morty   | Coming Soon | [Click Here]()                             |
| Unsplash          | Coming Soon | [Click Here]()                             |
| Listen Notes      | Coming Soon | [Click Here]()                             |

### TRANSLATION

- [Indonesian](https://github.com/restuwahyu13/react-fakers/blob/main/README_ID.md)
- [English](https://github.com/restuwahyu13/react-fakers/blob/main/README.md)

### NOTES

- For `Provider` that uses `API KEY` if you have a limit, please visit the `API` provider service, to get your own `API KEY`
- For more information on the `API` available, you can visit the official documentation of each `Provider`
- To find out more about using this tool, you can open the `app-dev/src/examples` in this repository

### CONTRIBUTING

Want to make **React Fakers** more perfect ? Let's contribute and follow the [contribution guide.](https://github.com/restuwahyu13/react-fakers/blob/main/CONTRIBUTING.md)

### BUGS

For information on bugs related to package libraries, please visit [here](https://github.com/restuwahyu13/react-fakers/issues)

### AUTHOR

- [Restu Wahyu Saputra](https://github.com/restuwahyu13)

### LICENSE

- [MIT](https://github.com/restuwahyu13/react-fakers/blob/main/LICENSE.md)

<p align="right" style="padding: 5px; border-radius: 100%; background-color: red; font-size: 2rem;">
  <b><a href="#React-Fakers">BACK TO TOP</a></b>
</p>
