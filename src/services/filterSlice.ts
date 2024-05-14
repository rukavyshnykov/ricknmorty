import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { CharactersArgs } from './charactersApi'

const initialState: Omit<CharactersArgs, 'page'> = {
  gender: undefined,
  name: '',
  species: '',
  status: undefined,
  type: '',
}

const slice = createSlice({
  initialState,
  name: 'filter',
  reducers: {
    changeGender: (
      state,
      action: PayloadAction<{ gender: 'Female' | 'Genderless' | 'Male' | 'unknown' | undefined }>
    ) => {
      state.gender = action.payload.gender
    },
    changeName: (state, action: PayloadAction<{ name: string | undefined }>) => {
      state.name = action.payload.name
    },
    changeSpecies: (state, action: PayloadAction<{ species: string | undefined }>) => {
      state.species = action.payload.species
    },
    changeStatus: (
      state,
      action: PayloadAction<{ status: 'Alive' | 'Dead' | 'unknown' | undefined }>
    ) => {
      state.status = action.payload.status
    },
    changeType: (state, action: PayloadAction<{ type: string | undefined }>) => {
      state.type = action.payload.type
    },
    resetFilters: state => {
      const test = (
        state: Omit<CharactersArgs, 'page'>,
        prop: keyof Omit<CharactersArgs, 'page'>
      ) => {
        state[prop] = null
      }

      for (const prop in state) {
        test(state, prop as 'gender' | 'name' | 'species' | 'status' | 'type')
      }
    },
  },
})

export const filterReducer = slice.reducer
export const filterActions = slice.actions
