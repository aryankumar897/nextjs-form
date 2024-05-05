"use client"
import React, { useState,useEffect } from 'react';
//import '../styles/RegistrationFormStyles.css'; // Import the CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function RegistrationForm  () {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });

    useEffect(() => {
        AOS.init();
    }, []);

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, you can submit it or perform other actions here
            console.log('Form data:', formData);
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        let errors = {};
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(data.email)) {
            errors.email = 'Invalid email format';
        }
        if (!data.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!isValidPhone(data.phone)) {
            errors.phone = 'Invalid phone number format';
        }
        if (!data.password.trim()) {
            errors.password = 'Password is required';
        } else if (data.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        return errors;
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isValidPhone = (phone) => {
        return /^\d{10}$/.test(phone);
    };

    return (

        <div className="outer-container">
        <div className="form-container  mt-5  p-5">
            <p style={{color:"blue"}}   > {JSON.stringify({ formData }, null, 4)}</p>
            <h2 className="form-title">Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? 'error' : ''}
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
        </div>
    );
};


