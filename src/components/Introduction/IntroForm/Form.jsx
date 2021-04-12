import React, { useState } from 'react';
import pic from "../Welcome/img/pic.png";
import "./Form.css";

const Form = () => {
    const [information, setInformation] = useState({
        name: '',
        email: ''
    });

    const [authName, setName] = useState(false);
    const [authEmail, setEmail] = useState(false);

    const submitData = (event) => {
        event.preventDefault();
        if (information.name === '') setName(true);
        if (information.email === '') setEmail(true);
        if (information.name !== '') setName(false);
        if (information.email !== '') setEmail(false);
    }

    return (
        <div className="px-5 main-welcome">
            <section className="d-flex justify-content-between welcome-sub-section-form">
                <div className="main-area-section-form">
                    <img style={{ maxHeight: "31rem" }} src={pic} alt="" />
                </div>
                <div className="main-area-section-form">
                    <div className="heading" style={{ textAlign: "right" }}>
                        <h4 className="form-heading">Your Information</h4>
                    </div>
                    <div className="input-field d-flex flex-column align-items-end">
                        <input onChange={(e) => setInformation({ ...information, name: e.target.value })} style={{ position: "relative", right: "0" }} type="text" className="form-control input mt-3 rounded" placeholder="Your Name" />
                        <input onChange={(e) => setInformation({ ...information, email: e.target.value })} type="email" className="form-control input mt-2" placeholder="Your Email" />

                        <div className="form-group mt-2 age d-flex justify-content-end align-items-end" style={{ width: "5rem" }}>
                            <select defaultValue="Age" className="form-control w-100 input" placeholder="Age">
                                <i className="fa fa-ceret-down"></i>
                                <option disabled>Age</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        {
                            authName &&
                            <div className="input mt-3 bg-white text-danger error-span">
                                <span>Legally Authorized Representative Name</span>
                                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            </div>
                        }
                        {
                            authEmail &&
                            <div className="input mt-2 bg-white text-danger error-span">
                                <span>Legally Authorized Representative Email </span>
                                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            </div>
                        }
                        <div className="d-flex mt-5 align-items-center justify-content-end">
                            <i className="fa fa-chevron-left"></i>
                            <a href="" style={{ marginRight: "2rem" }}>Back</a>
                            <button onClick={submitData} className="btn btn-primary rounded form-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Form;
