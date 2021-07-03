import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIframe = styled.iframe`
    max-width: 100%;
    width: 560px;
    height: 315px;

    @media (max-width: 640px) {
        height: 200px;
    }
`;

const Landing = (props) => {
    return (
        <React.Fragment>
            <div className="container mx-auto px-6 sm:px-12 flex flex-col-reverse lg:flex-row items-center">
                <div className="sm:w-2/5 flex flex-col items-start mt-16 lg:mt-0 mb-5 sm:mb-0">
                    <h1 className="text-4xl lg:text-6xl leading-none mb-4 mx-auto lg:ml-0">
                        <strong className="font-black">Find</strong> Me
                    </h1>
                    <p className="lg:text-lg mb-4 sm:mb-12 text-center lg:text-left text-gray-400 font-semibold mx-auto lg:ml-0">
                        Server less face recognition app
                    </p>
                    <a 
                        href={'/#'}
                        onClick={(e) => {
                            e.preventDefault();
                            props.setDisplayLanding(false);
                        }}
                        className="font-semibold text-lg bg-blue-500 hover:bg-blue-400 text-white hover:text-gray-700 py-3 px-10 rounded-full mx-auto lg:ml-0"
                    >
                        Get Started
                    </a>
                </div>
                <div className="lg:flex lg:h-screen mx-auto my-auto mt-16 lg:mt-0">
                    <div className="flex justify-center items-center">
                        <div className="bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                        <StyledIframe src="https://www.youtube-nocookie.com/embed/j1D9GyQrPa4?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1" frameborder="0" allowFullScreen></StyledIframe>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

Landing.propTypes = {
    setDisplayLanding: PropTypes.func.isRequired,
}

export default Landing;