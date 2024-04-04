import Content from '@renderer/components/Content';
import Header from '@renderer/components/Header';

export function ReferencesPage(): JSX.Element {
  return (
    <>
      <Header>
        <h1 className="text-white text-2xl">References</h1>
      </Header>
      <Content>
        <p>References page</p>
      </Content>
    </>
  );
}

export default ReferencesPage