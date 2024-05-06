import React from "react";
import "./Banner.scss";

const Banner = ({
    name,
    items,
    title,
    desc,
    link,
    url,
    textColor,
    btnColor,
}) => {
    console.log(items);
    let itemsElements = items?.map((el) => (
        <li key={el} className="banner__list__item">
            <a href="#">{el}</a>
        </li>
    ));
    return (
        <section
            style={{
                background: `url(${url})no-repeat center/cover`,
                color: textColor,
            }}
            className="banner"
        >
            <div className="banner__top">
                <h2 className="banner__name">{name}</h2>
                <ul className="banner__list">{itemsElements}</ul>
            </div>
            <div className="banner__bottom">
                <h2 className="banner__title">{title}</h2>
                <p className="banner__desc">{desc}</p>
                <button
                    style={{ color: btnColor, background: textColor }}
                    className="banner__btn"
                >
                    {link}
                </button>
            </div>
        </section>
    );
};

export default Banner;
