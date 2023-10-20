import { useField, useFormik } from "formik";
import {
  ErrorMsgWrapStyled,
  InputStyled,
  InputWrap,
  LabelStyled,
  PhoneInputWrap,
} from "./AuthInputStyled";
import gsap from "gsap";
import { useRef } from "react";
import PhoneInput from "react-phone-input-2";

export const AuthInput = ({ label, setFieldValue, handleBlur, ...props }) => {
  const [field, meta] = useField(props);

 

  return (
    <InputWrap meta={meta}>
      <LabelStyled htmlFor={props.id || props.name}>{label}</LabelStyled>
      {props.name !== "mobile" ? (
        <input className="text-input" {...field} {...props}  />
      ) : (
        <PhoneInput
          inputProps={{
            name: "mobile",
          }}
         
          value={field.value}
          country={"ua"}
          onChange={(phone) => setFieldValue("mobile", phone)}
          onBlur={handleBlur}
          placeholder="+380 (50) 123 45 67"
          specialLabel={false}
        />
      )}
      {meta.touched && meta.error ? (
        <ErrorMsgWrapStyled className="error">{meta.error}</ErrorMsgWrapStyled>
      ) : null}
    </InputWrap>
  );
};
