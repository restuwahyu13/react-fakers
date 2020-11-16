// =================================================================
//             HOOKS JSON PLACE HOLDER TYPINGS TERITORY
// =================================================================

export interface IJphPropertyHooks {
  readonly typeProvider?: string
  readonly paramsByPosts?: IJphParamsPosts
  readonly paramsByComments?: IJphParamsComments
  readonly paramsByAlbums?: IJphParamsAlbums
  readonly paramsByPhotos?: IJphParamsPhotos
  readonly paramsByTodos?: IJphParamsTodos
  readonly paramsByUsers?: IJphParamsUsers
  readonly options?: IJphOptions
  readonly filters?: object
}

export interface IJphHooks {
  readonly success: array
  readonly error?: object
}

export function useJsonPlaceHolder(inputs: IJphPropertyHooks) : IJphHooks {}
