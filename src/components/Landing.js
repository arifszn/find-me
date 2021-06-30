import React from 'react';
import PropTypes from 'prop-types';

const Landing = (props) => {
    return (
        <React.Fragment>
            <div className="container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center">
                <div className="sm:w-2/5 flex flex-col items-start mt-8 sm:mt-0 mb-5 sm:mb-0">
                    <h1 className="text-4xl lg:text-6xl leading-none mb-4 mx-auto md:ml-0">
                        <strong className="font-black">Find</strong> Me
                    </h1>
                    <p className="lg:text-lg mb-4 sm:mb-12 text-center md:text-left text-gray-400 font-semibold">
                        Server less face recognition app
                    </p>
                    <a 
                        href={'/#'}
                        onClick={(e) => {
                            e.preventDefault();
                            props.setDisplayLanding(false);
                        }}
                        className="font-semibold text-lg bg-blue-500 hover:bg-blue-400 text-white hover:text-gray-700 py-3 px-10 rounded-full mx-auto md:ml-0"
                    >
                        Get Started
                    </a>
                </div>
                <div className="mx-auto">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/img/landing.png`}
                        alt="Landing"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

Landing.propTypes = {
    setDisplayLanding: PropTypes.func.isRequired,
}

export default Landing;