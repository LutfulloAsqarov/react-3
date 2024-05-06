import React from "react";
import "./Hero.scss";

const Hero = () => {
    return (
        <div id="hero">
            <div className="hero container">
                <h4 className="hero__subtitle">Save $1200</h4>
                <h1 className="hero__title">
                    Cool deals on <br /> cooler fridges
                </h1>
                <p className="hero__desc">
                    Get up to $1,200 off select Bespoke Refrigerators. Plus,
                    enjoy free installation and 2 years of Samsung Care+ for $1.
                    <sup>§</sup>
                </p>
                <button className="hero__btn">Shop now</button>
            </div>
        </div>
    );
};

export default Hero;
