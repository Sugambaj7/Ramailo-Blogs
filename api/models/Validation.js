import * as Yup from "yup";

export const registerSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name !"),
  email: Yup.string().email().required("Please enter your email !"),
  mob: Yup.number()
    .test(
      "len",
      "Must be exactly 10 digits",
      (val) => val && val.toString().length === 10
    )
    .required("Please enter your mobile number !"),
  Password: Yup.string()
    .min(8)
    .max(20)
    .required("Please enter your password !"),
  Password2: Yup.string()
    .oneOf([Yup.ref("Password"), null], "Sorry! Password do not matched...")
    .required("Please retype password !"),
});
