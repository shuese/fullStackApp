import styled from '@emotion/styled';

const Wrapper = styled('div')`
  min-height: 100%;
  padding: 7px;
  display: grid;
  grid-template-areas: 'header header header' 'nav main aside' 'footer footer footer';
  grid-gap: 10px;
  grid-template-columns: minmax(250px, 2fr) minmax(320px, 1200px);
  grid-template-rows: 50px 88vh 40px;
  @media (max-width: 640px) {
    grid-template-areas: 'header header header' 'nav nav nav' 'main main main' 'footer footer footer';
    grid-template-columns: 1fr;
    grid-template-rows: 50px 40px 88vh 40px;
  }
`;

export default Wrapper;
