"use client"
import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const currencies = [
    "USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "SEK", "NZD",
    "NOK", "KRW", "MXN", "SGD", "HKD", "INR", "RUB", "ZAR", "BRL", "TRY",
    "TWD", "DKK", "PLN", "THB", "IDR", "HUF", "CZK", "ILS", "CLP", "PHP",
    "AED", "COP", "SAR", "MYR", "RON", "VND", "ARS", "IQD", "KWD", "NGN",
    "UAH", "EGP", "PKR", "OMR", "QAR", "KES", "BDT", "MAD", "VUV", "SCR",
    "UZS", "LKR", "JOD", "GTQ", "BOB", "HRK", "DZD", "TND", "UYU", "PYG",
    "NPR", "AFN", "GEL", "MNT", "ETB", "LBP", "BHD", "JMD", "CUC", "LYD",
    "TTD", "XAF", "XOF", "NAD", "BND", "SZL", "GIP", "BWP", "FJD", "DJF",
    "CVE", "BSD", "GYD", "YER", "HTG", "BIF", "SYP", "MVR", "MKD", "RSD"

];


export default function Rozarpay() {

    const [razorpaycountryid, setRazorpayCountryid] = useState('');

    const [razorpayStatus, setRazorpayStatus] = useState('');
    const [razorpayCurrencyName, setRazorpayCurrencyName] = useState('');
    const [razorpayCurrencyRate, setRazorpayCurrencyRate] = useState('');
    const [razorpayKeyId, setRazorpayKeyId] = useState('');
    const [razorpayKeySecret, setRazorpayKeySecret] = useState('');


    // Validation function for each Razorpay state variable
    const validateRazorpayCountryId = () => {
        if (!razorpaycountryid) {
            alert('Please provide a Razorpay country ID');
            return false;
        }
        return true;
    };

    const validateRazorpayStatus = () => {
        if (!razorpayStatus) {
            alert('Please provide a Razorpay status');
            return false;
        }
        return true;
    };

    const validateRazorpayCurrencyName = () => {
        if (!razorpayCurrencyName) {
            alert('Please provide a Razorpay currency name');
            return false;
        }
        return true;
    };

    const validateRazorpayCurrencyRate = () => {
        if (!razorpayCurrencyRate) {
            alert('Please provide a Razorpay currency rate');
            return false;
        }
        return true;
    };

    const validateRazorpayKeyId = () => {
        if (!razorpayKeyId) {
            alert('Please provide a Razorpay key ID');
            return false;
        }
        return true;
    };

    const validateRazorpayKeySecret = () => {
        if (!razorpayKeySecret) {
            alert('Please provide a Razorpay key secret');
            return false;
        }
        return true;
    };

    // Validation function for the entire Razorpay form
    const validateRazorpayFormData = () => {
        return (
            validateRazorpayCountryId() &&
            validateRazorpayStatus() &&
            validateRazorpayCurrencyName() &&
            validateRazorpayCurrencyRate() &&
            validateRazorpayKeyId() &&
            validateRazorpayKeySecret()
        );
    };

    // Submit function for Razorpay
    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (validateRazorpayFormData()) {
          
            toast.success("Form data submitted successfully")
            console.log('Razorpay form data submitted successfully:', { razorpaycountryid, razorpayStatus, razorpayCurrencyName, razorpayCurrencyRate, razorpayKeyId, razorpayKeySecret });
        }
    };
  
   

    





    return (

        <div>
       

            <h2      className="form-title">Razorpay Settings</h2>

            <form onSubmit={handleSubmit}>
                <ToastContainer />
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Status:</label>
                            <select 
                            style={{outline: 'none',}}
                            
                             value={razorpayStatus} onChange={(e) => setRazorpayStatus(e.target.value)}>
                                <option value=""></option>
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </select>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Country Name:</label>
                            <select 

                                style={{ outline: 'none', }}
                                value={razorpaycountryid}


                                onChange={(e) => setRazorpayCountryid(e.target.value)}>
                                <option value="">Select Country</option>
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </select>
                        </div>
                    </div>




                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Currency  Name:</label>


                            <select 
                                style={{ outline: 'none', }}
                             value={razorpayCurrencyName} onChange={(e) => setRazorpayCurrencyName(e.target.value)} >
                                <option value="">Select Currency Name</option>
                                {currencies.map((currency) => (
                                    <option key={currency}

                                        value={currency}>{currency}</option>
                                ))}
                            </select>




                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Currency  Rate:</label>
                            <input type="text"  value={razorpayCurrencyRate} onChange={(e) => setRazorpayCurrencyRate(e.target.value)} />
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Razorpay   Key ID:</label>
                            <input type="text"  value={razorpayKeyId} onChange={(e) => setRazorpayKeyId(e.target.value)} />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Razorpay   Key Secret:</label>
                            <input type="text"  value={razorpayKeySecret} onChange={(e) => setRazorpayKeySecret(e.target.value)} />
                        </div>
                    </div>



                </div>

                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
        </div>

    )



}