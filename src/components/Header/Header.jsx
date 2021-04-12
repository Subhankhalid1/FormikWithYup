import React from 'react';
import "./Header.css";

const Header = () => {
    // const steps = [
    //     { title: "Introduction", active: true, complete: false },
    //     { title: "Description", active: false, complete: false },
    //     { title: "Confirmation", active: false, complete: false },
    //     { title: "Signature", active: false, complete: false },
    //     { title: "Submission", active: false, complete: false },
    // ]
    return (
        <div className="bg-white shadow-sm rounded header-container">

            <section className="d-flex align-items-center dark-section text-white py-1 px-4" style={{ backgroundColor: "rgb(63 63 64)" }}>
                <div className="help">
                    <i className="fa fa-question-circle-o"></i>
                    <span className="get-help-span">Get Help</span>
                </div>
                <div className="text-center flex-grow-1">
                    <span className="mad">MED<span className="net">net</span></span>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <i className="fa fa-globe mx-2"></i>
                    <span className="right-side-text">Espanol</span>
                    <span className="mx-2 right-side-text">Log Out</span>
                    <i className="fa fa-sign-out"></i>
                </div>
            </section>

            {/* <section className=" bg-white d-flex py-2 justify-content-center align-items-center">
                {
                    steps && steps.map((item, index) => {
                        return <div key={index}>
                            <section className="px-3 d-flex justify-content-center align-items-center flex-column">
                                <div className={item.active ? "step-circle mb-1 active d-flex justify-content-center align-items-center" : "step-circle mb-1 d-flex justify-content-center align-items-center"}>
                                    <div className={item.active ? "d-block" : "d-none"} style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "white" }}></div>
                                    <span className={item.complete ? "d-block" : "d-none"}>&#10003;</span>
                                </div>
                                <span className={item.active ? "circle-text text-muted active-text" : "circle-text text-muted"}>{item.title}</span>
                            </section>
                        </div>
                    })
                }
            </section> */}

        </div>
    )
}

export default Header;