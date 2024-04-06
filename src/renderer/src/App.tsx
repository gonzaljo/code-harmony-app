/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutPage from './pages/LayoutPage'
import ConfigurationPage from './pages/ConfigurationPage'
import ApplicationPage from './pages/ApplicationPage'
import CodesPage from './pages/CodesPage'
import TextsPage from './pages/TextsPage'
import ReferencesPage from './pages/ReferencesPage'

function App(): JSX.Element {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <LayoutPage />,
      children: [
        {
          path: '',
          element: <ConfigurationPage />
        },
        {
          path: 'app',
          element: <ApplicationPage />
        },
        {
          path: 'codes',
          element: <CodesPage />
        },
        {
          path: 'texts',
          element: <TextsPage />
        },
        {
          path: 'refs',
          element: <ReferencesPage />
        }
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App
