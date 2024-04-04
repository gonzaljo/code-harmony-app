import Content from '@renderer/components/Content';
import Header from '@renderer/components/Header';

export function ApplicationPage(): JSX.Element {
  return (
    <>
      <Header>
        <h1 className="text-white text-2xl">Application</h1>
      </Header>
      <Content>
        <p>Application page</p>
      </Content>
    </>
  );
}

export default ApplicationPage