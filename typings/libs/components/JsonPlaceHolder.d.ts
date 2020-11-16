// =================================================================
//                JSON PLACE HOLDER TYPINGS TERITORY
// =================================================================

export interface IJphParamsPosts {
  readonly id?: number
  readonly userId?: number
}

export interface IJphParamsComments {
  readonly id?: number
  readonly postId?: number
}

export interface IJphParamsAlbums {
  readonly id?: number
  readonly userId?: number
}

export interface IJphParamsPhotos {
  readonly id?: number
  readonly albumId?: number
}

export interface IJphParamsTodos {
  readonly id?: number
  readonly userId?: number
}

export interface IJphParamsUsers {
  readonly id?: number
}

export interface IJphOptions {
  readonly limit?: number
}

export interface IJphParams {
  readonly posts?: IJphParamsPosts
  readonly comments?: IJphParamsComments
  readonly albums?: IJphParamsAlbums
  readonly photos?: IJphParamsPhotos
  readonly todos?: IJphParamsTodos
  readonly users?: IJphParamsUsers
}

export interface IJph {
  readonly success: () => void
  readonly error?: () => void
  readonly type?: string
  readonly params?: IJphParams
  readonly options?: IJphOptions
  readonly filters?: object
}

export class JsonPlaceHolder extends Component<IJph> {}
