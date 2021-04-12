import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container d-flex text-white py-4 px-5">

            <section className="flex-box">
                <h6 className="text-uppercase font-weight-bold">Know Your Rights</h6>
                <div style={{ textAlign: "justify" }}>
                    <p className="p-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus quas omnis
                    magni! At, velit soluta quibusdam dolorem aspernatur
                    tempora error recusandae iure ratione atque eaque
                </p>
                </div>
            </section>

            <section className="flex-box">
                <h6 className="text-uppercase font-weight-bold">Contact Information</h6>
                <section className="d-flex">
                    <div className=" flex-fill name-contact">
                        <p className="p-content">Pricipal Investigator:</p>
                        <p className="p-content">General Questions:</p>
                        <p className="p-content">Subject Protection Office:</p>
                        <p className="p-content">Doctor On Call:</p>
                        <p className="p-content">IRB Office:</p>
                    </div>
                    <div className="flex-fill">
                        <p className="p-content">503-555-1211</p>
                        <p className="p-content">503-555-1212</p>
                        <p className="p-content">503-555-1213</p>
                        <p className="p-content">503-555-1214</p>
                        <p className="p-content">503-555-1215</p>
                    </div>
                </section>
            </section>

            <section className="flex-box" style={{ textAlign: "right" }}>
                <h6 className="text-uppercase font-weight-bold">Study Information</h6>
                <p className="p-content">Oregon Health & Science University</p>
                <p className="p-content">Comparison of Two-versus Three-antibiotic Therapy for Pulmonary Mycobaclerium Avium Complex Disease</p>
                <p className="p-content">Principal Investigator:Kevin Winthrop, M.D, M.P.H</p>
                <p className="p-content">IRB # 67329988</p>
            </section>

        </div>

    )
}

export default Footer;
