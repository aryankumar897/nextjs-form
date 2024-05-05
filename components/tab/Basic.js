"use client"
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import moment from 'moment';
import './basic.css';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { DatePicker } from 'antd';
export default function Basic() {

  
    const [dob, setDob] = useState(''); // State to store the selected date of birth


    const [fullname, setFullName] = useState("");
  
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [website, setWebsite] = useState('');
    const [logo, setLogo] = useState('');
    const [cv, setCv] = useState(null);
    const [experience, setExperience] = useState("");
    const router = useRouter();


    // console.log({

    //     fullname,

    //     isoDate: dob?.toISOString(),
    //     experience,
    //     title, 
    //     logo,

    // })

  

 


    // Function to handle date change
    const handleDateChange = (date) => {
        setDob(date); // Update the dob state with the selected date
    };


  

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation logic for each field
     
        if (!fullname || !title || !website || !experience) {
            if (!fullname) {
                message.error(<span><ExclamationCircleOutlined /> Please enter your full name</span>, 1);
            }
            if (!title) {
                message.error(<span><ExclamationCircleOutlined /> Please enter your title</span>, 1);
            }
            if (!website) {
                message.error(<span><ExclamationCircleOutlined /> Please enter your website</span>, 1);
            }
         
            if (!experience) {
                message.error(<span><ExclamationCircleOutlined /> Please enter your experience</span>, 1);
            }
            return;
        }
        
        // Your submission logic goes here

        message.success('Form submitted successfully');


        // try {
        //     setLoading(true);
        //     // Example: Make an API request
        //     const response = await yourSubmitFunction({
        //         fullname,
        //         title,
        //         website,
            
            
        //         experience
        //     });
        //     // Handle response
        //     setLoading(false);
        //     message.success('Form submitted successfully');
        //     // Reset form fields if needed
        //     setFullName("");
        //     setTitle("");
        //     setWebsite("");
        
         
        //     setExperience("");
        // } catch (error) {
        //     setLoading(false);
        //     message.error('Submission failed. Please try again.');
        //     console.error('Error submitting form:', error);
        // }
    };

  






    return (
        <main >

            <div className="container  outer-container">

                {JSON.stringify({dob,fullname ,title ,website, experience},null,4)}


                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="  col   shadow p-5">

                    
                        <h2 className="mb-1 text-center">Basic   Profile</h2>

                        <form onSubmit={handleSubmit}>



                            <div className="d-flex flex-column flex-md-row justify-content-between">
                               



                                <div className="text-center form-group mb-3">
                                    <div className="form-group mb-3">
                                        <div className="row align-items-center">
                                            <div className="col-12">
                                                <DatePicker
                                                    placeholder="Select date of birth"
                                                    onChange={handleDateChange}
                                                    value={dob}
                                                    style={{
                                                        width: '100%',
                                                        height: '40px',
                                                        fontSize: '16px',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>










                            <input
                                type="text"
                                value={fullname}
                                onChange={(e) => setFullName(e.target.value)}
                                className="mb-4"
                                placeholder="Enter your Full  name"
                            />
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className=" mb-4"
                                placeholder="Enter your title  name"
                            />

                            <input
                                type="text"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                                className=" mb-4"
                                placeholder="Enter your Experience  lable"
                            />


                            <input
                                type="text"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                className=" mb-4"
                                placeholder="Enter your website name"
                            />





                            <button
                                type="submit"

                            >
                           submit
                            </button>
                        </form>


                    </div>
                </div>

            </div>
        </main>
    )

}