"use client"

import React, { useState,useEffect } from 'react';
import toast from 'react-hot-toast';

import AOS from 'aos';
import 'aos/dist/aos.css';
 export default  function     FormComponent  () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [country, setCountry] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [errors, setErrors] = useState({});
     useEffect(() => {
         AOS.init();
     }, []);
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!firstName) newErrors.firstName = 'First Name is required';
        if (!lastName) newErrors.lastName = 'Last Name is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        if (!phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
        if (!zipcode) newErrors.zipcode = 'Zipcode is required';
        if (!country) newErrors.country = 'Country is required';
        if (!agreeTerms) newErrors.agreeTerms = 'Please agree to the terms';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Submit the form data if there are no errors
            console.log('Form submitted:', { firstName, lastName, email, password, phoneNumber, zipcode, country, agreeTerms });
            toast.success('Form submitted successfully');
        } else {
            // Display error notifications using toast
            Object.values(newErrors).forEach((error) => {
                toast.error(error);
            });
        }
    };

    return (

        <>
            <div className="outer-container">   
        <div className="form-container my-5 h-auto">
                <p style={{ color: "blue" }}  >      {JSON.stringify({ firstName, lastName, email, password, phoneNumber, zipcode, country, agreeTerms }, null, 4)}</p> 
            <h2 className="form-title">Form with checkbox</h2>
            <form onSubmit={handleSubmit}>
                {/* First Name */}
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                   
                </div>

                {/* Last Name */}
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                 
                </div>

                {/* Email */}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  
                </div>

                {/* Password */}
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  
                </div>

                {/* Phone Number */}
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                  
                </div>

                {/* Zipcode */}
                <div className="form-group">
                    <label htmlFor="zipcode">Zipcode:</label>
                    <input type="text" id="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                  
                </div>

                {/* Country Select */}
                <div className="form-group">
                    <label htmlFor="country">Country:</label>
                    <select id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="">Select Country</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                    </select>
                   
                </div>

                {/* Checkbox for Terms */}
                <div className="form-group">
                    <label className="checkbox-label">
                        <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />
                        I agree to the terms and conditions
                    </label>
                  
                </div>

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>

            <pre style={{ margin:"20px"}}>




            </pre>
            </div>
        </>
    );
};


