import * as yup from "yup";

const validationSchema = yup.object().shape({
  jobTitle: yup.string().required("Job title is required"),
  companyName: yup.string().required("Company name is required"),
  yearOfExperience: yup.string().required("Year of experience is required"),
  startDate: yup.date().required("Start date is required"),
  endDate: yup.date().required("End date is required"),
});

// Define the schema for the array of experience entries
const employmentHisArraySchema = yup.array().of(validationSchema);

const EmploymentHistorySchema = yup.object().shape({
  employmentHistory: employmentHisArraySchema.required(
    "At least one employment history entry is required"
  ),
});

export default EmploymentHistorySchema;
