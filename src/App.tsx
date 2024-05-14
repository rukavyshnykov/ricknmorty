import { Provider } from 'react-redux'

import { Layout } from './components/Layout/Layout'
import { store } from './services/store'

export function App() {
  return (
    <Provider store={store}>
      {/* <Router /> */}
      <Layout />
    </Provider>
  )
}
