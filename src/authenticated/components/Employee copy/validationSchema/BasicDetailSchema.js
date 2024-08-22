import * as yup from "yup";

const BasicDetailSchema = yup.object().shape({
  personalInfo: yup.object().shape({
    firstName: yup
      .string()
      .required("First name is required")
      .max(40, "Maximum length is 40 characters")
      .min(2, "Minimum length is 2 characters"),
    middleName: yup.string(), // Optional field
    lastName: yup.string().required("Last name is required"),
    gender: yup.string().required("Gender is required"),
    maritalStatus: yup.string().required("Marital status is required"),
    dateOfBirth: yup.date().required("Date of birth is required"),
  }),
  contactInfo: yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: yup
      .string()
      .matches(/^[0-9-]+$/, "Phone number is not valid")
      .required("Phone number is required"),
    emergencyContact: yup
      .string()
      .matches(/^[0-9-]+$/, "Emergency contact is not valid")
      .required("Emergency contact is required"),
    address: yup.object().shape({
      streetAddress: yup.string().required("Street address is required"),
      state: yup.string().required("State is required"),
      city: yup.string().required("City is required"),
      pincode: yup
        .string()
        .matches(/^[0-9]{6}$/, "Pincode must be exactly 6 digits")
        .required("Pincode is required"),
      country: yup.string().required("Country is required"),
    }),
  }),
});

export default BasicDetailSchema;
