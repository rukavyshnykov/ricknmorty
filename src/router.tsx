import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Characters } from './pages/Characters'

const router = createBrowserRouter([
  {
    element: <Characters />,
    path: '/',
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
