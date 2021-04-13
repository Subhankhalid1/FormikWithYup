import React from 'react';
import SaveDescriptionBox from './SaveDescriptionBox';

const RightSide = () => {
    return (
        <div className="col-md-7 right-main">
            <section className="section-right-1">
                <h4 className="text-uppercase font-bold">discomforts and risks</h4>
                <span className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sequi,
                    praesentium provident earum similique temporibus reiciendis velit
                    sint dolorem blanditiis reprehenderit. Error expedita veniam nobis
                    perferendis molestiae quo labore sunt.
                </span>
                <h6 className="font-bold mt-3">Drug XYZ Side Effects</h6>
                <span className="mt-2 font-500">More Likely</span>
                <ul>
                    <li className="mt-2">Difficult Sleeping</li>
                    <li className="mt-2">Difficult Sleeping</li>
                    <li className="mt-2">Difficult Sleeping</li>
                </ul>
                <span className="mt-2 font-500">Less Likely</span>
                <ul>
                    <li className="mt-2">Difficult Sleeping</li>
                    <li className="mt-2">Difficult Sleeping</li>
                </ul>
                <p className="text-capitalize font-bold">Other possible risks associated with participating in this study</p>
                <span className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus nam reiciendis ratione voluptates ipsa praesentium,
                    quas commodi quam totam veritatis maxime, nemo error vitae laboriosam
                iusto laborum ab deleniti nisi!<br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus nam reiciendis ratione voluptates ipsa praesentium,
                quas commodi quam totam veritatis maxime, nemo error vitae laboriosam
                iusto laborum ab deleniti nisi!<br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus nam reiciendis ratione voluptates ipsa praesentium,
                quas commodi quam totam veritatis maxime, nemo error vitae laboriosam
                iusto laborum ab deleniti nisi!
                </span>
                <div className="d-flex py-3">
                    <div className="desc-btns">
                        <span>I understand the discomforts and risks</span>
                    </div>
                    <div className="desc-btns">
                        <span>I do not understand the discomforts and risks</span>
                    </div>
                </div>
            </section>
            <SaveDescriptionBox/>
        </div>
    )
}

export default RightSide;