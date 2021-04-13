import React from 'react';

const DescriptionButtons = ({ openModal }) => {
    return (
        <div className="d-flex py-3" style={{ cursor: "pointer" }}>
            <section className="flex-grow-1 text-primary font-500">
                <i className="fa fa-chevron-left"></i>
                <span style={{ marginRight: "1rem" }}>Back</span>
                <span style={{ marginRight: ".5rem" }}>Next</span>
                <i className="fa fa-chevron-right"></i>
            </section>

            <section className="text-primary font-500">
                <span onClick={() => openModal()}>Save and Exit</span>
            </section>
        </div>
    )
}

export default DescriptionButtons;
