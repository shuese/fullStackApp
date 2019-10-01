import styled from '@emotion/styled';

const Wrapper = styled('main')`
  overflow: scroll;
  grid-area: main;
  border-radius: 10px;
  border: 3px solid #35456b;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }
`;

export default Wrapper;
