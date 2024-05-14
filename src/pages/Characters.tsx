import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { CharCard } from '@/features/CharCard/CharCard'
import { Pagination } from '@/features/Pagination/Pagination'
import { Sort } from '@/features/Sort/Sort'
import { Character, useGetCharactersQuery } from '@/services/charactersApi'
import { filterSelectors } from '@/services/selectors'

import { SortDirections, sortFunctionMap } from './constants'

export const Characters = () => {
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState(SortDirections.Default)

  const name = useSelector(filterSelectors.name)
  const type = useSelector(filterSelectors.type)
  const species = useSelector(filterSelectors.species)
  const status = useSelector(filterSelectors.status)
  const gender = useSelector(filterSelectors.gender)

  const {
    data: characters,
    error,
    isError,
    isFetching,
  } = useGetCharactersQuery({
    gender,
    name,
    page,
    species,
    status,
    type,
  })

  const [sortedChars, setSortedChars] = useState<Character[]>([])

  useEffect(() => {
    if (!characters) {
      return
    }
    const sortedCharacters = [...characters.results]

    if (sortFunctionMap[sort]) {
      sortedCharacters.sort(sortFunctionMap[sort])
    }
    setSortedChars(sortedCharacters)
  }, [sort, characters])

  const onNextClick = () => {
    setPage(prev => prev + 1)
  }

  const onPrevClick = () => {
    setPage(prev => prev - 1)
  }

  const onSortClick = (value: SortDirections) => setSort(value)

  if (isFetching) {
    return <>Loading...</>
  }

  if (isError) {
    return <>{(error as err).data.error}</>
  }

  if (characters) {
    return (
      <div className={'items-center flex flex-col gap-5'}>
        <Sort setSort={onSortClick} sort={sort} title={'amount of episodes'} />
        <div className={'flex flex-wrap gap-16 justify-center mx-5'}>
          {sortedChars.map(c => (
            <CharCard char={c} key={c.id} />
          ))}
        </div>
        <Pagination
          info={characters!.info}
          onNext={onNextClick}
          onPrev={onPrevClick}
          page={page}
          setPage={setPage}
        />
      </div>
    )
  }
}

type err = {
  data: {
    error: string
  }
}
