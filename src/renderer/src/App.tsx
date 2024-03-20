import { Model } from '@shared/model/index'
import './App.css'
import { useEffect, useState } from 'react'

function App(): JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  const model = new Model('123-34', 'lbl22', new Date())

  const [modelState, setmodelState] = useState(model)


  useEffect(() => {
    setTimeout(() => {
      const newModel: Model = new Model('123456', '8989', new Date())
      setmodelState(newModel)
      console.log(JSON.stringify(newModel, null, 2))
    }, 3000)
  }, [])

  return (
    <>
      <code className="text-xl font-bold underline">
        {JSON.stringify(modelState, null, 2).split('\n').map((item, key) => {
          return <span key={key}>{item}<br/></span>
        })}
      </code>
    </>
  )
}

export default App

