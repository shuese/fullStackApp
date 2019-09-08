import React from 'react';
import Switch from 'react-switch';
import * as Yup from 'yup';
import {
  Field,
  Formik,
  FormikActions,
  FormikProps,
} from 'formik';
import {
  Entry,
  Input,
  FirstName,
  LastName,
  Email,
  NickName,
  TypeUser,
  SwitchWrap,
  Password,
  SubmitWrap } from './SigIn.style';
import Select from '../../components/Select';
import Error from '../../components/ErrorControl';
import Title from '../../components/TitleControl';
import Submit from '../../components/Submit';

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
    .max(50, 'Слишком длинный ник!')
    .required('Обезательное поле!') ,
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
    <Entry>
      <FirstName>
        <Title>Имя</Title>
        <Input name="firstName" />
        <Error name="firstName" />
      </FirstName>
      <LastName>
        <Title>Фамилия</Title>
        <Input name="lastName" />
        <Error name="lastName" />
      </LastName>
      <NickName>
        <Title>Никнейм</Title>
        <Input type="nickName" name="nickName" />
        <Error name="nickName" />
      </NickName>
      <Email>
        <Title>Почта</Title>
        <Input type="email" name="email" />
        <Error name="email" />
      </Email>
      <TypeUser>
        <Title>Выберите пользователя</Title>
        <Field
          name="typeUser"
          options={options}
          component={Select}
          placeholder="Выберите тип"
        />
      </TypeUser>
      <SwitchWrap>
        <Title>Узнали? Согласны?</Title>
        <Switch
          onChange={val => {
            formikBag.setFieldValue('race', val);
          }}
          checked={formikBag.values.race}
        />
      </SwitchWrap>
      <Password>
        <Title>Пароль</Title>
        <Input type="password" name="password" />
        <Error name="password" />
      </Password>
      <SubmitWrap>
        <Submit type="submit">Запускаай!</Submit>
      </SubmitWrap>
    </Entry>
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
