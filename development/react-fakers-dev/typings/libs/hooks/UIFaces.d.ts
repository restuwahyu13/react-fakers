// =================================================================
//                 HOOKS UI FACES TYPINGS TERITORY
// =================================================================

export interface IFacesParams {
  readonly limit?: number
  readonly gender?: string
  readonly from_age?: number
  readonly to_age?: number
  readonly hairColor?: string
  readonly emotion?: string
}

export interface IFacesPropertyHooks {
  readonly params?: IFacesParams
  readonly apiKey: string
}

export interface IFacesHooks {
  readonly success: array
  readonly error?: object
}

export function useUIFaces(inputs: IFacesPropertyHooks) : IFacesHooks {}
