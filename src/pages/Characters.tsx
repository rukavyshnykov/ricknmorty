import { useGetCharactersQuery } from '@/services/charactersApi'

export const Characters = () => {
  const { data: characters, isFetching, isLoading } = useGetCharactersQuery()

  if (isFetching) {
    return <>Loading...</>
  }

  return (
    <div>
      <>{characters?.info && characters.info.count}</>
    </div>
  )
}
