import { Formik, Field, Form, ErrorMessage, withFormik } from "formik";
import Select from "react-select";
import { FormStyled, InputStyled, SearchBtn } from "./HeaderSearchStyles";
import searchSvg from "../../../assets/image/searchIcon.svg";
import { BiSearch } from "react-icons/bi";
const searchEnhancedForm = withFormik({
  mapPropsToValues: (props) => ({
    searchQuery: "",
    category: "",
  }),
  handleSubmit: (values, { setSubmitting }) => {
    const payload = {
      ...values,
      category: values.category,
    };
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "SearchEnhancedForm",
});

export const HeaderSearchForm = (props) => {
  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = props;

  return (
    <FormStyled onSubmit={handleSubmit}>
      <CategorySelector
        name="category"
        type="select"
        value={values.category}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
      />
      {/* <Field name="category" as={CategorySelector} /> */}
      <InputStyled
        name="searchQuery"
        type="text"
        placeholder="Например, мобильный телефон"
        value={values.searchQuery}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <SearchBtn type="submit">
        <BiSearch
          style={{
            width: "16px",
            height: "16px",
          }}
        />
      </SearchBtn>
    </FormStyled>
  );
};
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const CategorySelector = (props) => {
  const handleChange = (value) => {};
  const handleBlur = () => {
    props.onBlur("category", true);
  };
  return (
    <Select
      options={options}
      onChange={handleChange}
      onBlur={handleBlur}
      value={props.value}
      placeholder="Все категории"
      contentEditable={false}
      components={{ IndicatorSeparator }}
      styles={{
        container: (baseStyles) => ({
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 5
        }),
        control: (baseStyles) => ({
          ...baseStyles,
          background: "none",
          border: "none",
          height: "50px",
          width: "176px",
          outline: "none",
          boxShadow: "none",
          ":hover": {
            border: "none",
            boxShadow: "none",
          },
          ":focus": {
            border: "none",
            boxShadow: "none",
          },
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          color: "#151621",
          fontSize: "16px",
          paddingLeft: "35px",
       
        }),
        menuList: (baseStyles, state) => ({
          ...baseStyles,
          background: "#ECEDEF",

        }),
        dropdownIndicator: (baseStyles, state) => ({
          ...baseStyles,
          transform: state.selectProps.menuIsOpen && "rotate(180deg)",
        }),
      }}
    />
  );
};

export const HeaderSearch = searchEnhancedForm(HeaderSearchForm);

const indicatorSeparatorStyle = {
  position: "absolute",
  top: "15%",
  right: "0",
  borderRadius: "25px",
  background: "#B8B9BE",
  width: 3,
  height: "70%",
};

const IndicatorSeparator = ({ innerProps }) => {
  return <span style={indicatorSeparatorStyle} {...innerProps} />;
};
