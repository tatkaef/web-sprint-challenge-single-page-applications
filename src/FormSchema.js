import * as yup from "yup";

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is Required"),
  choiceOfSize: yup
    .string()
    .oneOf(['12"', '14"', '24"', '26"'], "Size is Required"),
  choiceOfSauce: yup
    .string()
    .oneOf(
      ["originalRed", "garlicRanch", "bBQSauce", "spinachAlfredo"],
      "Souce is Required"
    ),
  addToppings: yup
    .array()
    .min(4, "Choice at least 4 toppings")
    .required("Choice at least 4 toppings"),
  numbers: yup.number().required("Namber is Required"),
});

export default FormSchema;
