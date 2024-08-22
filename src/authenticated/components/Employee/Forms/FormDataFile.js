export const employeeData = new FormData();

// PersonalInfo
employeeData.append("personalInfo.firstName", "John");
employeeData.append("personalInfo.middleName", "D");
employeeData.append("personalInfo.lastName", "Doe");
employeeData.append("personalInfo.gender", "Male");
employeeData.append("personalInfo.dateOfBirth", "1990-01-01");
employeeData.append("personalInfo.maritalStatus", "Single");
employeeData.append("personalInfo.profilePictureUrl", "profile-picture-url");

// ContactInfo
employeeData.append("contactInfo.phoneNumber", "1234567890");
employeeData.append("contactInfo.email", "john.doe@example.com");
employeeData.append("contactInfo.emergencyContact", "9876543210");
employeeData.append("contactInfo.address.city", "New York");
employeeData.append("contactInfo.address.state", "NY");
employeeData.append("contactInfo.address.pincode", "10001");
employeeData.append("contactInfo.address.country", "USA");
employeeData.append("contactInfo.address.streetAddress", "123 Main St");

// IdentificationInfo
employeeData.append("identificationInfo.aadharNumber", "123456789012");
employeeData.append(
  "identificationInfo.aadharDocumentUrl",
  "aadhar-document-url"
);
employeeData.append("identificationInfo.pancardId", "ABCDEF1234");
employeeData.append(
  "identificationInfo.pancardDocumentUrl",
  "pancard-document-url"
);

// JobInfo
employeeData.append("jobInfo.createdBy", "Admin");
employeeData.append("jobInfo.username", "john.doe");
employeeData.append("jobInfo.departmentName", "IT");
employeeData.append("jobInfo.jobDetail.jobTitle", "Software Engineer");
employeeData.append("jobInfo.jobDetail.salary", "100000.00");
employeeData.append("jobInfo.jobDetail.employmentType", "FULL_TIME");
employeeData.append("jobInfo.jobDetail.employeeStatus", "ACTIVE");
employeeData.append("jobInfo.jobDetail.dateOfJoining", "2022-01-01");

// EmploymentHistory
let employmentHistory = [
  {
    jobTitle: "Junior Software Engineer",
    companyName: "ABC Corp",
    yearOfExperience: "2",
    startDate: "2020-01-01",
    endDate: "2022-01-01",
  },
];
employeeData.append("employmentHistory", JSON.stringify(employmentHistory));

// Education
let education = [
  {
    degree: "Bachelor of Technology",
    institutionName: "XYZ University",
    year: "2015-2019",
    documentUrl: "education-document-url",
  },
];
employeeData.append("education", JSON.stringify(education));

// Skills
let skills = ["Java", "Python", "JavaScript"];
employeeData.append("skills", JSON.stringify(skills));

// Documents Verified
employeeData.append("documentsVerified", true);

// Last Updated
employeeData.append("lastUpdated", new Date().toISOString());
