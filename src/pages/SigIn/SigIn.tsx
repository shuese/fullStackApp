import React from 'react';
import Switch from 'react-switch';
import * as Yup from 'yup';
import {
  Field,
  Form,
  Formik,
  FormikActions,
  FormikProps,
  ErrorMessage
} from 'formik';
import Select from '../../components/Select';

export interface FormValues {
  singleLanguage: string;
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  password: string;
  race: boolean;
}

const defaultValues: FormValues = {
  singleLanguage: '',
  firstName: '',
  lastName: '',
  nickName: '',
  email: '',
  password: '',
  race: false
};

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

const SigIn = () => {
  const onSubmit = (values: FormValues, actions: FormikActions<FormValues>) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };

  const renderForm = (formikBag: FormikProps<FormValues>) => (
    <Form>
      <Field name="firstName" />
      <ErrorMessage name="firstName" />
      <Field name="lastName" />
      <ErrorMessage name="lastName" />
      <Field type="email" name="email" />
      <ErrorMessage name="email" />
      <Field type="password" name="password" />
      <ErrorMessage name="password" />
      <Field type="nickName" name="nickName" />
      <ErrorMessage name="nickName" />
      <Field
        name="typeUser"
        options={options}
        component={Select}
        placeholder="Выберите тип"
      />
      <Switch
        onChange={val => {
          formikBag.setFieldValue('race', val);
        }}
        checked={formikBag.values.race}
      />

      <button type="submit">Submit Form</button>
    </Form>
  );

  return (
    <Formik
      initialValues={defaultValues}
      render={renderForm}
      onSubmit={onSubmit}
      validationSchema={SigInSchema}
    />
  );
};

export default SigIn;
