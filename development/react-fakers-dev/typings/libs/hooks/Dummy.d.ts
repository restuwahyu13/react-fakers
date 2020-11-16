// =================================================================
//                 HOOKS DUMMY TYPINGS TERITORY
// =================================================================

export interface IDummyPropertyHooks {
  readonly typeProvider?: string
  readonly paramsByUser?: IDummyParamsUser
  readonly paramsByPost?:IDummyParamsPost
  readonly paramsByTag?: IDummyParamsTag
  readonly apiKey: string
  readonly filters?: object
  readonly options?: IDummyPropertyOptions
}

export interface IDummyHooks {
  readonly response: array
}

export function useDummy(inputs: IDummyPropertyHooks) : IDummyHooks {}
