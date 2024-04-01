/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import { useState } from 'react'
import { RootState } from './store'
import { IConfiguration, configurationFactory, groupFactory } from '@shared/model/configuration'
import { useSelector } from 'react-redux'
import { newConfiguration } from './store/configuration'
import { useDispatch } from 'react-redux'
import { save } from './store/filehandler'
import { codeHarmonyFactory } from '@shared/model/application'

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
    console.log('Save configuration ot file', value);
    window.files.onSave(codeHarmonyFactory(value, config))
    setPath(value)
  })

  return (
    <>
      <h1 className="text-2xl font-bold">
        Path: <span className="text-blue-500">{path}</span>
      </h1>
      <code className="text-xl font-bold underline">
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
      </code>
    </>
  )
}

export default App
