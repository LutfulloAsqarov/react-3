import React from "react";
import Hero from "../hero/Hero";
import Banner from "../banner/Banner";
import { BANNER__DATA } from "../../static";

const Main = () => {
    let banners = BANNER__DATA?.map((el) => <Banner key={el.id} {...el} />);
    return (
        <>
            <Hero />
            {banners}
        </>
    );
};

export default Main;
