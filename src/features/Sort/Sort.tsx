import { Button } from '@/components/Button'
import { SortDirections } from '@/pages/constants'

export const Sort = ({ setSort, sort, title }: SortProps) => {
  const getSortVariant = (sortDirection: SortDirections) =>
    sort === sortDirection ? 'primary' : 'secondary'

  return (
    <div className={'flex items-center gap-2'}>
      Sort by {title}:
      <Button
        onClick={() => setSort(SortDirections.Asc)}
        variant={getSortVariant(SortDirections.Asc)}
      >
        Ascending
      </Button>
      <Button
        onClick={() => setSort(SortDirections.Desc)}
        variant={getSortVariant(SortDirections.Desc)}
      >
        Descending
      </Button>
      <Button
        onClick={() => setSort(SortDirections.Default)}
        variant={getSortVariant(SortDirections.Default)}
      >
        Default
      </Button>
    </div>
  )
}

type SortProps = {
  setSort: (value: SortDirections) => void
  sort: SortDirections
  title: string
}
