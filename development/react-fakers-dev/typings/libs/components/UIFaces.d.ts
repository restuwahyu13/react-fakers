// =================================================================
//                   UI FACES TYPINGS TERITORY
// =================================================================

export interface IFacesParams {
  readonly limit?: number
  readonly gender?: string
  readonly from_age?: number
  readonly to_age?: number
  readonly hairColor?: string
  readonly emotion?: string
}

export interface IFaces {
   readonly onSuccess: () => void
   readonly onError?: () => void
   readonly params?: IFacesParams
   readonly apiKey: string
}

export class UIFaces extends Component<IFaces> {}
