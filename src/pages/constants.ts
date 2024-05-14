import { Character } from '@/services/charactersApi'

export enum SortDirections {
  Asc = 'ASC',
  Default = 'DEFAULT',
  Desc = 'DESC',
}

export const sortFunctionMap = {
  [SortDirections.Asc]: (a: Character, b: Character) => a.episode.length - b.episode.length,
  [SortDirections.Default]: undefined,
  [SortDirections.Desc]: (a: Character, b: Character) => b.episode.length - a.episode.length,
}
