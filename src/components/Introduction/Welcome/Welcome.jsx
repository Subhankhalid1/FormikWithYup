import React from 'react';
import pic from "./img/pic.png";
import "./Welcome.css";

const Welcome = ({ pageData: { data } }) => {
    
    return (
        <div className="px-5 main-welcome">
            <section className="d-flex justify-content-between welcome-sub-section">
                <div className="main-area-section">
                    <img src={pic} alt="" />
                </div>
                <div className="main-area-section" style={{ textAlign: "right" }}>
                    <h2 className="welcome-heading">Welcome</h2>
                    <p className="paragraph">{data !== undefined && data.contentGroups.iv[0].paragraphText}</p>
                    <p className="paragraph">{data !== undefined && data.contentGroups.iv[1].paragraphText}</p>
                    <section>
                        <a href="" style={{ marginRight: "2rem" }}>Incorrect Study ?</a>
                        <a href="">Next</a>
                        <i className="fa fa-chevron-right" style={{ color: "blue", fontSize: "small", marginLeft: ".5rem" }} ></i>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Welcome;
