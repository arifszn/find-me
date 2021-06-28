import React from 'react';

const Landing = (props) => {
    return (
        <React.Fragment>
            <div className="container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center">
                <div className="sm:w-2/5 flex flex-col items-start mt-8 sm:mt-0">
                    <h1 className="text-4xl lg:text-6xl leading-none mb-4"><strong className="font-black">Face</strong> Finder</h1>
                    <p className="lg:text-lg mb-4 sm:mb-12">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            props.setDisplayLanding(false);
                        }}
                        className="font-semibold text-lg bg-blue-500 hover:bg-blue-400 text-white hover:text-gray-500 py-3 px-10 rounded-full"
                    >
                        Get Started
                    </a>
                </div>
                <div className="sm:pl-16">
                    <img
                        src="/assets/img/landing.png"
                        alt="Landing Image"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Landing;