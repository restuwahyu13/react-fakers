// =================================================================
//                  HOOKS FAKER TYPINGS TERITORY
// =================================================================

export interface IStarWarsPropertyHooks {
  readonly type?: string
  readonly params?: IStarWarsParams
  readonly options?: IStarWarsPropertyOptions
  readonly filters?: object
}

export interface IStarWarsHooks {
  readonly success: any[]
  readonly error: object
  readonly loading: boolean
}

export function useStarWars(inputs: IStarWarsPropertyHooks) : IStarWarsHooks {}
