import React, { useState } from "react";
import Landing from "./components/Landing";
import FaceFinder from "./components/faceFinder/FaceFinder";
import {
    GithubOutlined,
    SmileOutlined 
} from '@ant-design/icons';
import { Avatar, Layout } from 'antd';
import FadeIn from "./components/FadeIn";

const logo = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        className="w-10 h-10 text-purple-600"
    >
        <path
            fill="#B9BBC1"
            d="M192 92c-13.531 0-25.664 8.574-30.172 21.332a7.994 7.994 0 004.875 10.211c2.733.982 5.594.241 7.695-1.501L208 162.393V172c0 4.418 3.578 8 8 8s8-3.582 8-8v-48c0-17.645-14.352-32-32-32z"
        ></path>
        <path
            fill="#8B8996"
            d="M168 108c-14.664 0-28.523 5.629-39.328 16.176L26.102 236.152l11.797 10.805 2.771-3.027L208 289.806V292c0 4.418 3.578 8 8 8s8-3.582 8-8V164c0-30.879-25.125-56-56-56z"
        ></path>
        <path
            fill="#B9BBC1"
            d="M320 92c13.531 0 25.664 8.574 30.172 21.332a7.994 7.994 0 01-4.875 10.211c-2.733.982-5.594.241-7.695-1.501L304 162.393V172c0 4.418-3.578 8-8 8s-8-3.582-8-8v-48c0-17.645 14.351-32 32-32z"
        ></path>
        <path
            fill="#8B8996"
            d="M344 108c14.664 0 28.523 5.629 39.328 16.176l102.57 111.977-11.797 10.805-2.771-3.027L304 289.806V292c0 4.418-3.578 8-8 8s-8-3.582-8-8V164c0-30.879 25.125-56 56-56z"
        ></path>
        <circle cx="112" cy="308" r="88" fill="#53DCFF"></circle>
        <path
            fill="#5C546A"
            d="M112 196C50.242 196 0 246.242 0 308s50.242 112 112 112 112-50.242 112-112-50.242-112-112-112zm0 192c-44.111 0-80-35.889-80-80s35.889-80 80-80 80 35.889 80 80-35.889 80-80 80z"
        ></path>
        <path
            fill="#5C546A"
            d="M192 204h128l1.23-.017C305.661 219.23 296 240.487 296 264v28h-80v-28c0-23.513-9.661-44.77-25.23-60.017"
        ></path>
        <circle cx="128" cy="292" r="32" fill="#FFF"></circle>
        <circle cx="400" cy="308" r="88" fill="#53DCFF"></circle>
        <path
            fill="#5C546A"
            d="M400 196c-61.758 0-112 50.242-112 112s50.242 112 112 112 112-50.242 112-112-50.242-112-112-112zm0 192c-44.111 0-80-35.889-80-80s35.889-80 80-80 80 35.889 80 80-35.889 80-80 80z"
        ></path>
        <circle cx="416" cy="292" r="32" fill="#FFF"></circle>
        <path fill="#8B8996" d="M192 188H320V204H192z"></path>
    </svg>
)

const App = () => {
    const [displayLanding, setDisplayLanding] = useState(true);

    return (
        <React.Fragment>
            <Layout>
                <div className="bg-indigo-50 min-h-screen">
                    <main>
                        <nav className="bg-white shadow" role="navigation">
                            <div className="container mx-auto p-3 flex items-center flex-no-wrap">
                                <div className="mr-8">
                                    <a href="/#" rel="home" onClick={(e) => {
                                        e.preventDefault();
                                        setDisplayLanding(true);
                                    }}>
                                        {logo}
                                    </a>
                                </div>
                                <div className="flex-grow flex items-center">
                                    <ul className="flex ml-auto">
                                        <li>
                                            <a 
                                                className="block px-4 py-1 p-2 lg:px-4 text-purple-600" 
                                                href="http://arifszn.github.io" 
                                                title="Author"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Avatar className="bg-blue-300" icon={<SmileOutlined  />} alt="Author" />
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                className="block px-4 py-1 p-2 lg:px-4 text-purple-600" 
                                                href="https://github.com/arifszn/find-me" 
                                                title="Source"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Avatar className="bg-blue-300" icon={<GithubOutlined />} alt="Source" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div>
                            <FadeIn state={displayLanding}>
                                {
                                    displayLanding ? (
                                        <Landing key="if" setDisplayLanding={setDisplayLanding} />
                                    ) : (
                                        <FaceFinder key="else" />
                                    )
                                }
                            </FadeIn>
                        </div>
                    </main>
                </div>
            </Layout>
        </React.Fragment>
    );
}

export default App;
