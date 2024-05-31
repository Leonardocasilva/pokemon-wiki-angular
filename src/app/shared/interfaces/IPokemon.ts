import { IPokemonDetail } from "./IPokemonDetail"

export interface IPokemon {
  count: number,
  next: string,
  previous: string,
  results: IPokemonResult[]
}

export interface IPokemonResult {
  name: string,
  url: string,
  details: IPokemonDetail
}
