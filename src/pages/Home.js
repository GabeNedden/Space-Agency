import React from 'react';

function Home() {
    return (
        <div className="home">
        <header className="primary-header flex">
            <div>
                <img src="./assets/shared/logo.svg" alt="space tourism logo" className="logo" />
            </div>
            <nav>
                <ul className="primary-navigation underline-indicators flex">
                    <li className="active" /><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="index.html"><span>00</span>Home</a>
                    <li /><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="destination.html"><span>01</span>Destination</a>
                    <li /><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="crew.html"><span>02</span>Crew</a>
                    <li /><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="technology.html"><span>03</span>Technology</a>
                </ul>
            </nav>
        </header>

        <div className="grid-container grid-container--home">
            <div>
                <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
                <span className="d-block fs-900 ff-serif text-white">Space</span></h1>
                
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience! </p>
            </div>
            <div>
                <a href="/" className="large-button uppercase ff-serif text-dark bg-white">Explore</a>
            </div>
        </div>
    </div>
    );
};

export default Home;