import React from 'react';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Nausa from './Nausa';

const Description = () => {
    return (
        <div className="d-flex py-5">
            <LeftSide />
            <RightSide />
            <Nausa />
        </div>
    )
}

export default Description;