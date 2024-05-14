import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import c from './Modal.module.scss'

import { Button } from '../Button'
import { Icon } from '../Icon/Icon'
import { Typography } from '../Typography'

type ModalProps = {
  changeModalState: (open: boolean) => void
  children: ReactNode
  className?: string
  customTrigger?: ReactNode
  open: boolean
  title: string
  withTrigger: boolean
}

export const Modal = ({
  changeModalState,
  children,
  className,
  customTrigger,
  open,
  title,
  withTrigger,
}: ModalProps) => {
  return (
    <Dialog.Root onOpenChange={() => changeModalState(!open)} open={open}>
      {withTrigger && (
        <Dialog.Trigger className={c.trigger + ` ${className ? className : ''}`}>
          {customTrigger ? (
            customTrigger
          ) : (
            <Button as={'span'} className={className ? className : ''} variant={'primary'}>
              <Typography variant={'h3'}>{title}</Typography>
            </Button>
          )}
        </Dialog.Trigger>
      )}
      <Dialog.Portal>
        <Dialog.Overlay className={c.overlay} />
        <Dialog.Content className={c.root}>
          <div className={c.header}>
            <Dialog.Title className={c.title}>
              <Typography variant={'h3'}>{title}</Typography>
            </Dialog.Title>
            <Dialog.Close className={c.close}>
              <Icon height={24} iconId={'close'} width={24} />
            </Dialog.Close>
          </div>
          <div className={c.content}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
