"use client"
import axios from 'axios';
import { useState, useEffect } from "react"
import { DatePicker } from 'antd';
import { message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import moment from 'moment';

import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
export default function Expericence() {
    //experience
    const [errors, setErrors] = useState({});
    const [company, setCompany] = useState('');
    const [department, setDepartment] = useState('');
    const [designation, setDesignation] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [currentlyWorking, setCurrentlyWorking] = useState(false);
    const [loading, setLoading] = useState(false)
    const [experiences, setExperiences] = useState([]);
    //edit
    const [editedExperience, setEditedExperience] = useState(null);


    //  console.log("editedExperience", editedExperience   )

    // eduction
    const [level, setLevel] = useState('');
    const [degree, setDegree] = useState('');
    const [year, setYear] = useState('');
    const [notes, setNotes] = useState('');
    const [loadings, setLoadings] = useState(false)
    const [educations, setEducations] = useState([]);
    const [editedEducation, setEditedEducation] = useState(null);

    //console.log("educationsxxxxx", editedEducation )








  
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!company.trim()) {
            newErrors.company = 'Please input your company!';
        }

        if (!department.trim()) {
            newErrors.department = 'Please input your department!';
        }

        if (!designation.trim()) {
            newErrors.designation = 'Please input your designation!';
        }

        if (!start) {
            newErrors.start = 'Please select start date!';
        }
        if (!end) {
            newErrors.end = 'Please select end date!';
        }


        if (!currentlyWorking && !end) {
            newErrors.end = 'Please select end date!';
        }

        if (!responsibilities.trim()) {
            newErrors.responsibilities = 'Please input your responsibilities!';
        }

        setErrors(newErrors);

        // If there are no errors, proceed with form submission logic
        if (Object.keys(newErrors).length === 0) {
            // Your form submission logic here
            message.success('Form submitted successfully');
            console.log('Form submitted successfully!');
        } else {
            console.log('Form has errors. Please fix them before submitting.');
        }
    };





    const handleDateChange = (date) => {
        setStart(date); // Update the dob state with the selected date
    };
    const handleDateChang = (date) => {
        setEnd(date); // Update the dob state with the selected date
    };














   













    return (
<> 
        <main>
            <ToastContainer />
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="  col   shadow  p-5">
                        <h2 className="mb-2 text-center  form-title">Experience and education  </h2>

                            <div>
                                {/* Display Errors */}
                                {Object.keys(errors).length > 0 && (
                                    <div style={{ color: 'red', marginBottom: '1rem' }}>
                                        {Object.values(errors).map((error, index) => (
                                            <div key={index}>{error}</div>
                                        ))}
                                    </div>
                                )}
                            </div>

                        <form onSubmit={handleSubmit}>
                            <input
                                className=" mb-4"
                                type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
                            <input
                                className=" mb-4"
                                type="text" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Department" />
                            <input
                                className=" mb-4"
                                type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Designation" />



                            <DatePicker
                                className=" mb-4"
                                placeholder="Select  start date"
                                onChange={handleDateChange}
                                style={{
                                    width: '100%',
                                    height: '40px',
                                    fontSize: '16px',
                                }}
                            />

                            <DatePicker
                                className="mb-4"
                                placeholder="Select  end date"
                                onChange={handleDateChang}
                                style={{
                                    width: '100%',
                                    height: '40px',
                                    fontSize: '16px',
                                }}
                            />


                            <textarea
                                className="mb-4"
                                rows={10}
                                cols={132}

                                style={{ //outline: 'none', 
                                    outlineColor: "greenyellow"
                                }}
                                value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} placeholder="Responsibilities" />
                            <label className=" mb-4" >

                                <input
                                    style={{ width: '20px', height: '15px' }}
                                    type="checkbox" checked={currentlyWorking} onChange={(e) => setCurrentlyWorking(e.target.checked)} />
                                Currently Working
                            </label>
                            <button

                                type="submit"
                            >
                                submit
                            </button>
                        </form>

                        <br /> <br />







             

                    </div>
                </div>

            </div>
        </main>
        </>
    )

}