/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { RootState } from '@/store'
import { IConfiguration, configurationFactory, groupFactory } from '@shared/model/configuration'
import { useSelector } from 'react-redux'
import { newConfiguration } from '../store/configuration'
import { useDispatch } from 'react-redux'
import { codeHarmonyFactory } from '@shared/model/application'
import Navigation from '@renderer/components/Navigation'
import { Outlet } from 'react-router-dom'

function LayoutPage(): JSX.Element {
  const selector = (state: RootState): IConfiguration => state.configuration
  const configuration = useSelector(selector)

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

  return (
    <>
      <div className="h-lvh flex flex-col">
        <div className="flex flex-grow overflow-y-scroll">
          <nav
            id="sidebar"
            className="basis-12 shrink-0 bg-indigo-950 text-center border-b-indigo-700 border-b"
          >
            <Navigation />
          </nav>
          <main className="flex flex-col flex-grow">
            <Outlet />
          </main>
        </div>
        <footer id="footer" className="basis-8 shrink-0 bg-indigo-950 text-white align-bottom">
          <p className="text-sm pl-2 m-0 pt-1">Path: {path}</p>
        </footer>
      </div>
    </>
  )
}

export default LayoutPage
