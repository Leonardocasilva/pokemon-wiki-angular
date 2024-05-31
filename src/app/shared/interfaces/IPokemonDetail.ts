export interface IPokemonDetail {
  abilities: IAbilities[],
  base_experience: number,
  cries: ICries,
  forms: IForms[],
  game_indices: IGameIndices[],
  height: number,
  held_items: any[],
  id: number,
  is_default: true,
  location_area_encounters: string,
  moves: IMoves[],
  name: string,
  order: number,
  past_abilities: any[],
  past_types: any[],
  species: ISpecie,
  sprites: ISprites,
  stats: IStats[],
  types: ITypes[],
  weight: number
}

interface IAbilities {
  ability: IAbility,
  is_hidden: boolean,
  slot: number
}

interface IAbility {
  name: string,
  url: string
}

interface ICries {
  latest: string,
  legacy: string,
}

interface IForms {
  name: string,
  url: string
}

interface IGameIndices {
  game_index: number,
  version: IVersion
}

interface IVersion {
  name: string,
  url: string
}

interface IMoves {
  move: IMove,
  version_group_details: IVersionGroupDetail
}

interface IMove {
  name: string,
  url: string
}

interface IVersionGroupDetail {
  level_learned_at: number,
  move_learn_method: IMoveLearnMethod,
  version_group: IVersionGroup
}

interface IMoveLearnMethod {
  name: string,
  url: string
}

interface IVersionGroup {
  name: string,
  url: string
}

interface ISpecie {
  name: string,
  url: string
}

interface ISprites {
  back_default: string,
  back_female: string,
  back_shiny: string,
  back_shiny_female: string,
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string,
  other: IOtherSprites,
  versions: any[]
}

interface IOtherSprites {
  dream_world:IDreamWorld,
  home: IHome,
  'official-artwork': IOfficialArtwork,
  showdown: IShowdown
}

interface IDreamWorld {
  front_default: string,
  front_female: string
}

interface IHome {
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string
}

interface IOfficialArtwork {
  front_default: string,
  front_shiny: string
}

interface IShowdown {
  back_default: string,
  back_female: string,
  back_shiny: string,
  back_shiny_female: string,
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string
}

interface IStats {
  base_stat:  number,
  effort: number,
  stat: IStat
}

interface IStat {
  name: string,
  url: string
}

interface ITypes {
  slot: number,
  type: IType
}

interface IType {
  name: string,
  url: string
}
