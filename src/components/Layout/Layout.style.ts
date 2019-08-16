import styled from '@emotion/styled';

const Wrapper = styled('div')`
  min-height: 100%;
  padding: 7px;
  display: grid;
  grid-template-areas: 'header header header' 'nav main aside';
  grid-gap: 10px;
  grid-template-columns: minmax(150px, 0.3fr) minmax(320px, 1fr);
  grid-template-rows: 50px 91vh;
  @media (max-width: 640px) {
    grid-template-areas: 'header header header' 'nav nav nav' 'main main main';
    grid-template-columns: 1fr;
    grid-template-rows: 50px 40px 88vh;
  }
`;

export default Wrapper;
