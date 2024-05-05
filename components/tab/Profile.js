"use client"
import { useState, useEffect } from "react"

import toast from "react-hot-toast";
import { Select } from 'antd';
const { Option } = Select;
import { message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';


export default function Profile() {
    const [gender, setGender] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [bio, setBio] = useState('');
    const [status, setStatus] = useState('');

    const [selectedSkill, setSelectedSkill] = useState([]);

    const [selectedLanguages, setSelectedLanguages] = useState([]);
   
    const [selectedProfessions, setSelectedProfessions] = useState([]);


    //console.log({ selectedProfessions, selectedLanguages, selectedSkill })






    const handleSubmit = async (e) => {
       e.preventDefault();
        if (!gender) {
            message.error(<span><ExclamationCircleOutlined /> Please select your gender</span>, 1);
            return;
        }
        if (!maritalStatus) {
            message.error(<span><ExclamationCircleOutlined /> Please select your marital status</span>, 1);
            return;
        }
        if (!bio) {
            message.error(<span><ExclamationCircleOutlined /> Please enter your bio</span>, 1);
            return;
        }
        if (!status) {
            message.error(<span><ExclamationCircleOutlined /> Please enter your status</span>, 1);
            return;
        }
        if (selectedSkill.length === 0) {
            message.error(<span><ExclamationCircleOutlined /> Please select at least one skill</span>, 1);
            return;
        }
        if (selectedLanguages.length === 0) {
            message.error(<span><ExclamationCircleOutlined /> Please select at least one language</span>, 1);
            return;
        }
        if (selectedProfessions.length === 0) {
            message.error(<span><ExclamationCircleOutlined /> Please select at least one profession</span>, 1);
            return;
        }
        message.success('Form submitted successfully');

    };



 






    const handleProfessionChanges = (value) => {
        setSelectedProfessions(value);
    };

 
    const handleSearch = (value) => {
        setSearchKeyword(value);
    };

    const handleSkillChanges = (value) => {
        setSelectedSkill(value);
    };

  

    const handleLanguageChanges = (value) => {
        setSelectedLanguages(value);
    };

    


    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="  col   shadow  p-5">
                        <h2 className="mb-1 text-center"> profile</h2>


                        <form onSubmit={handleSubmit}>






                            <select
                                className=" mb-4"
                                placeholder="Enter your gender name"

                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '2px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    appearance: 'none', 
                                    outline: 'none',
                                 
                                }}


                                value={gender}
                                onChange={(e) => setGender(e.target.value)}>
                                <option value="">Select gender*</option>



                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="male">
                                    male
                                </option>


                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="female">
                                    female
                                </option>


                                {/* Add more options as needed */}
                            </select>




                            <select
                                className=" mb-4"
                                placeholder="Enter your gender name"

                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                 
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    appearance: 'none',
                                   outline: 'none',
                                   // outlineColor: 'green',
                                    // Hide the default arrow icon
                                }}


                                value={maritalStatus}
                                onChange={(e) => setMaritalStatus(e.target.value)}>
                                <option value="">Select and marital status</option>



                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="married">
                                    married
                                </option>


                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="single">
                                    single
                                </option>


                                {/* Add more options as needed */}
                            </select>





                            {/* Add more options  for  profession */}







                            {/* Add more options  for  profession */}



                            <Select
                                className=" mb-4"
                                mode="multiple"
                                style={{
                                    width: 'calc(100% - 20px)',
                                    height: "50px",
                                }}
                                placeholder="Select professions"
                                onChange={handleProfessionChanges}
                                value={selectedProfessions}
                                onSearch={handleSearch}
                                filterOption={false}
                                showSearch


                            >

                                <option value="">Select and marital status</option>



                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="married">
                                    married
                                </option>


                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="single">
                                    single
                                </option>

                              
                            </Select>

                            {/* select  skills */}




                            <Select
                                className=" mb-4 border-bottom-0"
                                mode="multiple"
                                style={{
                                    width: 'calc(100% - 20px)',
                                    height: "50px",



                                }}
                                placeholder="Select skills"
                                onChange={handleSkillChanges}
                                value={selectedSkill}
                                onSearch={handleSearch}
                                filterOption={false}
                                showSearch


                            >
                                <option value="">Select and marital status</option>



                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="married">
                                    married
                                </option>


                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="single">
                                    single
                                </option>
                            </Select>





                            {/* select language */}
                            <Select
                                className=" mb-4"
                                mode="multiple"
                                style={{
                                    width: 'calc(100% - 20px)',
                                    height: "50px",
                                }}
                                placeholder="Select language"
                                onChange={handleLanguageChanges}
                                value={selectedLanguages}
                                onSearch={handleSearch}
                                filterOption={false}
                                showSearch
                            >
                                <option value="">Select and marital status</option>



                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="married">
                                    married
                                </option>


                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="single">
                                    single
                                </option>
                            </Select>





                            <select
                                className="mb-4"
                                placeholder="Enter your gender name"

                                style={{
                                    width: 'calc(100% - 20px)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    fontSize: '15px',
                                    appearance: 'none',
                                    outline: 'none', // Hide the default arrow icon
                                }}


                                value={status}
                                onChange={(e) => setStatus(e.target.value)}>
                                <option value="">Select an  availablbility</option>



                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="available">
                                    available
                                </option>


                                <option
                                    style={{
                                        backgroundColor: '#fff',
                                        color: '#333',
                                    }}

                                    key="1" value="not available ">
                                    not available
                                </option>


                                {/* Add more options as needed */}
                            </select>


                            <textarea
                                text="text"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                rows={10}
                                cols={130}
                                className=" mb-4"
                                placeholder="Enter Company bio"
                                style={{ outline: 'none', }}
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