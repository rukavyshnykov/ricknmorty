import { baseApi } from './base-api'

const charactersApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCharacters: builder.query<basicResponse<Character>, CharactersArgs>({
      providesTags: ['Chars'],
      query: params => {
        const refined = Object.fromEntries(
          Object.entries(params).filter(
            ([_, value]: any[]) =>
              !(
                value === undefined ||
                value === null ||
                (typeof value === 'string' && !value.length)
              )
          )
        )

        return {
          params: refined,
          url: '/character',
        }
      },
    }),
  }),
})

export const { useGetCharactersQuery } = charactersApi

export type CharactersArgs = { page: number } & Partial<
  Pick<Character, 'gender' | 'name' | 'species' | 'status' | 'type'>
>

export type basicResponse<T> = {
  info: Info
  results: T[]
}

export type Character = {
  created: string
  episode: string[]
  gender: 'Female' | 'Genderless' | 'Male' | 'unknown' | null
  id: number
  image: string
  location: Location
  name: null | string
  origin: Origin
  species: null | string
  status: 'Alive' | 'Dead' | 'unknown' | null
  type: null | string
  url: string
}

type Origin = {
  name: string
  url: string
}

type Location = {
  name: string
  url: string
}

export type Info = {
  count: number
  next: null | string
  pages: number
  prev: null | string
}
