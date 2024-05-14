import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from './components/Layout/Layout'
import { Characters } from './pages/Characters'

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Characters />,
        path: '/',
      },
    ],
    element: <Layout />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
