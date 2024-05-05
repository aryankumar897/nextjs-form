"use  client"

import { useState, useEffect } from 'react';



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





export default function Paypal() {
    const [paypalStatus, setPaypalStatus] = useState();
    const [paypalMode, setPaypalMode] = useState('');
    const [paypalCurrencyName, setPaypalCurrencyName] = useState('');
    const [paypalCurrencyRate, setPaypalCurrencyRate] = useState('');
    const [clientId, setClientId] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [appId, setAppId] = useState('');
    const [countryid, setCountryid] = useState('');

    const [paypalSttings, setPaypalSttings] = useState({});

   
    console.log("countryid", paypalSttings)





    // Validation function for each state variable
    const validatePaypalStatus = () => {
        if (!paypalStatus) {
            alert('Please provide a PayPal status');
            return false;
        }
        return true;
    };

    const validatePaypalMode = () => {
        if (!paypalMode) {
            alert('Please provide a PayPal mode');
            return false;
        }
        return true;
    };

    const validatePaypalCurrencyName = () => {
        if (!paypalCurrencyName) {
            alert('Please provide a PayPal currency name');
            return false;
        }
        return true;
    };

    const validatePaypalCurrencyRate = () => {
        if (!paypalCurrencyRate) {
            alert('Please provide a PayPal currency rate');
            return false;
        }
        return true;
    };

    const validateClientId = () => {
        if (!clientId) {
            alert('Please provide a client ID');
            return false;
        }
        return true;
    };

    const validateSecretKey = () => {
        if (!secretKey) {
            alert('Please provide a secret key');
            return false;
        }
        return true;
    };

    const validateAppId = () => {
        if (!appId) {
            alert('Please provide an app ID');
            return false;
        }
        return true;
    };

    const validateCountryId = () => {
        if (!countryid) {
            alert('Please provide a country ID');
            return false;
        }
        return true;
    };

    // Validation function for the entire form
    const validateFormData = () => {
        return (
            validatePaypalStatus() &&
            validatePaypalMode() &&
            validatePaypalCurrencyName() &&
            validatePaypalCurrencyRate() &&
            validateClientId() &&
            validateSecretKey() &&
            validateAppId() &&
            validateCountryId()
        );
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
       
      
        // Validate the form data before submission
        if (validateFormData()) {
            // Perform submission logic here
            // For example, send the data to an API endpoint
          toast.success("Form data submitted successfully")
            console.log('Form data submitted successfully:', { paypalStatus, paypalMode, paypalCurrencyName, paypalCurrencyRate, clientId, secretKey, appId, countryid });
        }

      
    };




    return (
        <div>
            <p style={{ color: "blue" }}>{JSON.stringify({ paypalStatus, paypalMode, paypalCurrencyName, paypalCurrencyRate, clientId, secretKey, appId, countryid }, null, 4)}</p>
            <h2 className="form-title">Form</h2>
            <ToastContainer/>
            <form onSubmit={handleSubmit}>
                <div className="row">









                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Status:</label>
                            <select 
                            style={{outline:"none"}}
                             value={paypalStatus} onChange={(e) => setPaypalStatus(e.target.value)}>
                                <option value=""></option>
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </select>
                        </div>
                    </div>







                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Mode:</label>
                            <select 
                                style={{ outline: "none" }}
                            
                             value={paypalMode} onChange={(e) => setPaypalMode(e.target.value)}>
                                <option value=""> </option>
                                <option value="sandbox">Sandbox</option>
                                <option value="live">Live</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Country Name:</label>
                            <select 
                                style={{ outline: "none" }}
                             value={countryid} onChange={(e) => setCountryid(e.target.value)}>
                                <option value="">Select Country</option>
                                <option value="sandbox">Sandbox</option>
                                <option value="live">Live</option>
                            </select>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Currency Name:</label>




                            <select 
                                style={{ outline: "none" }}
                            
                             value={paypalCurrencyName} onChange={(e) => setPaypalCurrencyName(e.target.value)} >
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
                            <label> Currency Rate:</label>
                            <input type="text"  value={paypalCurrencyRate} onChange={(e) => setPaypalCurrencyRate(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Client ID:</label>
                            <input type="text" value={clientId} onChange={(e) => setClientId(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Secret Key:</label>
                            <input type="text" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>App ID:</label>
                            <input type="text"  value={appId} onChange={(e) => setAppId(e.target.value)} />
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};
