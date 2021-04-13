import React from 'react';
import pic from "./img/pic.png";
import "./Welcome.css";

const Welcome = ({ changePage }) => {
    return (
        <div className="px-5 main-welcome">
            <section className="d-flex justify-content-between welcome-sub-section">
                <div className="main-area-section">
                    <img src={pic} alt="" />
                </div>
                <div className="main-area-section" style={{ textAlign: "right" }}>
                    <h2 className="welcome-heading">Welcome</h2>
                    <p className="paragraph">
                        We invite you to take part in a research study Comparison of Two-Versus<br /> Three-antibiotic
                        Therapy at Oregon Health & Science University Which<br /> Seeks to identify a more effctive means
                        of treating Pulmonary<br /> Mycobacterium Avium Complex Disease
                    </p>
                    <p className="paragraph">
                        We invite you to take part in a research study Comparison of Two-Versus Three-antibiotic
                        Therapy at Oregon Health & Science University Which Seeks to identify a more effctive means
                        of treating Pulmonary Mycobacterium Avium Complex Disease
                    </p>
                    <section>
                        <a className="a" style={{ marginRight: "2rem" }}>Incorrect Study ?</a>
                        <a className="a" onClick={() => changePage(2)} >Next</a>
                        <i className="fa fa-chevron-right" style={{ color: "blue", fontSize: "small", marginLeft: ".5rem" }} ></i>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Welcome;
