import { Model } from '@shared/model/index';
import './App.css';

function App(): JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  const model = new Model('123swweew-34', 'lbl22', new Date());

  return (
    <>
      <h1 className="text-3xl font-bold underline">{model.toString()}</h1>
    </>
  );
}

export default App;
