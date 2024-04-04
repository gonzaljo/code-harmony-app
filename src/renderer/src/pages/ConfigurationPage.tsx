import Content from '@renderer/components/Content'
import Header from '@renderer/components/Header'

const buttons = [
  { key: 'tv', label: 'Variants' },
  { key: 'tc', label: 'Configs' },
  { key: 'gr', label: 'Groups' },
  { key: 'lo', label: 'Locales' },
]
function ConfigurationPage(): JSX.Element {
  return (
    <>
      <Header>
        <div className="flex justify-start py-2 pl-2">
          {buttons.map((button) => (
            <button
              className="text-zinc-950 bg-zinc-500 hover:text-zinc-700 hover:bg-zinc-300 p-1"
              key={button.key}
            >
              {button.label}
            </button>
          ))}
        </div>
      </Header>
      <Content>
        <p>Configuration page</p>
      </Content>
    </>
  )
}

export default ConfigurationPage
