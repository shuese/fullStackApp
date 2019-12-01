import styled from '@emotion/styled';

interface ILayoutProps {
  oneBlock: boolean;
}

const Wrapper = styled('div')<ILayoutProps>`
  min-height: 100%;
  padding: 7px;
  display: grid;
  grid-template-areas: 'header header header' 'nav main aside';
  grid-gap: 10px;
  ${(p: ILayoutProps) =>
    p.oneBlock &&
    `
    grid-template-areas: 'header header header' 'main main main';
    grid-template-columns: 1fr;
  `}
  grid-template-columns: minmax(200px, 0.3fr) minmax(320px, 1fr);
  grid-template-rows: 50px 91vh;
  @media (max-width: 640px) {
    ${(p: ILayoutProps) =>
      p.oneBlock &&
      `
    grid-template-areas: 'header header header' 'main main main';
    grid-template-columns: 1fr;
  `}
    grid-template-areas: 'header header header' 'nav nav nav' 'main main main';
    grid-template-columns: 1fr;
    grid-template-rows: 50px 40px 88vh;
  }
`;

export default Wrapper;
