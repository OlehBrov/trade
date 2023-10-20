import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Container } from "../../assets/styles/container.styled";
import { Field, Form, Formik, Debug } from "formik";
import { AuthInput } from "../../components/Input/AuthInput";
import {
  FormBtnWrap,
  FormStyled,
  FormWrap,
  RegBtn,
} from "./RegistrationStyled";
import InputMask from "react-input-mask";
import PhoneInput from "react-phone-input-2";
import { useDispatch } from "react-redux";
import { signupThunk } from "../../services/authThunk/authThunk";
const phoneNumberMask = [
  "+38",
  " ",
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
export const Registration = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const backLinkHref = useRef(location.state?.from ?? "/");
  const initialRegistrationValues = {
    email: "",
    mobile: "+38",
    password: "",
    firstName: "",
    lastName: "",
    address_1: "",
    city: "",
  };

  const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    mobile: Yup.string().min(12).max(12).required("Required"),
    password: Yup.string()
      .min(6, "Minimum in 6 chars!")
      .max(12, "Maximum in 12 chars!")
      .required("Password is required"),
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    address_1: Yup.string().required("Enter adress, its required"),
    city: Yup.string().required("Enter city, its required"),
  });
  return (
    <Container>
      <Link to={backLinkHref.current}>Повернутися назад</Link>
      <h1>Заповніть, будь-ласка, форму реєстрації</h1>

      <FormWrap>
        <Formik
          initialValues={initialRegistrationValues}
          validationSchema={validation}
          onSubmit={(values, actions) => {
            console.log("values", values);
             dispatch(signupThunk(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            field,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            handleReset,
            validateForm,
            setFieldValue,
          }) => (
            <FormStyled>
              <AuthInput
                label="Email"
                name="email"
                type="email"
                placeholder="John@examlpe.com"
              />
              <AuthInput
                label="Телефон"
                name="mobile"
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
              />

              <AuthInput label="Пароль" name="password" type="password" />
              <AuthInput label="Імя" name="firstName" type="text" />
              <AuthInput label="Прізвище" name="lastName" type="text" />
              <AuthInput label="Адреса" name="address_1" type="text" />
              <AuthInput label="Місто" name="city" type="text" />
              <FormBtnWrap>
                <RegBtn
                  type="submit"
                  value={"submit"}
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                >
                  Зберегти
                </RegBtn>
                <RegBtn
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleReset}
                  value={"reset"}
                >
                  Очистити усі поля
                </RegBtn>
              </FormBtnWrap>
            </FormStyled>
          )}
        </Formik>
      </FormWrap>
    </Container>
  );
};
