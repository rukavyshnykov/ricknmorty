import { ComponentPropsWithoutRef, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import c from './Radio.module.scss'

import { Typography } from '../Typography'

export const Radio = forwardRef<HTMLDivElement, RadioProps>(
  ({ className, onValChange, options, value, ...rest }, ref) => {
    return (
      <RadioGroup.Root
        className={c.wrapper + ' ' + className}
        onValueChange={val => onValChange(val)}
        ref={ref}
        value={value ?? ''}
        {...rest}
      >
        {options?.map(opt => {
          return (
            <Typography as={'label'} className={c.label} key={opt.value} variant={'body2'}>
              <RadioGroup.Item className={c.radio} value={opt.value}>
                <RadioGroup.Indicator className={c.indicator} />
              </RadioGroup.Item>
              <Typography variant={'body2'}>{opt.label}</Typography>
            </Typography>
          )
        })}
      </RadioGroup.Root>
    )
  }
)

type Option = {
  label: string
  value: string
}

export type RadioProps = {
  onValChange: (value: any) => void
  options?: Option[]
  value: null | string | undefined
} & Omit<ComponentPropsWithoutRef<typeof RadioGroup.Root>, 'value'>
