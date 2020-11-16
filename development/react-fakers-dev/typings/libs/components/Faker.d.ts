// =================================================================
//                   FAKER TYPINGS TERITORY
// =================================================================

export interface IFakerOptionsAddress {
  readonly quantity?: number,
  readonly local?: string
  readonly seed?: number
}

export interface IFakerOptionsBooks {
  readonly quantity?: number,
  readonly local?: string
  readonly seed?: number
}

export interface IFakerOptionsCompanies {
  readonly quantity?: number,
  readonly local?: string
  readonly seed?: number
}

export interface IFakerOptionsCreditCard {
  readonly quantity?: number,
  readonly local?: string
  readonly seed?: number
}

export interface IFakerOptionsImages {
  readonly quantity?: number,
  readonly local?: string
  readonly seed?: number
  readonly type?: string
  readonly width?: number
  readonly height?: number
}

export interface IFakerOptionsPersons {
  readonly quantity?: number,
  readonly local?: string
  readonly seed?: number,
  readonly gender?: string
  readonly birthday_start?: string
  readonly birthday_end?: string
}

export interface IFakerOptionsPlaces {
  readonly quantity?: number,
  readonly local?: string
  readonly seed?: number
}

export interface IFakerOptionsProducts {
  readonly quantity?: number
  readonly local?: string
  readonly seed?: number
  readonly price_min?: number
  readonly price_max?: number
  readonly taxes?: number
  readonly categories_type?: string
}

export interface IFakerOptionsTexts {
  readonly quantity?: number
  readonly local?: string
  readonly seed?: number
  readonly characters?: number
}

export interface IFakerOptionsUsers {
  readonly quantity?: number
  readonly local?: string
  readonly seed?: number
  readonly gender?: string
}

export interface IJphParams {
  readonly addresses?: IFakerOptionsAddress
  readonly books?: IFakerOptionsBooks
  readonly companies?: IFakerOptionsCompanies
  readonly credit_cards?: IFakerOptionsCreditCard
  readonly images?: IFakerOptionsImages
  readonly persons?: IFakerOptionsPersons
  readonly places?: IFakerOptionsPlaces
  readonly products?: IFakerOptionsProducts
  readonly texts?: IFakerOptionsTexts
  readonly users?: IFakerOptionsUsers
}

export interface IFakerProperty {
  readonly success: () => void
  readonly error?: () => void
  readonly type?: string
  readonly params?: IJphParams
}

export class Faker extends Component<IFakerProperty> {}
