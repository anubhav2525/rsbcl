
import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library for unique IDs

const WorkDetail = () => {
    const { register, control, formState: { errors } } = useFormContext();

    const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
        control,
        name: "jobInfo.jobDetail.skills"
    });

    const { fields: roleFields, append: appendRole, remove: removeRole } = useFieldArray({
        control,
        name: "jobInfo.roles"
    });

    const handleSelectChange = (event, append) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        selectedOptions.forEach(option => {
            // Only append unique skills/roles
            if (!skillFields.some(field => field.value === option) && !roleFields.some(field => field.value === option)) {
                append({ id: uuidv4(), value: option });
            }
        });
    };


    return (
        <div className="rounded-lg bg-gray-50 dark:bg-gray-900">
            <div className='bg-white border-gray-200 rounded shadow px-2 py-3 dark:bg-gray-800'>
                <div className='flex justify-between items-center'>
                    <h5 className="text-xl px-3 font-bold dark:text-white">Job details</h5>
                    <div>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                        </svg>
                    </div>
                </div>

                {/* form inputs */}
                <div className='p-4'>
                    <div className='w-full gap-y-4 grid md:grid-cols-2 md:gap-x-4'>
                        {/* job title  */}
                        <div>
                            <label
                                htmlFor="jobTitle"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title</label>
                            <select
                                id="jobTitle"
                                {...register("jobInfo.jobDetail.jobTitle")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Choose a title</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="manager">Manager</option>
                            </select>
                            {errors.jobInfo?.jobDetail?.jobTitle && (
                                <p className="text-red-600 text-sm mt-1">{errors.jobInfo.jobDetail.jobTitle.message}</p>
                            )}
                        </div>

                        {/* department name */}
                        <div>
                            <label
                                htmlFor="departmentName"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department name</label>
                            <select
                                id="departmentName"
                                {...register("jobInfo.departmentName")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Choose a department</option>
                                <option value="dept1">dept1</option>
                                <option value="dept2">dept2</option>
                                <option value="dept3">dept3</option>
                            </select>
                            {errors.jobInfo?.departmentName && (
                                <p className="text-red-600 text-sm mt-1">{errors.jobInfo.departmentName.message}</p>
                            )}
                        </div>

                        {/* skills*/}
                        <div>
                            <div>
                                <label
                                    htmlFor="skills"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Skills
                                </label>
                                <select
                                    id="skills"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(event) => handleSelectChange(event, appendSkill)}
                                >
                                    <option>Choose options</option>
                                    <option value="item2">Item 2</option>
                                    <option value="item3">Item 3</option>
                                    <option value="item4">Item 4</option>
                                    <option value="item5">Item 5</option>
                                    <option value="item6">Item 6</option>
                                    <option value="item7">Item 7</option>
                                    <option value="item8">Item 8</option>
                                    <option value="item9">Item 9</option>
                                    <option value="item10">Item 10</option>
                                </select>
                            </div>
                            <div>
                                <ul className="list-disc gap-3 p-3 py-4 rounded-sm my-3 dark:bg-slate-900 bg-slate-50 flex flex-wrap items-center gap-x-3 text-sm text-gray-900 dark:text-white">
                                    {skillFields.map((skill, index) => (
                                        <li key={index} className="flex gap-2 items-center">
                                            {skill.value}
                                            <button
                                                onClick={() => removeSkill(index)}
                                                type="button"
                                            >
                                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* roles */}
                        <div>
                            <div>
                                <label
                                    htmlFor='roles'
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Roles
                                </label>
                                <select
                                    id='roles'
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(event) => handleSelectChange(event, appendRole)}
                                >
                                    <option>Choose options</option>
                                    <option value="role1">role 1</option>
                                    <option value="role2">role 2</option>
                                    <option value="role3">role 3</option>
                                    <option value="rol34">role 4</option>
                                    <option value="item5">role 5</option>
                                    <option value="item6">role 6</option>
                                </select>
                            </div>

                            <div>
                                <ul className="list-disc gap-3 p-3 py-4 rounded-sm my-3 dark:bg-slate-900 bg-slate-50 flex flex-wrap items-center gap-x-3 text-sm text-gray-900 dark:text-white">
                                    {roleFields.map((role, index) => (
                                        <li key={role.id} className="flex gap-2 items-center">
                                            {role.value}
                                            <button
                                                type="button"
                                                onClick={() => removeRole(index)}
                                            >
                                                <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* employment type  */}
                        <div>
                            <label
                                htmlFor="employmentType"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employment Type</label>
                            <select
                                id="employmentType"
                                {...register("jobInfo.jobDetail.employmentType")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Choose a type</option>
                                <option value="FULL_TIME">Full Time</option>
                                <option value="PART_TIME">Part Time</option>
                                <option value="CONTRACT">Contract</option>
                                <option value="INTERN">Intern</option>
                            </select>
                            {errors.jobInfo?.jobDetail?.employmentType && (
                                <p className="text-red-600 text-sm mt-1">{errors.jobInfo.jobDetail.employmentType.message}</p>
                            )}
                        </div>

                        {/* username */}
                        <div>
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input
                                type="text"
                                id="username"
                                {...register("jobInfo.username")}
                                placeholder="john123"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            {errors.jobInfo?.username && (
                                <p className="text-red-600 text-sm mt-1">{errors.jobInfo.username.message}</p>
                            )}
                        </div>

                        {/* employee status */}
                        <div>
                            <label
                                htmlFor="employeeStatus"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee Status</label>
                            <select
                                id="employeeStatus"
                                {...register("jobInfo.jobDetail.employeeStatus")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Choose a status</option>
                                <option value="active">Active</option>
                                <option value="removed">Removed</option>
                                <option value="inactive">In-active</option>
                            </select>
                            {errors.jobInfo?.jobDetail?.employeeStatus && (
                                <p className="text-red-600 text-sm mt-1">{errors.jobInfo.jobDetail.employeeStatus.message}</p>
                            )}
                        </div>

                        {/* employee service branch */}
                        <div>
                            <label
                                htmlFor="branch"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch</label>
                            <select
                                id="branch"
                                {...register("jobInfo.branch")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Choose a status</option>
                                <option value="branch1">Branch 1</option>
                                <option value="branch2">Branch 2</option>
                                <option value="branch3">Branch 3</option>
                                <option value="branch4">Branch 4</option>
                                <option value="branch5">Branch 5</option>
                            </select>
                            {errors.jobInfo?.branch && (
                                <p className="text-red-600 text-sm mt-1">{errors.jobInfo.branch.message}</p>
                            )}
                        </div>

                        {/* salary */}
                        <div>
                            <label
                                htmlFor="salary"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
                            <input
                                type="number"
                                id="salary"
                                placeholder="00000.00"
                                {...register("jobInfo.jobDetail.salary")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {errors.jobInfo?.jobDetail?.salary && (
                                <p className="text-red-600 text-sm mt-1">{errors.jobInfo.jobDetail.salary.message}</p>
                            )}
                        </div>

                        {/* date Of Joining */}
                        <div>
                            <label
                                htmlFor="dateOfJoining"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Joining date</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <input
                                    id="dateOfJoining"
                                    {...register("jobInfo.jobDetail.dateOfJoining")}
                                    type="date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkDetail
