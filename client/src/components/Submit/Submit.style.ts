import styled from '@emotion/styled';

const Submit = styled('button')`
  background: none;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  text-transform: uppercase;
  ${(p: { disabled: boolean }) =>
  (p.disabled
  ? 'border: 2px solid #cdcdcd;'
  : 'border: 2px solid #000;'
  )}
  ${(p: { disabled: boolean }) =>
  (p.disabled
  ? 'cursor: not-allowed;'
  : 'cursor: pointer;'
  )}
`;

export default Submit;
