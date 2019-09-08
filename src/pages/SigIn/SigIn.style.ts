import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Entry = styled(Form)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 80px);
  width: 70%;
  margin: 0 auto;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Input = styled(Field)`
  border: none;
  border-bottom: 2px solid #300;
  font-size: 24px;
`;

export const FirstName = styled('div')`
  grid-column: 1/3;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
`

export const LastName = styled('div')`
  grid-column: 3/5;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
`

export const Email = styled('div')`
  grid-column: 1/3;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
`

export const NickName = styled('div')`
  grid-column: 3/5;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
`

export const TypeUser = styled('div')`
  grid-column: 1/2;
  grid-row: 3/4;
  display: flex;
  flex-direction: column;
`

export const SwitchWrap = styled('div')`
  grid-column: 2/3;
  grid-row: 3/4;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`

export const Password = styled('div')`
  grid-column: 3/5;
  grid-row: 3/4;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`

export const SubmitWrap = styled('div')`
  grid-column: 4/5;
  grid-row: 4/5;
  display: flex;
  justify-content: flex-end;
`