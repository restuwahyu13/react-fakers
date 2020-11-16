// =================================================================
//                  HOOKS FAKER TYPINGS TERITORY
// =================================================================

export interface IFakerPropertyHooks {
  readonly typeProvider?: string
  readonly paramsByAddress:? IFakerOptionsAddress
  readonly paramsByBooks:? IFakerOptionsBooks
  readonly paramsByCompanies:? IFakerOptionsCompanies
  readonly paramsByCreditCards:? IFakerOptionsCreditCard
  readonly paramsByImages:? IFakerOptionsImages
  readonly paramsByPersons:? IFakerOptionsPersons
  readonly paramsByPlaces:? IFakerOptionsPlaces
  readonly paramsByProducts:? IFakerOptionsProducts
  readonly paramsByTexts:? IFakerOptionsTexts
  readonly paramsByUsers:? IFakerOptionsUsers
}

export interface IFakerHooks {
  readonly success: array | any
  readonly error?: object | any
}

export function useFaker(inputs: IFakerPropertyHooks) : IFakerHooks {}
