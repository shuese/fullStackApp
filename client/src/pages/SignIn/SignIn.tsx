import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";
import * as Yup from "yup";
import { Formik, FormikValues } from "formik";
import { Entry, Input, Email, Password, SubmitWrap } from "./SignIn.style";
import Error from "../../components/ErrorControl";
import Title from "../../components/TitleControl";
import Submit from "../../components/Submit";

interface IFormValues {
  email: string;
  password: string;
}

const defaultValues: IFormValues = {
  email: "",
  password: "",
};

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .min(6, "Слишком короткая почта!")
    .max(50, "Слишком длинная почта!")
    .email("Нужно ввести почту!")
    .required("Обязательное поле!"),
  password: Yup.string()
    .min(10, "Слишком короткий пароль!")
    .max(50, "Слишком длинный пароль!")
    .required("Обезательное поле!"),
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
      await userStore.signInUser(values);
      const errorsApi = toJS(userStore.response);
      console.log(toJS(userStore.response), "userStore.response");

      if (errorsApi.errors) {
        const { password, email } = errorsApi.errors;
        setErrors({
          password: password?.message,
          email: email?.message,
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
      {(props) => (
        <Entry noValidate>
          <Email>
            <Title>Почта</Title>
            <Input type="email" name="email" />
            <Error name="email" />
          </Email>
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
