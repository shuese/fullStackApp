import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";
import * as Yup from "yup";
import { Field, Formik, FormikValues } from "formik";
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
  SubmitWrap
} from "./SignUp.style";
import Select from "../../components/Select";
import Error from "../../components/ErrorControl";
import Title from "../../components/TitleControl";
import Submit from "../../components/Submit";

interface IFormValues {
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  password: string;
  type: string;
  race: boolean;
}

const defaultValues: IFormValues = {
  firstName: "",
  lastName: "",
  nickName: "",
  email: "",
  password: "",
  type: "",
  race: false
};

const options = [
  { value: "developer", label: "Разработчик" },
  { value: "designer", label: "дизайнер" },
  { value: "qa", label: "Тестировщик" }
];

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Слишком короткое имя!")
    .max(50, "Слишком Длинное имя!")
    .required("Обязательное поле!"),
  lastName: Yup.string()
    .min(2, "Слишком короткая фамилия!")
    .max(50, "Слишком длинная фамилия!")
    .required("Обязательное поле!"),
  nickName: Yup.string()
    .min(2, "Слишком короткий ник!")
    .max(50, "Слишком длинный ник!")
    .required("Обязательное поле!"),
  email: Yup.string()
    .min(6, "Слишком короткая почта!")
    .max(50, "Слишком длинная почта!")
    .email("Нужно ввести почту!")
    .required("Обязательное поле!"),
  password: Yup.string()
    .min(10, "Слишком короткий пароль!")
    .max(50, "Слишком длинный пароль!")
    .required("Обезательное поле!")
});

const SignUp = ({ userStore }: any) => {
  const [, setStore] = useState(userStore.status);
  useEffect(() => {
    if (!userStore.status) {
      setStore(userStore.status);
    }
  }, [userStore.status]);
  console.log(userStore.status, "errorsApi");
  const onSubmit = async (
    values: {},
    {
      resetForm,
      setStatus,
      setSubmitting,
      setErrors,
      setFieldValue,
      setFieldError,
      ...props
    }: FormikValues
  ) => {
    try {
      await userStore.signUpUser(values);
      const errorsApi = toJS(userStore.response);
      console.log(toJS(userStore.response), "userStore.response");

      if (errorsApi.errors) {
        const {
          nickName,
          firstName,
          lastName,
          password,
          race,
          type,
          email
        } = errorsApi.errors;
        setErrors({
          nickName: nickName?.message,
          firstName: firstName?.message,
          lastName: lastName?.message,
          password: password?.message,
          race: race?.message,
          type: type?.message,
          email: email?.message
        });
      }

      console.log(props, "asdasdasd");
    } catch (error) {
      console.log(error, "лул");
    }
  };

  return userStore.status === "succes" ? (
    <Redirect to="/" />
  ) : (
    <Formik
      initialValues={defaultValues}
      onSubmit={onSubmit}
      validationSchema={SignUpSchema}
    >
      {props => (
        <Entry noValidate>
          {/* {console.log(props, "props")} */}
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
            <Input name="nickName" />
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
              name="type"
              options={options}
              component={Select}
              placeholder="Выберите тип"
            />
          </TypeUser>
          <SwitchWrap>
            <Title>Узнали? Согласны?</Title>
            <Switch
              name="race"
              onChange={val => {
                props.setFieldValue("race", val);
              }}
              checked={props.values.race}
            />
          </SwitchWrap>
          <Password>
            <Title>Пароль</Title>
            <Input type="password" name="password" />
            <Error name="password" />
          </Password>
          <SubmitWrap>
            <Submit
              status={userStore.status}
              disabled={props.isSubmitting}
              type="submit"
            />
          </SubmitWrap>
        </Entry>
      )}
    </Formik>
  );
};

export default inject("userStore")(observer(SignUp));
