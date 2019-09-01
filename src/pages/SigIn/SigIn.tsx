import React, { PureComponent } from 'react';
import Wrapper from './SigIn.style';
import * as Yup from 'yup';
import Select from '../../components/Select';

export interface SigInProps {
  children: React.ReactNode;
}

class SigIn extends PureComponent<SigInProps> {
  public static defaultProps: Partial<SigInProps> = {
    children: null
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const SigInSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Слишком короткое имя!')
    .max(50, 'Слишком Длинное имя!')
    .required('Обезательное поле!'),
  lastName: Yup.string()
    .min(2, 'Слишком короткая фамилия!')
    .max(50, 'Слишком длинная фамилия!')
    .required('Обезательное поле!'),
  nickName: Yup.string()
    .min(2, 'Слишком короткий ник!')
    .max(50, 'Слишком длинный ник!'),
  email: Yup.string()
    .min(2, 'Слишком короткое имя!')
    .max(50, 'Слишком Длинное имя!'),
  password: Yup.string()
    .min(2, 'Слишком короткое имя!')
    .max(50, 'Слишком Длинное имя!')
    .required('Обезательное поле!')
});
  };

  const renderForm = (formikBag: FormikProps<FormValues>) => (
    <Form>
      <Field name="firstName" />
      <ErrorMessage name="firstName" />
      <Field
        name="typeUser"
        options={options}
        component={Select}
        placeholder="Выберите тип"
      />
      validationSchema={SigInSchema}

export default SigIn;
