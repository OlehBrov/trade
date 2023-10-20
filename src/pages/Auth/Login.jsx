import { Formik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FormBtnWrap,
  FormStyled,
  FormWrap,
  RegBtn,
  RegisterPromotionWrap,
  AuthBtnLink,
} from "./RegistrationStyled";
import { AuthInput } from "../../components/Input/AuthInput";
import { Container } from "../../assets/styles/container.styled";
import { BackLinkStyled } from "../../assets/styles/commonElements";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../services/authThunk/authThunk";

export const Login = () => {
  const location = useLocation();
const dispatch = useDispatch()
  const backLinkHref = useRef(location.state?.from ?? "/");
  const validation = Yup.object({
    login: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Minimum in 6 chars!")
      .max(12, "Maximum in 12 chars!")
      .required("Password is required")
  });
  return (
    <Container>
      <BackLinkStyled to={backLinkHref.current}>Повернутися назад</BackLinkStyled>

      <h1>Введіть e-mail та пароль для входу</h1>
      <FormWrap>
        <Formik
          initialValues={{
            login: "",
            password: "",
          }}
          validationSchema={validation}
          onSubmit={(values, actions) => {
            console.log("values login submit", values);
           dispatch(loginThunk(values))
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
                label="Логін"
                name="login"
                type="email"
                placeholder="John@examlpe.com"
              />

              <AuthInput label="Пароль" name="password" type="password" />

              <FormBtnWrap page={'login'}>
                <RegBtn
                  type="submit"
                  value={"submit"}
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  page={'login'}
                >
                  Увійти
                </RegBtn>
                <RegBtn
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleReset}
                  value={"reset"}
                  page={'login'}
                >
                  Очистити усі поля
                </RegBtn>
              </FormBtnWrap>
            </FormStyled>
          )}
        </Formik>
      </FormWrap>
      <RegisterPromotionWrap>
        <h2>Ще не зареєстровані?</h2>
        <AuthBtnLink to="/register" state={{ from: location }}>
          Зареєструватися
        </AuthBtnLink>
      </RegisterPromotionWrap>
    </Container>
  );
};
