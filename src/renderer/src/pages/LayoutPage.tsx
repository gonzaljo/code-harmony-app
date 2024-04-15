/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { configurationFactory, groupFactory } from '@shared/model/configuration'
import { useDispatch } from 'react-redux'
import { ICodeHarmony, codeHarmonyFactory } from '@shared/model/application'
import Navigation from '@renderer/components/Navigation'
import { Outlet } from 'react-router-dom'
import { setCodeHarmonyState } from '@renderer/store/code-harmony'
import { newConfiguration } from '@renderer/store/configuration'
import { useSelector } from 'react-redux'
import { RootState } from '@renderer/store'
import storeFile from '@renderer/procedures/storeFile'

function LayoutPage(): JSX.Element {
  const dispatch = useDispatch()
  const path = useSelector((state: RootState) => state.codeHarmony.path)
  const configuration = useSelector((state: RootState) => state.configuration)

  window.menu.onNewFile((value: string) => {
    const config = configurationFactory(true)
    config.groups.push(groupFactory('UI', 'Group for UI purpose'))
    dispatch({ type: newConfiguration.type, payload: config })
    dispatch({ type: setCodeHarmonyState.type, payload: { path: value } })
  })

  window.menu.onOpenFile((content: ICodeHarmony ) => {
    const path = content.path
    const config = content.configuration
    dispatch({ type: setCodeHarmonyState.type, payload: {path: path} })
    dispatch({ type: newConfiguration.type, payload: config })
  })

  useEffect(() => {
    if (path === '') return
    const ch = codeHarmonyFactory(path, configuration)
    storeFile()
  }, [path])

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
