import { useState } from 'react'

import { Card } from '@/components/Card/Card'
import { Modal } from '@/components/Modal'
import { Typography } from '@/components/Typography'
import { Character } from '@/services/charactersApi'

import cl from './CharCard.module.scss'

export const CharCard = ({ char: c }: CharCardProps) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Modal changeModalState={setOpen} open={open} title={c.name ?? ''} withTrigger={false}>
        {Object.entries(c).map(([objkey, value], ind) => (
          <div key={ind}>
            <Typography variant={'body1'}>{objkey}</Typography>:
            <Typography variant={'body1'}> {JSON.stringify(value)}</Typography>
          </div>
        ))}
      </Modal>
      <Card key={c.id} onClick={() => setOpen(true)}>
        <img className={'w-full h-full'} src={c.image} />
        <div className={'p-5 flex flex-col gap-1'}>
          <Typography as={'h3'} variant={'h3'}>
            {c.name}
          </Typography>
          <Typography
            as={'h3'}
            className={cl[c.status ?? ''] + ' ' + cl.status}
            variant={'caption'}
          >
            {c.status} - {c.species}
          </Typography>
          <Typography as={'h3'} className={'!text-gray-500'} variant={'caption'}>
            Last known location:
          </Typography>
          <Typography
            as={'a'}
            className={'hover:text-orange-500 transition'}
            href={c.location.url}
            onClick={e => e.stopPropagation()}
            variant={'body2'}
          >
            {c.location.name}
          </Typography>
          <Typography as={'h3'} className={'!text-gray-500'} variant={'caption'}>
            First seen in:
          </Typography>
          <Typography
            as={'a'}
            className={'hover:text-orange-500 transition'}
            href={c.origin.url}
            onClick={e => e.stopPropagation()}
            variant={'body2'}
          >
            {c.origin.name}
          </Typography>
        </div>
      </Card>
    </>
  )
}

type CharCardProps = {
  char: Character
}
