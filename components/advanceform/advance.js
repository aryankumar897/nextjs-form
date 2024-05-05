"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Select } from 'antd';

const { Option } = Select;
import { DatePicker } from 'antd';



const ben = [
    "Job",
    "Career",
    "Employment",
    "Opportunity",
    "Vacancy",
    "Position",
    "Work",
    "Recruitment",
    "Hiring",
    "Interview",
    "Resume",
    "Salary",
    "Benefits",
    "Skills",
    "Experience",
    "Job search",
    "Job market",
    "Job application",
    "Job satisfaction",
    "Professional development"
]






export default function Jobs() {



    const [loading, setLoading] = useState(false)
   
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');
    const [totalVacancies, setTotalVacancies] = useState('');
    const [selectedCompany, setSelectedCompany] = useState([]);
    const [selectedJobCategory, setSelectedJobCategory] = useState('');

    //location
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [address, setAddress] = useState('');

    // State for salary details form fields
    const [isSalaryRange, setIsSalaryRange] = useState(true);
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');
    const [customSalary, setCustomSalary] = useState('');
    const [selectedSalaryType, setSelectedSalaryType] = useState('');


    // State for sattribute form fields

    const [experience, setExperience] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [education, setEducation] = useState('');
    const [jobType, setJobType] = useState('');
    const [tags, setTags] = useState([]);
    const [benefits, setBenefits] = useState([]);
    const [skills, setSkills] = useState([]);


    const [applicationReceived, setApplicationReceived] = useState('');



    const [highlight, setHighlight] = useState(true);
    const [featured, setFeatured] = useState(false);
    const [description, setDescription] = useState('');

    const [allcompany, setAllcompany] = useState([])
    const [searchKeyword, setSearchKeyword] = useState('');
   
  




    const handleSubmit = async (e) => {
      
            e.preventDefault();


            console.log({
                title,
                isSalaryRange,
                deadline,
                totalVacancies,
                selectedCompany,
                selectedJobCategory,
                selectedCountry,
                selectedState,
                selectedCity,
                address,
                minSalary,
                maxSalary,
                customSalary,
                selectedSalaryType,
                experience,
                jobRole,
                education,
                jobType,
                tags,
                benefits,
                skills,
                applicationReceived, description
            })





            if (
                !title ||
                !deadline ||
                !totalVacancies ||
                !selectedCompany ||
                !selectedJobCategory ||
                !selectedCountry ||
                !selectedState ||
                !selectedCity ||
                !address ||

                !description ||


                (isSalaryRange && (!minSalary || !maxSalary)) ||
                (!isSalaryRange && !customSalary) ||

                !selectedSalaryType ||
                !experience ||
                !jobRole ||
                !education ||
                !jobType ||
                !tags ||
                !benefits ||
                !skills ||
                !applicationReceived
            ) {
                toast.error('Please fill in all fields');
                return
            }

        toast.success('data submitted');










    };


    const handleHighlightChange = () => {
        setHighlight(!highlight);
        if (!highlight) {
            setFeatured(false);
        }
    };

    const handleFeaturedChange = () => {
        setFeatured(!featured);
        if (!featured) {
            setHighlight(false);
        }
    };
    const handleDescriptionChange = (value) => {
        setDescription(value);
    };






    const handleCountryChange = async (e) => {

    
            const countryId = e.target.value;
            setSelectedCountry(countryId);

    }

    const handleStateChange = async (e) => {
        const stateId = e.target.value;
        setSelectedState(stateId);

      
    };


    const handleJob_categoriesChange = async (e) => {
        const categories = e.target.value;
        setSelectedJobCategory(categories);

    }
    const handleSelcetCompanyChange = async (e) => {
        const company = e.target.value;
        setSelectedCompany(company)

    }
    const handleSlaryTypeChange = async (e) => {
        const salary = e.target.value;
        setSelectedSalaryType(salary)
    }
    const handleExperienceChange = async (e) => {
        const experience = e.target.value;
        setExperience(experience)


    }

    const handleJobroleChange = async (e) => {
        const job = e.target.value;
        setJobRole(job)
    }

    const handleEducatonChange = async (e) => {
        const educat = e.target.value;
        setEducation(educat)
    }


    const handleJobTypeChange = async (e) => {
        const jobtype = e.target.value;
        setJobType(jobtype)
    }




    const handleDateChange = (date) => {
        setDeadline(date); // Update the dob state with the selected date
    };

    const handleSkillChanges = (value) => {
        setSkills(value);
    };




    const handleTagChanges = (value) => {
        setTags(value);
    };
 


    const handleBenfitChanges = (value) => {
        setBenefits(value)
    }





    return (

        <div className=" outer-container  my-5 ">  

        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="col shadow  p-5">
                        <h6 className="mb-4 ">Job details</h6>


                        <div className="container">
                            <div className="row">

                                <form onSubmit={handleSubmit}>

                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label"
                                            
                                            >Title</label>
                                            <input
                                                type="text"
                                             
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                style={{ width: '100%' }}
                                            />
                                        </div>

                                    </div>

                                    <div className="row" >
                                        <div className="col-md-6">

                                            <div className="mb-3">
                                                <label className="form-label">Select Job Category</label>




                                                <select
                                                    className=" mb-4"
                                                    style={{
                                                        width: '100%',
                                                        padding: '5px',
                                                        borderRadius: '5px',
                                                        border: '2px solid #ccc',
                                                        backgroundColor: '#fff',
                                                        color: '#333',
                                                        fontSize: '15px',
                                                        appearance: 'none',
                                                        outline:"none"
                                                    }}
                                                    value={selectedJobCategory}
                                                    onChange={handleJob_categoriesChange}
                                                >
                                                    <option value="">Select Job Category</option>
                                                        <option value="Technology and IT">Technology and IT</option>
                                                        <option value="Healthcare and Medicine">Healthcare and Medicine</option>
                                                        <option value="Finance and Accounting">Finance and Accounting</option>
                                                        <option value="Education and Teaching">Education and Teaching</option>
                                                        <option value="Sales and Marketing">Sales and Marketing</option>


                                                </select>





                                            </div>




                                        </div>


                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Select Company</label>

                                          


                                                <select
                                                    className="mb-4"
                                                    style={{
                                                        width: '100%',
                                                        padding: '5px',
                                                        borderRadius: '5px',
                                                        border: '2px solid #ccc',
                                                        backgroundColor: '#fff',
                                                        color: '#333',
                                                        fontSize: '15px',
                                                        appearance: 'none',
                                                        outline:"none"
                                                    }}
                                                    value={selectedCompany}
                                                    onChange={handleSelcetCompanyChange}
                                                >
                                                    <option value="">Select Company</option>
                                                  
                                                    <option value="company1">Company 1</option>
                                                    <option value="company2">Company 2</option>
                                                    <option value="company3">Company 3</option>
                                                </select>






                                            </div>

                                        </div>


                                        <div className="col-md-6 " >
                                            <div className="mb-3">
                                                <label className="form-label">Deadline</label>



                                                <DatePicker
                                                    placeholder="Select date of birth"
                                                    onChange={handleDateChange}
                                                    value={deadline}
                                                    style={{
                                                        width: '100%',
                                                        height: '40px',
                                                        fontSize: '16px',
                                                    }}
                                                />


                                            </div>

                                        </div>


                                        <div className="col-md-6" >

                                            <div className="mb-3">
                                                <label className="form-label">Total Vacancies</label>
                                                <input
                                                    type="text"
                                            
                                                    value={totalVacancies}
                                                    onChange={(e) => setTotalVacancies(e.target.value)}
                                                    style={{ width: '100%' ,outline:"none" }}
                                                />
                                            </div>




                                        </div>

                                    </div>




                                    <br />             <h6>   Location</h6>
                                    <div className="row mt-4">
                                        <div className="col">

                                            <div className="row mb-3">
                                                <div className="col">
                                                    <label className="form-label">Country</label>


                                                    <select
                                                        className=" mb-4"
                                                        style={{
                                                            width: '100%',
                                                            padding: '10px',
                                                            borderRadius: '5px',
                                                            border: '2px solid #ccc',
                                                            backgroundColor: '#fff',
                                                            color: '#333',
                                                            fontSize: '15px',
                                                            appearance: 'none',
                                                            outline: 'none',
                                                        }}
                                                        value={selectedCountry}
                                                        onChange={handleCountryChange}
                                                    >
                                                        <option value="">Select a country</option>
                                                            <option value="USA">USA</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="United Kingdom">United Kingdom</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Germany">Germany</option>
                                                            <option value="France">France</option>
                                                            <option value="Japan">Japan</option>
                                                            <option value="Brazil">Brazil</option>
                                                            <option value="India">India</option>
                                                            <option value="China">China</option>

                                                    </select>








                                                </div>
                                                <div className="col">
                                                    <label className="form-label">State</label>
                                                    <select
                                                        className=" mb-4"
                                                        style={{
                                                            width: '100%',
                                                            padding: '10px',
                                                            borderRadius: '5px',
                                                            border: '2px solid #ccc',
                                                            backgroundColor: '#fff',
                                                            color: '#333',
                                                            fontSize: '15px',
                                                            appearance: 'none',
                                                            outline:"none"
                                                        }}
                                                        value={selectedState}
                                                        onChange={handleStateChange}
                                                    >
                                                        <option value="">Select a state</option>
                                                            <option value="USA">USA</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="United Kingdom">United Kingdom</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Germany">Germany</option>
                                                            <option value="France">France</option>
                                                            <option value="Japan">Japan</option>
                                                            <option value="Brazil">Brazil</option>
                                                            <option value="India">India</option>
                                                            <option value="China">China</option>


                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label className="form-label">City</label>
                                                    <select
                                                        className=" mb-4"
                                                        style={{
                                                            width: '100%',
                                                            padding: '10px',
                                                            borderRadius: '5px',
                                                            border: '2px solid #ccc',
                                                            backgroundColor: '#fff',
                                                            color: '#333',
                                                            fontSize: '15px',
                                                            appearance: 'none',
                                                            outline:"none"
                                                        }}
                                                        value={selectedCity}
                                                        onChange={(e) => setSelectedCity(e.target.value)}
                                                    >
                                                        <option value="">Select a city</option>
                                                            <option value="USA">USA</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="United Kingdom">United Kingdom</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Germany">Germany</option>
                                                            <option value="France">France</option>
                                                            <option value="Japan">Japan</option>
                                                            <option value="Brazil">Brazil</option>
                                                            <option value="India">India</option>
                                                            <option value="China">China</option>

                                                    </select>

                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Address</label>
                                                <textarea
                                                    type="text"
                                           
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    style={{ width: '100%', outline: "none" }}
                                                />
                                            </div>

                                        </div>
                                    </div>












                                    <br />       <h6> salary details</h6>

                                    <div className="row mt-4">
                                        <div className="col-md-12">





                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3 form-check">
                                                        <label className="form-check-label" >
                                                        <input
                                                            type="checkbox"
                                                           style={{outline:"none"}}
                                                            checked={isSalaryRange}
                                                            onChange={() => setIsSalaryRange(!isSalaryRange)}
                                                        />
                                                      
                                                            Salary Range
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3 form-check">
                                                        <label className="form-check-label" >
                                                        <input
                                                            type="checkbox"
                                                           
                                                            checked={!isSalaryRange}
                                                            onChange={() => setIsSalaryRange(!isSalaryRange)}
                                                            style={{outline: "none"}}
                                                        />
                                                      
                                                            Custom Salary
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {isSalaryRange ? (
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        <label className="form-label">Minimum Salary</label>
                                                        <input
                                                            type="text"
                                                        
                                                            value={minSalary}
                                                            onChange={(e) => setMinSalary(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="col">
                                                        <label className="form-label">Maximum Salary</label>
                                                        <input
                                                            type="text"
                                                        
                                                            value={maxSalary}
                                                            onChange={(e) => setMaxSalary(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="mb-3">
                                                    <label className="form-label">Custom Salary</label>
                                                    <input
                                                        type="text"
                                           
                                                        value={customSalary}
                                                        onChange={(e) => setCustomSalary(e.target.value)}
                                                    />
                                                </div>
                                            )}




                                            <div className="mb-3">
                                                <label className="form-label">Select Salary Type</label>
                                              





                                                <select
                                                    className=" mb-4"
                                                    style={{
                                                        width: '100%',
                                                        padding: '5px',
                                                        borderRadius: '5px',
                                                        border: '2px solid #ccc',
                                                        backgroundColor: '#fff',
                                                        color: '#333',
                                                        fontSize: '15px',
                                                        appearance: 'none',
                                                        outline: 'none',
                                                    }}
                                                    value={selectedSalaryType}
                                                    onChange={handleSlaryTypeChange}
                                                >
                                                    <option value="">Select Salary Type</option>
                                                
                                                    <option value="hourly">Hourly</option>
                                                    <option value="daily">Daily</option>
                                                    <option value="monthly">Monthly</option>
                                                    <option value="yearly">Yearly</option>
                                                </select>













                                            </div>

                                        </div>
                                    </div>







                                    {/* attribute */}<br />       <h6> attribute details</h6>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Experience</label>
                                                <select
                                                    className=" mb-4"
                                                    style={{
                                                        width: '100%',
                                                        padding: '5px',
                                                        borderRadius: '5px',
                                                        border: '2px solid #ccc',
                                                        backgroundColor: '#fff',
                                                        color: '#333',
                                                        fontSize: '15px',
                                                        appearance: 'none',
                                                        outline: 'none',
                                                    }}
                                                    value={experience}
                                                    onChange={handleExperienceChange}
                                                >
                                                    <option value="">Select a  Experience</option>
                                                        <option value="Entry Level">Entry Level</option>
                                                        <option value="Mid Level">Mid Level</option>
                                                        <option value="Senior Level">Senior Level</option>
                                                        <option value="Internship">Internship</option>
                                                        <option value="Apprenticeship">Apprenticeship</option>
                                                        <option value="Fresher">Fresher</option>
                                                        <option value="Experienced">Experienced</option>
                                                        <option value="Managerial">Managerial</option>
                                                        <option value="Executive">Executive</option>
                                                        <option value="Director">Director</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Job Role</label>
                                              




                                                <select
                                                    className=" mb-4"
                                                    style={{
                                                        width: '100%',
                                                        padding: '5px',
                                                        borderRadius: '5px',
                                                        border: '2px solid #ccc',
                                                        backgroundColor: '#fff',
                                                        color: '#333',
                                                        fontSize: '15px',
                                                        appearance: 'none',
                                                        outline: 'none',
                                                    }}
                                                    value={jobRole}
                                                    onChange={handleJobroleChange}
                                                >
                                                    <option value="">Select a  Job Role</option>
                                                    <option value="Software Engineer">Software Engineer</option>
                                                    <option value="Data Analyst">Data Analyst</option>
                                                    <option value="Product Manager">Product Manager</option>
                                                </select>








                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Education</label>





                                                <select
                                                    className=" mb-4"
                                                    style={{
                                                        width: '100%',
                                                        padding: '5px',
                                                        borderRadius: '5px',
                                                        border: '2px solid #ccc',
                                                        backgroundColor: '#fff',
                                                        color: '#333',
                                                        fontSize: '15px',
                                                        appearance: 'none',
                                                        outline: 'none',
                                                    }}
                                                    value={education}
                                                    onChange={handleEducatonChange}
                                                >
                                                    <option value="">Select a Education</option>
                                                        <option value="High School Diploma">High School Diploma</option>
                                                        <option value="Associate's Degree">Associate's Degree</option>
                                                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                                                        <option value="Master's Degree">Master's Degree</option>
                                                        <option value="Doctorate Degree">Doctorate Degree</option>
                                                        <option value="Professional Degree">Professional Degree</option>
                                                        <option value="Vocational Training">Vocational Training</option>
                                                </select>









                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Job Type</label>
                                                {/* <select
                                                    value={jobType}
                                                    onChange={(e) => setJobType(e.target.value)}
                                                    className="form-control"
                                                >
                                                    <option value="">Select Job Type</option>
                                                    <option value="Full-time">Full-time</option>
                                                    <option value="Part-time">Part-time</option>
                                                    <option value="Contract">Contract</option>
                                                </select> */}



                                                <select
                                                    className=" mb-4"
                                                    style={{
                                                        width: '100%',
                                                        padding: '5px',
                                                        borderRadius: '5px',
                                                        border: '2px solid #ccc',
                                                        backgroundColor: '#fff',
                                                        color: '#333',
                                                        fontSize: '15px',
                                                        appearance: 'none',
                                                      outline: 'none',


                                                    }}
                                                    value={jobType}
                                                    onChange={handleJobTypeChange}
                                                >
                                                    <option value="">Select a Job Type</option>
                                                    <option value="Full-time">Full-time</option>
                                                    <option value="Part-time">Part-time</option>
                                                    <option value="Contract">Contract</option>
                                                </select>









                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Tags</label>



                                                <Select
                                                    className=" mb-4 border-bottom-0"
                                                    mode="multiple"
                                                    style={{
                                                        width: 'calc(100% - 20px)',
                                                        height: "50px",
                                                    }}
                                                    placeholder="Select Tags"
                                                    onChange={handleTagChanges}
                                                    value={tags}

                                                    filterOption={false}
                                                


                                                >
                                                    <option value="Full-time">Full-time</option>
                                                    <option value="Part-time">Part-time</option>
                                                    <option value="Contract">Contract</option>
                                                </Select>







                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Benefits</label>
                                              

                                                <Select
                                                    className=" mb-4 "
                                                    mode="multiple"
                                                    style={{
                                                        width: 'calc(100% - 20px)',
                                                        height: "50px",



                                                    }}
                                                    placeholder="Select skills"
                                                    onChange={handleBenfitChanges}
                                                    value={benefits}

                                                    filterOption={false}
                                                    showSearch


                                                >
                                                    {ben.map((skill) => (
                                                        <Option key={skill} value={skill}>
                                                            {skill}
                                                        </Option>
                                                    ))}
                                                </Select>



                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Skills</label>

                                                <Select
                                                    className=" mb-4 "
                                                    mode="multiple"
                                                    style={{
                                                        width: 'calc(100% - 20px)',
                                                        height: "50px",



                                                    }}
                                                    placeholder="Select skills"
                                                    onChange={handleSkillChanges}
                                                    value={skills}

                                                    filterOption={false}
                                                    showSearch


                                                >
                                                    <Option value="Full-time">Full-time</Option>
                                                    <Option value="Part-time">Part-time</Option>
                                                    <Option value="Contract">Contract</Option>
                                                </Select>

                                            </div>
                                        </div>
                                    </div>



                                    <br />       <h6>Application  details</h6>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Application Received</label>
                                                <select
                                                    value={applicationReceived}
                                                    onChange={(e) => setApplicationReceived(e.target.value)}
                                                    style={{ outline: 'none', margin: "2px" }}
                                                >
                                                    <option value="">Select Option</option>
                                                    <option value="app">On Platform</option>
                                                    <option value="email">Email</option>
                                                    <option value="custom_url">
                                                        Custom_url
                                                    </option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>




                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <label className="form-check-label" >
                                                <input
                                                    type="checkbox"
                                                
                                                    checked={highlight}
                                                    style={{ outline: 'none', margin: "2px" }}
                                                    onChange={handleHighlightChange}
                                                />
                                              
                                                    Highlight
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <label className="form-check-label " >
                                                <input
                                                    type="checkbox"
                                                 
                                                    checked={featured}
                                                    onChange={handleFeaturedChange}
                                                    style={{outline: 'none' ,margin:"2px"}}
                                                />
                                                
                                                    Featured
                                                </label>
                                            </div>
                                        </div>
                                    </div>




                                    <div className="row mt-5">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Description</label>
                                                <ReactQuill
                                                    value={description}
                                                    onChange={handleDescriptionChange}
                                                    modules={{ toolbar: true }}
                                                    theme="snow"
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <button
                                        type="submit"
                                     
                                      
                                    >
                                        Submit Job Details
                                    </button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        </div>

    );
}
