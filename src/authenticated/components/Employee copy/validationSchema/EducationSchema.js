import * as yup from "yup";

const validationSchema = yup.object().shape({
  institutionName: yup.string().required("Institution name is required"),
  degree: yup.string().required("Degree is required"),
  year: yup
    .string()
    .matches(/^\d{4}$/, "Year must be a 4-digit number")
    .required("Year is required"),
  // documentUrl: yup
  //   .mixed()
  //   .test("fileType", "Only PDF files are allowed", (value) => {
  //     if (value.length === 0) return true; // Allow empty values for optional files
  //     return value[0].type === "application/pdf";
  //   })
  //   .required("Document is required"),
});

// Define the schema for the array of education entries
const educationArraySchema = yup.array().of(validationSchema);

const EducationSchema = yup.object().shape({
  educations: educationArraySchema.required(
    "At least one education entry is required"
  ),
});

export default EducationSchema;
