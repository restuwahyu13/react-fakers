// Type definitions for react-fakers v1.0.0
// Definitions Project: https://github.com/restuwahyu13/react-fakers
// Definitions by: Restu Wahyu Saputra <https://github.com/restuwahyu13>

import { Component } from 'react'

// =================================================================
//                    START REACT FAKERS
// =================================================================

export as namespace ReactFakers

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

export interface IFakerParams {
  readonly addresses: IFakerOptionsAddress
  readonly books: IFakerOptionsBooks
  readonly companies: IFakerOptionsCompanies
  readonly credit_cards: IFakerOptionsCreditCard
  readonly images: IFakerOptionsImages
  readonly persons: IFakerOptionsPersons
  readonly places: IFakerOptionsPlaces
  readonly products: IFakerOptionsProducts
  readonly texts: IFakerOptionsTexts
  readonly users: IFakerOptionsUsers
}

export interface IFakerProperty {
  readonly success: () => void
  readonly error: () => void
  readonly type?: string
  readonly params?: IFakerParams
}

export class Faker extends Component<IFakerProperty> {}

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

export interface IJphParams {
  readonly posts: IJphParamsPosts
  readonly comments: IJphParamsComments
  readonly albums: IJphParamsAlbums
  readonly photos: IJphParamsPhotos
  readonly todos: IJphParamsTodos
  readonly users: IJphParamsUsers
}

export interface IJphOptions {
  readonly limit?: number
}

export interface IJph {
  readonly success: () => void
  readonly error: () => void
  readonly type?: string
  readonly params?: IJphParams
  readonly options?: IJphOptions
  readonly filters?: object
}

export class JsonPlaceHolder extends Component<IJph> {}

// =================================================================
//                   DUMMY TYPINGS TERITORY
// =================================================================

export interface IDummyParamsUser{
  readonly id: string
  readonly refs: string
}

export interface IDummyParamsPost {
  readonly id: string
  readonly refs: string
}

export interface IDummyParamsTag {
  readonly id: string
  readonly refs: string
}

export interface IDummyPropertyOptions {
  readonly limit?: number
}

export interface IDummyParams {
  readonly user: IDummyParamsUser
  readonly post: IDummyParamsPost
  readonly tag: IDummyParamsTag
}

export interface IDummyProperty {
  readonly success: () => void
  readonly error: () => void
  readonly apiKey?: string
  readonly params?: IDummyParams
  readonly options?: IDummyPropertyOptions
  readonly filters?: object
}

export class Dummy extends Component <IDummyProperty> {}

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

export interface IFacesProperty {
   readonly success: () => void
   readonly error: () => void
   readonly apiKey?: string
   readonly params?: IFacesParams
}

export class UIFaces extends Component<IFacesProperty> {}

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
  readonly type?: string
  readonly params?: IStarWarsParams
  readonly options?: IStarWarsPropertyOptions
  readonly filters?: object
}

export class StarWars extends Component<IStarWarsProperty> {}

// =================================================================
//                  HOOKS FAKER TYPINGS TERITORY
// =================================================================

export interface IFakerPropertyHooks {
  readonly type?: string
  readonly params?: IFakerParams
}

export interface IFakerHooks {
  readonly success: any[]
  readonly error: object
  readonly loading: boolean
}

export function useFaker(inputs: IFakerPropertyHooks) : IFakerHooks {}

// =================================================================
//             HOOKS JSON PLACE HOLDER TYPINGS TERITORY
// =================================================================

export interface IJphPropertyHooks {
  readonly type?: string
  readonly params?: IJphParams
  readonly options?: IJphOptions
  readonly filters?: object
}

export interface IJphHooks {
  readonly success: any[]
  readonly error: object
  readonly loading: boolean
}

export function useJsonPlaceHolder(inputs: IJphPropertyHooks) : IJphHooks {}

// =================================================================
//                 HOOKS DUMMY TYPINGS TERITORY
// =================================================================

export interface IDummyPropertyHooks {
  readonly type?: string
  readonly apiKey?: string
  readonly params?: IDummyParams
  readonly options?: IDummyPropertyOptions
  readonly filters?: object
}

export interface IDummyHooks {
  readonly success: any[]
  readonly error: object
  readonly loading: boolean
}

export function useDummy(inputs: IDummyPropertyHooks) : IDummyHooks {}

// =================================================================
//                 HOOKS UI FACES TYPINGS TERITORY
// =================================================================

export interface IFacesPropertyHooks {
  readonly apiKey?: string
  readonly params?: IFacesParams
}

export interface IFacesHooks {
  readonly success: any[]
  readonly error: object
  readonly loading: boolean
}

export function useUIFaces(inputs: IFacesPropertyHooks) : IFacesHooks {}

// =================================================================
//                  HOOKS STAR WARS TYPINGS TERITORY
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

// =================================================================
//                    END REACT FAKERS
// =================================================================

export default ReactFakers
