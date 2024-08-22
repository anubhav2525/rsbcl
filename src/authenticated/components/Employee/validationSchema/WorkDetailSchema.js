import * as yup from "yup";

// Define the schema
const WorkDetailSchema = yup.object().shape({
  jobTitle: yup.string().required("Job Title is required"),
  departmentName: yup.string().required("Department name is required"),
  skills: yup
    .array()
    .of(yup.string().required())
    .min(1, "At least one skill must be selected"),
  roles: yup
    .array()
    .of(yup.string().required())
    .min(1, "At least one role must be selected"),
  employmentType: yup.string().required("Employment type is required"),
  username: yup.string().required("Username is required"),
  employeeStatus: yup
    .string()
    .oneOf(["active", "removed", "inactive"], "Invalid status")
    .required("Status is required"),
  branch: yup.string().required("Branch is required"),
  salary: yup
    .number()
    .positive("Salary must be a positive number")
    .required("Salary is required"),
  dateOfJoining: yup
    .date()
    .required("Joining date is required")
    .typeError("Joining date must be a valid date"),
});

export default WorkDetailSchema;
