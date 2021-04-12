import React from 'react';
import pic from "../Introduction/Welcome/img/pic.png";
import "./Thankyou.css";

const Thankyou = () => {
    return (
        <div className="px-2 thnkyou-main container">
            <section className="d-flex flex-row-reverse justify-content-between thankyou-sub-section welcome-sub-section">
                <div className="main-area-section-thankyou">
                    <img src={pic} alt="" />
                </div>
                <div className="main-area-section-thankyou">
                    <img style={{ width: "10rem" }} src="https://1.bp.blogspot.com/-aN-71mHrnBE/U5J_gcfy2uI/AAAAAAAAdDo/qpyqqoZVJuw/s1600/Thank+You+Hero.png" alt="" />
                    <p className="paragraph mt-5">
                        We invite you to take part in a research study Comparison of Two-Versus Three-antibiotic
                        Therapy at Oregon Health & Science University Which Seeks to identify a more effctive means
                        of treating Pulmonary Mycobacterium Avium Complex Disease
                    </p>
                    <p className="paragraph">
                        We invite you to take part in a research study Comparison
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Thankyou
