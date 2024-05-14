import { useState } from 'react'

import logo from '@/assets/logo.png'
import { Sidebar } from '@/features/Sidebar/Sidebar'
import { Characters } from '@/pages/Characters'
export const Layout = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div>
      <div className={'flex items-center bg-stone-700 gap-2.5 p-5'}>
        <Sidebar changeModalState={setOpen} open={open} />
        <img className={'w-40'} src={logo} />
      </div>
      <div className={'mb-8 mt-8 w-full'}>
        <div className={'flex justify-center mx-auto my-0 max-w-7xl'}>
          <Characters />
        </div>
      </div>
    </div>
  )
}
