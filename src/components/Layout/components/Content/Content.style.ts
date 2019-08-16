import styled from '@emotion/styled';

const Wrapper = styled('main')`
  overflow: scroll;
  grid-area: main;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px rgba(55, 55, 55, 0.45);
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
