import React from 'react';

const ConfirmLeft = ({ pageData: { data } }) => {
    const sectionName = data !== undefined && data.sectionName.iv;
    const array = [1];

    return (
        <div className="pt-4 px-5 col-md-3 left-main-container">
            <h6 className="text-uppercase p-2 font-bold" style={{ textAlign: "right" }}>{sectionName}</h6>
            {
                array && array.map((item, index) => {
                    return <section key={index} className="d-flex justify-content-end p-2 align-items-center">
                        <span className="text-uppercase data text-muted">tissues storage</span>
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

export default ConfirmLeft;
