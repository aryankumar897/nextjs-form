"use client"
import { useState, useEffect } from "react"
import './account.css';
import { message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
export default function Account() {

    const [adress, setAdress] = useState("")
    const [primaryPhone, setPrimaryPhone] = useState('');
    const [secondaryPhone, setSecondaryPhone] = useState('');
    const [email, setEmail] = useState('');
    const [loadings, setLoadings] = useState(false)

  


   




    const handleSubmit = async (e) => {
                      e.preventDefault();
        // Validation logic for each field
        if (!adress) {
            message.error(<span><ExclamationCircleOutlined /> Please enter your address</span>, 1);
            return;
        }
        if (!primaryPhone) {
            message.error(<span><ExclamationCircleOutlined /> Please enter your primary phone number</span>, 1);
            return;
        }
        if (!secondaryPhone) {
            message.error(<span><ExclamationCircleOutlined /> Please enter your secondary phone number</span>, 1);
            return;
        }
        if (!email) {
            message.error(<span><ExclamationCircleOutlined /> Please enter your email</span>, 1);
            return;
        }


        message.success('Form submitted successfully');
    };





















    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="  col   shadow  p-5">
                       
                        <h2 className="form-title  mb-2">Lacation</h2>

                        <form onSubmit={handleSubmit}>






                            <textarea
                            type="text"
                                rows={5}
                                cols={130}
                                style={{ outline: 'none', }}
                                className=" mb-4"
                                value={adress}
                                onChange={(e) => setAdress(e.target.value)}
                                placeholder=" address "
                            />

                            <h2 className="mb-5 form-title">Contact details </h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <input
                                        placeholder=" phone  one "
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            border: '2px solid #ccc',
                                            backgroundColor: '#fff',
                                            color: '#333',
                                            fontSize: '15px',
                                            appearance: 'none',
                                        }}


                                        type="tel"
                                        className="  mb-4"

                                        value={primaryPhone}
                                        onChange={(e) => setPrimaryPhone(e.target.value)}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        placeholder=" phone email "
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            border: '2px solid #ccc',
                                            backgroundColor: '#fff',
                                            color: '#333',
                                            fontSize: '15px',
                                            appearance: 'none',
                                        }}

                                        type="tel"
                                        className="  mb-4"

                                        value={secondaryPhone}
                                        onChange={(e) => setSecondaryPhone(e.target.value)}
                                    />
                                </div>


                            </div>

                            <input
                                placeholder="  enter email "

                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    appearance: 'none',
                                }}

                                type="email"
                                className="  mb-4"

                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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