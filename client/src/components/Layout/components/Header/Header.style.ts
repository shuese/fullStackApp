import styled from '@emotion/styled';
import { css } from '@emotion/core';

const active = css`
  visibility: visible;
  transition: all 200ms linear;
`;

const hidden = css`
  visibility: hidden;
  transition: all 200ms linear;
  transform: translate(0, -100%);
`;

const Wrapper = styled('header')`
  grid-area: header;
  height: 50px;
  width: 100%;
  position: fixed;
  grid-area: header;
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: #fff;
  ${(p: { show: boolean }) => (p.show ? active : hidden)}
`;

export default Wrapper;
