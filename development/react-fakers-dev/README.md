## React Fakers

**React Fakers** adalah kumpulan dummy data dari berbagai sumber layanan penyedia dummy data terpopuler seperti **Json Place Holder, Faker, Pokemon dll**, untuk keperluan testing pengembangan aplikasi.

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
  - [Author](#AUTHOR)
  - [Contributors](#CONTRIBUTORS)
  - [Bugs](#BUGS)
  - [License](#change)

### INSTALLATION:

```sh
npm i react-fakers --save-dev | yarn add react-fakers --save-dev
```

### EXAMPLE USAGE

- #### Hooks

  - #### **useFaker**

  ```js
  import React, { useState, useEffect } from 'react'
  import { useFaker } from 'react-fakers'

  const App = () => {
    const [state, setState] = useState(false)
    const { success, error } = useFaker()

    useEffect(() => {
      if (success) {
        setState(true)
      }
    }, [])

    if (error) {
      window.alert(error.message)
    }

    return (
      <>
        {!state && <h4>Loading....</h4>}
        {state &&
          success.map((val, id) => (
            <ul key={val.uuid}>
              <li>
                {val.firstname} {val.lastname} - {val.email}
              </li>
            </ul>
          ))}
      </>
    )
  }

  export default App
  ```

  - #### **useJsonPlaceHolder**

  ```js
  import React, { useState, useEffect } from 'react'
  import { useJsonPlaceHolder } from 'react-fakers'

  const App = () => {
    const [state, setState] = useState(false)
    const { success, error } = useJsonPlaceHolder()

    useEffect(() => {
      if (success) {
        setState(true)
      }
    }, [])

    if (error) {
      window.alert(error.message)
    }

    return (
      <>
        {!state && <h4>Loading....</h4>}
        {state &&
          success.map((val, id) => (
            <ul key={id}>
              <li>
                {val.name} - {val.email}
              </li>
            </ul>
          ))}
      </>
    )
  }

  export default App
  ```

- #### Components

  - #### **Faker**

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
        window.alert(error.message)
      }
    }

    render() {
      return (
        <>
          <Faker success={this.onSuccess} error={this.onError} />
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

  export default App
  ```

  - #### **JsonPlaceHolder**

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
        window.alert(error.message)
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

  export default App
  ```

### API REFERENCE

| Name                   | Type       | Property | Default Value                       | Description                                             |
| ---------------------- | ---------- | -------- | ----------------------------------- | ------------------------------------------------------- |
| **useFaker**           | Hooks      | type     | users                               | Untuk menampilkan dummy data dari Faker API             |
|                        |            | params   | { }                                 |                                                         |
| **useJsonPlaceHolder** | Hooks      | type     | users                               | Untuk menampilkan dummy data dari Json Place Holder API |
|                        |            | params   | { }                                 |                                                         |
|                        |            | options  | { limit: 0 }                        |                                                         |
|                        |            | filters  | { }                                 |                                                         |
| **useDummy**           | Hooks      | type     | user                                | Untuk menampilkan dummy data dari Dummy API             |
|                        |            | apiKey   | 5faa1fab5317ae96860c0be3            |                                                         |
|                        |            | params   | { }                                 |                                                         |
|                        |            | options  | { limit: 0}                         |                                                         |
|                        |            | filters  | { }                                 |                                                         |
| **useUIFaces**         | Hooks      | apiKey   | 43651248-182440F6-8653E4E2-5438FCB2 | Untuk menampilkan dummy data dari UI Faces API          |
|                        |            | params   | { }                                 |                                                         |
| **Faker**              | Components | success  | none                                | Untuk menampilkan dummy data dari Faker API             |
|                        |            | error    | none                                |                                                         |
|                        |            | type     | users                               |                                                         |
|                        |            | params   | none                                |                                                         |
| **JsonPlaceHolder**    | Components | success  | none                                | Untuk menampilkan dummy data dari Json Place Holder API |
|                        |            | error    | none                                |                                                         |
|                        |            | type     | users                               |                                                         |
|                        |            | options  | { limit: 0 }                        |                                                         |
|                        |            | filters  | { }                                 |                                                         |
| **Dummy**              | Components | success  | none                                | Untuk menampilkan dummy data dari Dummy API             |
|                        |            | error    | none                                |                                                         |
|                        |            | apiKey   | 5faa1fab5317ae96860c0be3            |                                                         |
|                        |            | params   | { }                                 |                                                         |
|                        |            | options  | { limit: 0}                         |                                                         |
|                        |            | filters  | { }                                 |                                                         |
| **UIFaces**            | Components | success  | none                                | Untuk menampilkan dummy data dari UI Faces API          |
|                        |            | error    | none                                |                                                         |
|                        |            | apiKey   | 43651248-182440F6-8653E4E2-5438FCB2 |                                                         |
|                        |            | params   | { }                                 |                                                         |

### API STATUS

| API Name          | API Key | Call Per/Day | Call Per/Month |
| ----------------- | ------- | ------------ | -------------- |
| Faker             | No      | Unlimited    | unlimited      |
| Json Place Holder | No      | Unlimited    | unlimited      |
| Dummy API         | Yes     | 500          | none           |
| UI Faces          | Yes     | 500          | none           |

### API LIST

| API Name          | Status     | Documentation                              |
| ----------------- | ---------- | ------------------------------------------ |
| Faker             | Ready      | [Click Here](https://tinyurl.com/yy8m2xvo) |
| Json Place Holder | Ready      | [Click Here](https://tinyurl.com/y5s3yfkg) |
| Dummy API         | Ready      | [Click Here](https://tinyurl.com/y5a6dew8) |
| UI Faces          | Ready      | [Click Here](https://tinyurl.com/y4cv59qy) |
| Pokemon           | Comingsoon | [Click Here]()                             |
| Star Wars         | Comingsoon | [Click Here]()                             |
| Marvel            | Comingsoon | [Click Here]()                             |
| Harry Potter      | Comingsoon | [Click Here]()                             |
| IMDB              | Comingsoon | [Click Here]()                             |
| The Cat           | Comingsoon | [Click Here]()                             |
| Anime             | Comingsoon | [Click Here]()                             |
| Ricky And Morty   | Comingsoon | [Click Here]()                             |
| Unsplash          | Comingsoon | [Click Here]()                             |
| Listen Notes      | Comingsoon | [Click Here]()                             |

### TRANSLATION

- [Indonesian]()
- [English]()

### NOTES

- Untuk `Dummy Data` yang menggunakan `API KEY` jika mengalami limit, silahakan anda melakukan pendaftaran ke provider terkait, untuk mendapatkan kunci `API KEY` anda sendiri
- Untuk penggunaan lebih lanjut terkait `API` yang tersedia, anda bisa mengunjungi dokumentasi resmi dari masing - masing `Provider`
- Untuk melakukan kontribusi project anda bisa melemparkan `Issue` atau anda bisa mengcloning repository dan melakukan `Pull Request`, sesuai ketentuan yang berlaku **[disini]()**

### AUTHOR

- [Restu Wahyu Saputra]()

### BUGS

Untuk informasi mengenai bugs terkait package library silakan [klik disini]()

### LICENSE

- [MIT]()

<p align="right" style="padding: 5px; border-radius: 100%; background-color: red; font-size: 2rem;">
  <b><a href="#React-Fakers">BACK TO TOP</a></b>
</p>
