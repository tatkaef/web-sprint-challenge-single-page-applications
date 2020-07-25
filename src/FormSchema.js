import * as yup from "yup";

const FormSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is Required"),
  choiceOfSize: yup
    .string()
    .oneOf(["12", "14", "24", "26"], "Size is Required"),
  choiceOfSauce: yup
    .string()
    .oneOf(
      ["Original Red", "Garlic Ranch", "BBQ Sauce", "Spinach Alfredo"],
      "Sauce is Required"
    ),
  numbers: yup.number().required("Number is Required"),
});

export default FormSchema;
