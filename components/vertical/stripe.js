"use  client"

import { useState, useEffect } from 'react';



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





export default function Stripe() {
    const [stripeStatus, setStripeStatus] = useState();
 
    const [stripeCurrencyName, setStripeCurrencyName] = useState('');
    const [stripeCurrencyRate, setStripeCurrencyRate] = useState('');
    const [publisablekey, setPublisablekey] = useState('');
    const [stripesecretKey, setStripeSecretKey] = useState('');

    const [stripecountryid, setStripeCountryid] = useState('');

 

 


    // Validation function for each Stripe state variable
    const validateStripeStatus = () => {
        if (!stripeStatus) {
            alert('Please provide a Stripe status');
            return false;
        }
        return true;
    };

    const validateStripeCurrencyName = () => {
        if (!stripeCurrencyName) {
            alert('Please provide a Stripe currency name');
            return false;
        }
        return true;
    };

    const validateStripeCurrencyRate = () => {
        if (!stripeCurrencyRate) {
            alert('Please provide a Stripe currency rate');
            return false;
        }
        return true;
    };

    const validatePublisablekey = () => {
        if (!publisablekey) {
            alert('Please provide a publishable key');
            return false;
        }
        return true;
    };

    const validateStripeSecretKey = () => {
        if (!stripesecretKey) {
            alert('Please provide a Stripe secret key');
            return false;
        }
        return true;
    };

    const validateStripeCountryId = () => {
        if (!stripecountryid) {
            alert('Please provide a Stripe country ID');
            return false;
        }
        return true;
    };

    // Validation function for the entire Stripe form
    const validateStripeFormData = () => {
        return (
            validateStripeStatus() &&
            validateStripeCurrencyName() &&
            validateStripeCurrencyRate() &&
            validatePublisablekey() &&
            validateStripeSecretKey() &&
            validateStripeCountryId()
        );
    };
  

    // Submit function for Stripe
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate the form data before submission
        if (validateStripeFormData()) {
            // Perform submission logic here
            alert("Form data submitted successfully")
            // For example, send the data to an API endpoint
            console.log('Stripe form data submitted successfully:', { stripeStatus, stripeCurrencyName, stripeCurrencyRate, publisablekey, stripesecretKey, stripecountryid });
        }
    };



    return (
        <div>
   
            <h2 className="form-title">Form</h2>
         
            <form onSubmit={handleSubmit}>
          
                <div className="row">

                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Status:</label>
                            <select 
                              style={{outline:"none"}}
                            
                             value={stripeStatus} onChange={(e) => setStripeStatus(e.target.value)}>
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
                                style={{ outline: "none" }}
                            
                             value={stripecountryid} onChange={(e) => setStripeCountryid(e.target.value)}>
                                <option value="">Select Country</option>
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </select>
                        </div>
                    </div>



                    <div className="col-md-6">
                        <div className="form-group">
                            <label> Currency Name:</label>

                            <select 
                                style={{ outline: "none" }}
                            
                             value={stripeCurrencyName} onChange={(e) => setStripeCurrencyName(e.target.value)} >
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
                            <input type="text" 
                             value={stripeCurrencyRate} onChange={(e) => setStripeCurrencyRate(e.target.value)} />
                        </div>
                    </div>






                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Publisable key:</label>
                            <input type="text"
                            value={publisablekey} onChange={(e) => setPublisablekey(e.target.value)} />
                        </div>
                    </div>




                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Secret Key:</label>
                            <input type="text" 
                            value={stripesecretKey} onChange={(e) => setStripeSecretKey(e.target.value)} />
                        </div>
                    </div>




                </div>

                <button type="submit" className="btn btn-primary">Save changes</button>
            </form>
        </div>
    );
};
