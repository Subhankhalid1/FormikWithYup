import React from 'react';
import "./Description.css";

const LeftSide = ({ pageData: { data } }) => {
    const sectionName = data !== undefined && data.sectionName.iv;
    const array = [
        "Purpose of the study", "Time duration", "procedures", "time duration",
        "discomforts and risks", "potential benifits", "confidentiality", "costs",
        "compensation", "research funding", "signature and consents"
    ];
    return (
        <div className="pt-4 px-4 col-md-3 left-main-container">
            <h6 className="text-uppercase p-2 font-bold" style={{ textAlign: "right" }}>{sectionName !== null && sectionName}</h6>
            {
                array && array.map((item, index) => {
                    return <section key={index} className="d-flex justify-content-end p-2 align-items-center">
                        <span className="text-uppercase data text-muted">{item}</span>
                        <section className="circle-parent">
                            <div className="circle-section"></div>
                            <div className={index !== array.length - 1 && "divider-line"}></div>
                        </section>
                    </section>
                })
            }
        </div>
    )
}

export default LeftSide;