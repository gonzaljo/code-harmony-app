import Content from '@renderer/components/Content'
import Header from '@renderer/components/Header'
import Configuration from '@renderer/components/configuration/Configs'
import Groups from '@renderer/components/configuration/Groups'
import Locales from '@renderer/components/configuration/Locales'
import Variants from '@renderer/components/configuration/Variants'
import { RootState } from '@renderer/store'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const buttons = [
  { key: 'tv', label: 'Variants' },
  { key: 'tc', label: 'Configs' },
  { key: 'gr', label: 'Groups' },
  { key: 'lo', label: 'Locales' }
]
function ConfigurationPage(): JSX.Element {
  const [tab, setTab] = useState('tv')

  const active = useSelector((state: RootState): boolean => {
    return state.codeHarmony.path !== undefined
  })

  const style = (key: string): string => {
    return `hover:text-zinc-100 p-1 
      ${tab === key ? 'text-zinc-100 bg-indigo-500' : 'text-zinc-500 bg-indigo-950'}`
  }

  const handleTabChange = (tab: string): void => {
    setTab(tab)
  }

  return (
    <>
      {active && (
        <>
          <Header>
            <div className="flex justify-start pl-2">
              {buttons.map((button) => (
                <button
                  className={style(button.key)}
                  key={button.key}
                  onClick={() => handleTabChange(button.key)}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </Header>
          <Content>
            {tab === 'tv' && <Variants />}
            {tab == 'tc' && <Configuration />}
            {tab == 'gr' && <Groups />}
            {tab == 'lo' && <Locales />}
          </Content>
        </>
      )}
    </>
  )
}

export default ConfigurationPage
