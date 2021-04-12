import React from 'react';
import SaveDescriptionBox from "../Description/SaveDescriptionBox";

const ConfirmRight = ({ pageData: { data } }) => {
    const bulletedList = data !== undefined && data.contentGroups.iv[1].bulletedList;

    return (
        <div className="col-md-9 right-main" style={{ paddingRight: "8rem" }}>
            <section className="section-right-1">
                <h4 className="text-uppercase font-bold">{data !== undefined && data.pageHeading.iv}</h4>
                <div style={{ textAlign: "justify", paddingRight: "2rem" }}>
                    <span>{data !== undefined && data.contentGroups.iv[0].paragraphText}</span>
                </div>

                <div className="py-3" style={{ textAlign: "justify", paddingRight: "2rem" }}>
                    <span>{data !== undefined && data.contentGroups.iv[1].paragraphText}</span>
                </div>

                <ol type="a">
                    {
                        (data !== undefined && bulletedList !== null) && bulletedList.map((item, index) => {
                            return <li key={index} className="mt-2">
                                <span className="mt-2 font-500">Your samples may be stored and used for future
                                research studies
                            </span>
                                <div className="mt-2">
                                    <input style={{ marginLeft: "2rem" }} type="radio" /> Yes
                            <input style={{ marginLeft: "2rem" }} type="radio" /> No
                        </div>
                            </li>
                        })
                    }
                </ol>
            </section>
            <SaveDescriptionBox pageItemDataForButtons={data !== undefined && data} />
        </div>
    )
}

export default ConfirmRight;