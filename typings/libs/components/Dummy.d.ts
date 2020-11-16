// =================================================================
//                   DUMMY TYPINGS TERITORY
// =================================================================

export interface IDummyParamsUser{
  readonly id?: string
  readonly refs?: string
}

export interface IDummyParamsPost {
  readonly id?: string
  readonly refs?: string
}

export interface IDummyParamsTag {
  readonly id?: string
  readonly refs?: string
}

export interface IDummyParams {
   readonly user?: IDummyParamsUser
   readonly post?: IDummyParamsPost
   readonly tag?: IDummyParamsTag
}

export interface IDummyProperty {
  readonly success: () => void
  readonly error?: () => void
  readonly apiKey: string
  readonly params?: IDummyParams
  readonly options?: IDummyPropertyOptions
  readonly filters?: object
}

export class Dummy extends Component <IDummyProperty> {}
