/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import { useState } from 'react'
import { RootState } from './store'
import { IConfiguration, configurationFactory, groupFactory } from '@shared/model/configuration'
import { useSelector } from 'react-redux'
import { newConfiguration } from './store/configuration'
import { useDispatch } from 'react-redux'
import { codeHarmonyFactory } from '@shared/model/application'
import { VscHome, VscCode, VscTools, VscSymbolConstant, VscTypeHierarchy } from 'react-icons/vsc'

function App(): JSX.Element {
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
      <main id="main" className="flex flex-col h-lvh p-0 m-0">
        <header id="header" className="bg-sky-950 basis-12 shrink-0">
          <h1 className="text-gray-400 py-1 text-lg mr-2">CodeHarmony</h1>
        </header>
        <section id="maincontent" className="flex flex-grow overflow-y-auto">
          <nav id="sidebar" className="bg-sky-900 min-w-12 basis-12 pt-1">
            <ul>
              <li className='text-center pt-2'>
                <a className="hover:cursor-pointer flex justify-center">
                  <VscTools className="w-8 h-8 text-zinc-300" title="Configuration" />
                </a>
              </li>
              <li className='text-center pt-2' title='Home'>
                <a className="hover:cursor-pointer flex justify-center">
                  <VscHome className="w-8 h-8 text-zinc-300" />
                </a>
              </li>
              <li className='text-center pt-2' title='Codes'>
                <a className="hover:cursor-pointer flex justify-center">
                  <VscCode className="w-8 h-8 text-zinc-300" />
                </a>
              </li>
              <li className='text-center pt-2' title='Texts'>
                <a className="hover:cursor-pointer flex justify-center">
                  <VscSymbolConstant className="w-8 h-8 text-zinc-300" />
                </a>
              </li>
              <li className='text-center pt-2' title='Code References'>
                <a className="hover:cursor-pointer flex justify-center" >
                  <VscTypeHierarchy className="w-8 h-8 text-zinc-300" />
                </a>
              </li>
            </ul>
          </nav>
          <section id="content" className="overflow-y-auto flex-grow bg-slate-400 p-3">
            {JSON.stringify(configuration, null, 2)
              .split('\n')
              .map((item, key) => {
                return (
                  <span key={key}>
                    {item}
                    <br />
                  </span>
                )
              })}
          </section>
        </section>
        <footer id="footer" className="bg-sky-950 text-white basis-6 shrink-0 align-middle">
          <p className='text-sm pl-2'>© 2024 CodeHarmony</p>
        </footer>
      </main>
    </>
  )
}

export default App
