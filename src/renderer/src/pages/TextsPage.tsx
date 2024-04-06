import Content from '@renderer/components/Content'
import Header from '@renderer/components/Header'

export function TextsPage(): JSX.Element {
  return (
    <>
      <Header>
        <h1 className="text-white text-2xl">Text</h1>
      </Header>
      <Content>
        <p>Text page</p>
      </Content>
    </>
  )
}

export default TextsPage
