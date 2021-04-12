import React from 'react';
import SaveDescriptionBox from './SaveDescriptionBox';

const RightSide = ({ pageDataItems: { data } }) => {

    return (
        <div className="col-md-6 px-3 right-main">
            <section className="section-right-1">
                <h4 className="text-uppercase font-bold">{data !== undefined && data.pageHeading.iv}</h4>
                <span>{data !== undefined && data.contentGroups.iv[0].paragraphText}</span>
                <h6 className="font-bold mt-3">{data !== undefined && data.contentGroups.iv[1].contentGroupHeading}</h6>
                <span className="mt-4 font-500">More Likely</span>
                <ul>
                    {
                        data !== undefined && data.contentGroups.iv[1].bulletedList["More Likely"]
                            .map((item, index) => {
                                return <li key={index} className="mt-2">{item}</li>
                            })
                    }
                </ul>
                <span className="mt-2 font-500">Less Likely</span>
                <ul>
                    {
                        data !== undefined && data.contentGroups.iv[1].bulletedList["Less Likely"]
                            .map((item, index) => {
                                return <li key={index} className="mt-2">{item}</li>
                            })
                    }
                </ul>
                <p >{data !== undefined && data.contentGroups.iv[2].paragraphText}</p>
                <p className="text-capitalize font-bold">{data !== undefined && data.contentGroups.iv[3].contentGroupHeading}</p>
                <p className="paragraph-padding">{data !== undefined && data.contentGroups.iv[3].paragraphText}</p>
                <p className="paragraph-padding">{data !== undefined && data.contentGroups.iv[4].paragraphText}</p>
                <p className="paragraph-padding">{data !== undefined && data.contentGroups.iv[5].paragraphText}</p>

                <div className="d-flex py-3 px-3">
                    <div className="desc-btns">
                        <span>I understand the discomforts and risks</span>
                    </div>
                    <div className="desc-btns">
                        <span>I do not understand the discomforts and risks</span>
                    </div>
                </div>
            </section>
            <SaveDescriptionBox pageItemDataForButtons={data !== undefined && data} />
        </div>
    )
}

export default RightSide;