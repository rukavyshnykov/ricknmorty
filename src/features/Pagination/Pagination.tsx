import { Button } from '@/components/Button'
import { Info } from '@/services/charactersApi'
import { arrayRange } from '@/utils/arrayRange'

export const Pagination = ({ info, onNext, onPrev, page, setPage }: PagiantionProps) => {
  const { next, pages, prev } = info

  const getSortVariant = (curPage: number) => (curPage === page ? 'primary' : 'secondary')

  if (pages === 1) {
    return <Button variant={getSortVariant(1)}>{page}</Button>
  }
  if (pages === 2) {
    return (
      <div className={'flex'}>
        <Button variant={getSortVariant(1)}>{1}</Button>

        <Button variant={getSortVariant(pages)}>{pages}</Button>
      </div>
    )
  }

  if (pages <= 6) {
    return (
      <div className={'flex'}>
        <Button disabled={!prev && true} onClick={() => onPrev()} variant={'secondary'}>
          prev
        </Button>
        <Button variant={getSortVariant(1)}>{1}</Button>
        {arrayRange(2, pages - 1, 1).map(el => (
          <Button key={el} variant={getSortVariant(el)}>
            {el}
          </Button>
        ))}
        <Button variant={getSortVariant(pages)}>{pages}</Button>
        <Button disabled={!next && true} onClick={() => onNext()} variant={'secondary'}>
          next
        </Button>
      </div>
    )
  }

  return (
    <div className={'flex'}>
      <Button disabled={!prev && true} onClick={() => onPrev()} variant={'secondary'}>
        prev
      </Button>
      {page !== 1 && <Button variant={getSortVariant(1)}>{1}</Button>}
      {page > 3 && <>...</>}
      {page - 1 > 1 &&
        arrayRange(page - 1, page - 1, 1).map(el => (
          <Button key={el} onClick={() => setPage(el)} variant={getSortVariant(el)}>
            {el}
          </Button>
        ))}
      <Button variant={getSortVariant(page)}>{page}</Button>
      {page + 1 < pages &&
        arrayRange(page + 1, page + 1, 1).map(el => (
          <Button key={el} onClick={() => setPage(el)} variant={getSortVariant(el)}>
            {el}
          </Button>
        ))}
      {page < pages - 2 && <>...</>}
      {page !== pages && (
        <Button onClick={() => setPage(pages)} variant={getSortVariant(pages)}>
          {pages}
        </Button>
      )}
      <Button disabled={!next && true} onClick={() => onNext()} variant={'secondary'}>
        next
      </Button>
    </div>
  )
}

type PagiantionProps = {
  info: Info
  onNext: () => void
  onPrev: () => void
  page: number
  setPage: (page: number) => void
}
