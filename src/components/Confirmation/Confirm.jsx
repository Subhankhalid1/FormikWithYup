import React, { useEffect, useState } from 'react';
import ConfirmLeft from "./ConfirmLeft";
import ConfirmRight from "./ConfirmRight";
import { API, Token } from "../API/API";

const Confirm = () => {
    const [pagesData, setData] = useState({});

    useEffect(() => {
        fetch(`${API}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Token}`
            },
        }).then(res => res.json())
            .then(data => {
                const filterData = data.items.filter(item => { return item.data.sectionName.iv === "Confirmation" })
                setData(filterData);
            }, [])
    });

    return (
        <div className="row py-5">
            <ConfirmLeft pageData={pagesData.length > 0 && pagesData[0]} />
            <ConfirmRight pageData={pagesData.length > 0 && pagesData[0]} />
        </div>
    )
}

export default Confirm;
