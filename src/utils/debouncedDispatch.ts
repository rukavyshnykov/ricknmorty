import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { ActionCreator, UnknownAction } from '@reduxjs/toolkit'

export const useDebouncedDispatch = (fn: ActionCreator<UnknownAction>, filter: string) => {
  const [timerId, setTimerId] = useState<number | undefined>(undefined)
  const dispatch = useDispatch()

  const setValue = (value: string) => {
    clearTimeout(timerId)
    setTimerId(undefined)
    const timer = setTimeout(() => {
      dispatch(fn({ [filter]: value }))
    }, 1000)

    setTimerId(Number(timer))
  }

  return setValue
}
