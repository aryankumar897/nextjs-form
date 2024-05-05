import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 export default function   HeroSection()  {
     useEffect(() => {
         AOS.init();
     }, []);

    return (
        <div className="hero-section" data-aos="fade-down">
            <div className="hero-content" data-aos="flip-up">
                <h1>Welcome to My Website</h1>
                <p>Enter your details below:</p>
                {/* Add your form builder component here */}
            </div>
        </div>
    );
};


