/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import { useState } from 'react'
import { RootState } from './store'
import { IConfiguration, configurationFactory, groupFactory } from '@shared/model/configuration'
import { useSelector } from 'react-redux'
import { newConfiguration } from './store/configuration'
import { useDispatch } from 'react-redux'
import { codeHarmonyFactory } from '@shared/model/application'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutPage from './pages/LayoutPage'
import ConfigurationPage from './pages/ConfigurationPage'
import ApplicationPage from './pages/ApplicationPage'
import CodesPage from './pages/CodesPage'
import TextsPage from './pages/TextsPage'
import ReferencesPage from './pages/ReferencesPage'

function App(): JSX.Element {
  const selector = (state: RootState): IConfiguration => state.configuration

  const dispatch = useDispatch()
  const [path, setPath] = useState('')

  window.menu.onNewFile((value) => {
    console.log('New file', value)
    const config = configurationFactory(true)
    config.groups.push(groupFactory('UI', 'Group for UI purpose'))
    dispatch({ type: newConfiguration.type, payload: config })
    console.log('Save configuration ot file', value)
    window.files.onSave(codeHarmonyFactory(value, config))
    setPath(value)
  })

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
