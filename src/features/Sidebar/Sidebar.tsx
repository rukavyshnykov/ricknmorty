import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import logo from '@/assets/logo.png'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon/Icon'
import { Radio } from '@/components/Radio'
import { filterActions } from '@/services/filterSlice'
import { filterSelectors } from '@/services/selectors'
import { useDebouncedDispatch } from '@/utils/debouncedDispatch'
import * as Dialog from '@radix-ui/react-dialog'

import c from './Sidebar.module.scss'

import { GenderOptions, StatusOptions } from './constants'

export const Sidebar = ({ changeModalState, className, open }: SidebarProps) => {
  const dispatch = useDispatch()

  const name = useSelector(filterSelectors.name)
  const type = useSelector(filterSelectors.type)
  const species = useSelector(filterSelectors.species)
  const gender = useSelector(filterSelectors.gender)
  const status = useSelector(filterSelectors.status)

  const setName = useDebouncedDispatch(filterActions.changeName, 'name')
  const setType = useDebouncedDispatch(filterActions.changeType, 'type')
  const setSpecies = useDebouncedDispatch(filterActions.changeSpecies, 'species')

  const inputRef = useRef<HTMLInputElement[]>([])

  const setStatus = (status: 'Alive' | 'Dead' | 'unknown') =>
    dispatch(filterActions.changeStatus({ status }))
  const setGender = (gender: 'Female' | 'Genderless' | 'Male' | 'unknown') =>
    dispatch(filterActions.changeGender({ gender }))
  const clearFilters = () => {
    dispatch(filterActions.resetFilters())
    inputRef.current.forEach(el => (el.value = ''))
  }

  return (
    <Dialog.Root onOpenChange={() => changeModalState(!open)} open={open}>
      <Dialog.Trigger className={c.trigger + ` ${className ? className : ''}`}>
        <Icon fill={'white'} height={24} iconId={'burger'} stroke={'white'} width={24} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={c.overlay} />
        <Dialog.Content className={c.root}>
          <div className={c.header}>
            <Icon fill={'white'} height={24} iconId={'burger'} stroke={'white'} width={24} />
            <img className={'w-40'} src={logo} />
          </div>
          <div className={c.content}>
            <>Set Name</>
            <input
              className={'text-black'}
              defaultValue={name ?? ''}
              onChange={e => setName(e.target.value)}
              ref={el => inputRef.current.push(el!)}
            />
            <hr />
            <>Set Type</>
            <input
              className={'text-black'}
              defaultValue={type ?? ''}
              onChange={e => setType(e.target.value)}
              ref={el => inputRef.current.push(el!)}
            />
            <hr />
            <>Set Species</>
            <input
              className={'text-black'}
              defaultValue={species ?? ''}
              onChange={e => setSpecies(e.target.value)}
              ref={el => inputRef.current.push(el!)}
            />
            <hr />
            <>SetStatus</>
            <Radio onValChange={setStatus} options={StatusOptions} value={status} />
            <hr />
            <>Set Gender</>
            <Radio onValChange={setGender} options={GenderOptions} value={gender} />
            <hr />
            <Button onClick={() => clearFilters()} variant={'primary'}>
              Reset Filters
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

type SidebarProps = {
  changeModalState: (open: boolean) => void
  className?: string
  open: boolean
}
