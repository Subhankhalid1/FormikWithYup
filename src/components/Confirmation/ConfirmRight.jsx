import React from 'react';
import SaveDescriptionBox from "../Description/SaveDescriptionBox";

const ConfirmRight = () => {
    return (
        <div className="col-md-9 right-main px-5">
            <section className="section-right-1">
                <h4 className="text-uppercase font-bold">optional tisse storage for future use</h4>
                <span className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sequi,
                    praesentium provident earum similique temporibus reiciendis velit
                    sint dolorem blanditiis reprehenderit. Error expedita veniam nobis
                    perferendis molestiae quo labore sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sequi,
                    praesentium provident earum similique temporibus reiciendis velit
                    sint dolorem blanditiis reprehenderit. Error expedita veniam nobis
                    perferendis molestiae quo labore sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sequi,
                    praesentium provident earum similique temporibus reiciendis velit
                    sint dolorem blanditiis reprehenderit. Error expedita veniam nobis
                    perferendis molestiae quo labore sunt.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sequi,
                    praesentium provident earum similique temporibus reiciendis velit
                    sint dolorem blanditiis reprehenderit. Error expedita veniam nobis
                    perferendis molestiae quo labore sunt.
                </span>
                <p className="mt-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto in rem, veniam iste ipsa recusandae blanditiis
                    unde tempore perspiciatis molestiae nisi neque, atque vitae sequi sint.
                    Ut pariatur dolorem quos.
                </p>

                <ol type="a">
                    <li className="mt-2">
                        <span className="mt-2 font-500">Your samples may be stored and used for future
                        research studies
                        </span>
                        <div className="mt-2">
                            <input style={{ marginLeft: "2rem" }} type="radio" /> Yes
                            <input style={{ marginLeft: "2rem" }} type="radio" /> No
                        </div>
                    </li>
                    <li className="mt-2">
                        <span className="mt-2 font-500">Your samples may be stored and used for
                        research about other health problems
                        </span>
                        <div className="mt-2">
                            <input style={{ marginLeft: "2rem" }} type="radio" /> Yes
                            <input style={{ marginLeft: "2rem" }} type="radio" /> No
                        </div>
                    </li>
                </ol>
            </section>
            <SaveDescriptionBox />
        </div>
    )
}

export default ConfirmRight;
