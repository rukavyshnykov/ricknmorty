import { RootState } from './store'
//TODO
const name = (state: RootState) => state.filter.name
const species = (state: RootState) => state.filter.species
const type = (state: RootState) => state.filter.type
const status = (state: RootState) => state.filter.status
const gender = (state: RootState) => state.filter.gender

export const filterSelectors = { gender, name, species, status, type }
