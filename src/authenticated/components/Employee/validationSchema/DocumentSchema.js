import * as yup from "yup";

const DocumentSchema = yup.object().shape({
  aadharNumber: yup
    .string()
    .required("Aadhar card number is required")
    .matches(/^[0-9]{12}$/, "Aadhar number must be exactly 12 digits")
    .max(12, "Aadhar number must be at most 12 characters long"), // Added max length
  // aadharDocumentUrl: yup
  //   .mixed()
  //   .required("Aadhar card document is required")
  //   .test("fileSize", "File size is too large, Max 3MB", (value) => {
  //     if (value && value[0]) {
  //       return value[0].size <= 3 * 1024 * 1024; // 3MB size limit
  //     }
  //     return true;
  //   })
  //   .test("fileType", "Unsupported file type, only pdf file", (value) => {
  //     if (value && value[0]) {
  //       return ["application/pdf"].includes(
  //         value[0].type
  //       );
  //     }
  //     return true;
  //   }),
  pancardId: yup
    .string()
    .required("Pancard ID is required")
    .matches(/^[a-zA-Z0-9]*$/, "Pancard ID must be alphanumeric")
    .max(10, "Pancard ID must be at most 10 characters long"),
  // pancardDocumentUrl: yup
  //   .mixed()
  //   .required("Pancard document is required")
  //   .test("fileSize", "File size is too large, Max 3MB", (value) => {
  //     if (value && value[0]) {
  //       return value[0].size <= 3 * 1024 * 1024; // 3MB size limit
  //     }
  //     return true;
  //   })
  //   .test("fileType", "Unsupported file type, only pdf files are allowed", (value) => {
  //     if (value && value[0]) {
  //       return ["application/pdf"].includes(
  //         value[0].type
  //       );
  //     }
  //     return true;
  //   }),
});

export default DocumentSchema;
