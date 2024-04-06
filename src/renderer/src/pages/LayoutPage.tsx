/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { configurationFactory, groupFactory } from '@shared/model/configuration'
import { useDispatch } from 'react-redux'
import { codeHarmonyFactory } from '@shared/model/application'
import Navigation from '@renderer/components/Navigation'
import { Outlet } from 'react-router-dom'
import { setCodeHarmonyState } from '@renderer/store/code-harmony'
import { newConfiguration } from '@renderer/store/configuration'

function LayoutPage(): JSX.Element {
  const dispatch = useDispatch()
  const [path, setPath] = useState('')

  window.menu.onNewFile((value: string) => {
    const config = configurationFactory(true)
    config.groups.push(groupFactory('UI', 'Group for UI purpose'))
    dispatch({ type: newConfiguration.type, payload: config })
    const ch = codeHarmonyFactory(value, config)
    window.files.onSave(ch)
    dispatch({ type: setCodeHarmonyState.type, payload: { path: value } })
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
