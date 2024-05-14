import { ComponentPropsWithoutRef } from 'react'

import Sprite from '@/assets/sprite.svg'

export const Icon = ({ height, iconId, width, ...rest }: PropsType) => {
  return (
    <svg className={'block'} height={height + 'px'} width={width + 'px'} {...rest}>
      <use href={`${Sprite}#${iconId}`} />
    </svg>
  )
}

type IconProps = {
  height: number
  iconId: string
  width: number
}

type PropsType = IconProps & Omit<ComponentPropsWithoutRef<'svg'>, keyof IconProps>
