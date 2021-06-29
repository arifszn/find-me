import React, { useState } from "react";
import Landing from "./components/Landing";
import FaceFinder from "./components/faceFinder/FaceFinder";
import {
  GithubOutlined
} from '@ant-design/icons';
import { Avatar, Layout } from 'antd';
import FadeIn from "./components/FadeIn";

const App = () => {
    const [displayLanding, setDisplayLanding] = useState(false);

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
                                        <svg className="w-10 h-10 text-purple-600" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                                            <title>TailwindCSS</title>
                                            <path fill="currentColor" d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="flex-grow flex items-center">
                                    <ul className="flex ml-auto">
                                        <li>
                                            <a className="block px-4 py-1 p-2 lg:px-4 text-purple-600" href="/#" title="Source">
                                                <Avatar icon={<GithubOutlined />} alt="Source"/>
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
                                        <Landing key="if" setDisplayLanding={setDisplayLanding}/>
                                    ) : (
                                        <FaceFinder key="else"/>
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
