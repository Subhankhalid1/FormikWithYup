import React from 'react';
import ConfirmLeft from "./ConfirmLeft";
import ConfirmRight from "./ConfirmRight";

const Confirm = () => {
    return (
        <div className="row py-5">
            <ConfirmLeft />
            <ConfirmRight />
        </div>
    )
}

export default Confirm;
