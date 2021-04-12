import React, { useState } from 'react';

const Nausa = ({ pageDataItems }) => {
    const heading = pageDataItems.data !== undefined && pageDataItems.data.contentGroups.iv[4].contentGroupHeading;
    const paragraphText = pageDataItems.data !== undefined && pageDataItems.data.contentGroups.iv[4].paragraphText;

    const [showContent, setContentState] = useState(false);

    return (
        <div className="col-md-3 px-4" style={{ textAlign: "right", cursor: "pointer" }}>
            <section className="d-flex align-items-center justify-content-end">
                <h3 onClick={(e) => setContentState(!showContent)} className="mx-1 mt-1">{heading !== null ? heading : "NA"}</h3>
                <i className="fa fa-share-alt fa-lg"></i>
            </section>
            <p className="text-muted">(NAW-zee-uh)</p>
            {
                showContent && <span>{paragraphText !== null && paragraphText}</span>
            }
        </div>
    )
}

export default Nausa;
