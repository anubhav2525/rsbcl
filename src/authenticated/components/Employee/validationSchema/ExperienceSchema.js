import * as yup from "yup";

const validationSchema = yup.object().shape({
  jobTitle: yup.string().required("Job title is required"),
  companyName: yup.string().required("Company name is required"),
  yearOfExperience: yup
    .number()
    .typeError("Year of experience must be a number")
    .positive("Year of experience must be a positive number")
    .required("Year of experience is required"),
  startDate: yup
    .date()
    .typeError("Start date must be a valid date")
    .required("Start date is required"),
  endDate: yup
    .date()
    .typeError("End date must be a valid date")
    .required("End date is required")
    .min(yup.ref("startDate"), "End date must be after start date"),
});

// Define the schema for the array of experience entries
const experienceArraySchema = yup.array().of(validationSchema);

const ExperienceSchema = yup.object().shape({
  experiences: experienceArraySchema.required(
    "At least one experience entry is required"
  ),
});
export default ExperienceSchema;
