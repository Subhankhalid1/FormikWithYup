import React from 'react';
import "./Description.css";

const LeftSide = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return (
        <div className=" pt-4 px-5 col-md-3 left-main-container">
            <h6 className="text-uppercase p-2 font-bold" style={{ textAlign: "right" }}>study description</h6>
            {
                array && array.map((item, index) => {
                    return <section className="d-flex justify-content-end p-2 align-items-center">
                        <span className="text-uppercase data text-muted">Purpose of the study</span>
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