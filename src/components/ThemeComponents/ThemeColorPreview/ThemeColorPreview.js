import React, { useEffect, useState } from 'react'
import "./ThemColorPreview.scss"
const ThemeColorPreview = ({primaryColor, secondaryColor}) => {
    const [mainColor, setMainColor] = useState("");
    const [secondColor, setSecondColor] = useState("");
    useEffect(() => {
        if(primaryColor || secondaryColor) {
            setMainColor(primaryColor?.value);
            setSecondColor(secondaryColor?.value);
        }
    }, [primaryColor, secondaryColor]);
    return (
        <div className="theme-component">
            <div className="theme-component__content">
                <h3 className="theme-component-header">Colour Theme Preview</h3>
                <div className="web__frame">
                    <div className={`promo`}></div>
                    <div className={`top bg-primary`} style={{ background: `${mainColor}` }}>
                        <h1 style={{ color:  `#fff` }}><span className="teamName">SUFC</span></h1>
                    </div>
                    <div className="mid">
                        <div className="header-lines dark"></div>
                        <div className="lines dark"></div>
                        <div className="lines dark"></div>
                        <div className="lines dark"></div>
                        <div className="lines dark"></div>
                        <div className="cards">
                            <div className="card">
                                <div className="header-lines dark"></div>
                                <div className="">
                                    <div className="lines dark"></div>
                                    <div className="lines dark"></div>
                                    <div className="lines dark"></div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="header-lines dark"></div>
                                <div className="">
                                    <div className="lines dark"></div>
                                    <div className="lines dark"></div>
                                    <div className="lines dark"></div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="header-lines dark"></div>
                                <div className="">
                                    <div className="lines dark"></div>
                                    <div className="lines dark"></div>
                                    <div className="lines dark"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`foot bg-secondary`} style={{display: "grid", gridTemplateColumns: 'repear(4, 1fr)',  background: `${secondColor}`}}>
                        <div className="lines light"></div>
                        <div className="lines light"></div>
                        <div className="lines light"></div>
                        <div className="lines light"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemeColorPreview
