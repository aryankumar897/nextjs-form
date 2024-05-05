// components/Navigation.js
"use client"
import Link from 'next/link';


 import { useState } from 'react';
 import Basic from "./Basic"
 import Profile from './Profile';
 import AccountSettings from "./AccountSettings"
 import ExperienceEdu from "./ExperienceEdu"

export default function Navigation() {
    const [activeTab, setActiveTab] = useState('nav-home');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div >

            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                        className={`nav-link m-4 ${activeTab === 'nav-home' ? 'active-tab' : ''}`}
                        id="nav-home-tab"
                        onClick={() => handleTabClick('nav-home')}
                        type="button"
                        role="tab"
                  
                        aria-selected={activeTab === 'nav-home' ? 'true' : 'false'}
                    >
                        Basic
                    </button>


                    <button
                        className={`nav-link m-4  ${activeTab === 'nav-profile' ? 'active-tab' : ''}`}
                        id="nav-profile-tab"
                        onClick={() => handleTabClick('nav-profile')}
                        type="button"
                        role="tab"
                   
                        aria-selected={activeTab === 'nav-profile' ? 'true' : 'false'}
                    >
                        Profile
                    </button>


                    <button
                        className={`nav-link m-4 ${activeTab === 'nav-contact' ? 'active-tab' : ''}`}
                        id="nav-contact-tab"
                        onClick={() => handleTabClick('nav-contact')}
                        type="button"
                        role="tab"
                  
                        aria-selected={activeTab === 'nav-contact' ? 'true' : 'false'}
                    >
                        Experience &Education
                    </button>

                    <button
                        className={`nav-link m-4 ${activeTab === 'nav-account' ? 'active-tab' : ''}`}
                        id="nav-contact-tab"
                        onClick={() => handleTabClick('nav-account')}
                        type="button"
                        role="tab"
               
                        aria-selected={activeTab === 'nav-account' ? 'true' : 'false'}
                    >
                        Account Settings
                    </button>

                </div>
            </nav>
            <div className="tab-content   outer-container    p-3" id="nav-tabContent">
                <div
                    className={`tab-pane  fade ${activeTab === 'nav-home' ? 'show active' : ''}`}
                 //   id="nav-home"
                    role="tabpanel"
                
                >



                    <Basic/>
                </div>


                <div
                    className={`tab-pane  m-1 fade ${activeTab === 'nav-profile' ? 'show active' : ''}`}
                  //  id="nav-profile"
                    role="tabpanel"
                
                >
                    <Profile/>
                </div>


                <div
                    className={`tab-pane m-1  fade ${activeTab === 'nav-contact' ? 'show active' : ''}`}
                  //  id="nav-contact"
                    role="tabpanel"
             
                >

                    <ExperienceEdu/>

                </div>

                <div
                    className={`tab-pane m-1  fade ${activeTab === 'nav-account' ? 'show active' : ''}`}
                  //  id="nav-account"
                    role="tabpanel"
               
                >

                    <AccountSettings/>

                </div>


            </div>

        </div>
    );
};



// import { useState } from 'react';

// export default    function   Home  ()  {
//     const [activeTab, setActiveTab] = useState('home');

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div>
//             <nav>
//                 <div className="nav nav-tabs" id="nav-tab" role="tablist">
//                     <button className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')} role="tab" aria-controls="nav-home" aria-selected={activeTab === 'home'}>Home</button>
//                     <button className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => handleTabClick('profile')} role="tab" aria-controls="nav-profile" aria-selected={activeTab === 'profile'}>Profile</button>
//                     <button className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => handleTabClick('contact')} role="tab" aria-controls="nav-contact" aria-selected={activeTab === 'contact'}>Contact</button>
//                 </div>
//             </nav>

//             <div className="tab-content" id="nav-tabContent">
//                 <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
//                     <Basic/>
              
//                 Home content goes here...</div>
//                 <div className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
//                 Profile content goes here...
//                     <Basic />
//                 </div>
//                 <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`} id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
//                 Contact content goes here...
//                 </div>
//             </div>
//         </div>
//     );
// };



