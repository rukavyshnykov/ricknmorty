import { baseApi } from './base-api'

const charactersApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCharacters: builder.query<basicResponse<Character>, void>({
      query: () => {
        return {
          url: '/character',
        }
      },
    }),
  }),
})

export const { useGetCharactersQuery } = charactersApi

export type CharactersArgs = Partial<
  Pick<Character, 'gender' | 'name' | 'species' | 'status' | 'type'>
>

export type basicResponse<T> = {
  info: Info
  result: T[]
}

export type Character = {
  created: string
  episode: string[]
  gender: 'Female' | 'Genderless' | 'Male' | 'unknown'
  id: number
  image: string
  location: Location
  name: string
  origin: Origin
  species: string
  status: 'Alive' | 'Dead' | 'unknown'
  type: string
  url: string
}

type Origin = {
  link: string
  name: string
}

type Location = {
  link: string
  name: string
}

type Info = {
  count: number
  next: string
  pages: number
  prev: string
}
