import Content from '@renderer/components/Content';
import Header from '@renderer/components/Header';

export function CodePage(): JSX.Element {
  return (
    <>
      <Header>
        <h1 className="text-white text-2xl">Code</h1>
      </Header>
      <Content>
        <p>Code page</p>
      </Content>
    </>
  );
}

export default CodePage