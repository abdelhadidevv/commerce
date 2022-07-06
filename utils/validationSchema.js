import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
});

export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
  passwordConfirmation: Yup.string()
    .min(8, "Too Short!")
    .oneOf([Yup.ref("password"), null], "Passwords don't match!")
    .required("Required"),
});
