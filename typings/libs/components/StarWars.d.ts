// =================================================================
//                   STAR WARS TYPINGS TERITORY
// =================================================================

export interface IStarWarsParamsOptions {
  readonly id: number,
  readonly refs: string
}

export interface IStarWarsPropertyOptions {
  readonly limit?: number,
}

export interface IStarWarsParams {
  readonly people: IStarWarsParamsOptions
  readonly films: IStarWarsParamsOptions
  readonly starships: IStarWarsParamsOptions
  readonly vehicles: IStarWarsParamsOptions
  readonly species: IStarWarsParamsOptions
  readonly planets: IStarWarsParamsOptions
}

export interface IStarWarsProperty {
  readonly success: () => void
  readonly error: () => void
  readonly params?: IStarWarsParams
  readonly options?: IStarWarsPropertyOptions
  readonly filters?: object
}

export class StarWars extends Component<IStarWarsProperty> {}
