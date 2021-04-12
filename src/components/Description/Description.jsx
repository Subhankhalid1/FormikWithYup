import React, { useEffect, useState } from 'react';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Nausa from './Nausa';
import { API, Token } from "../API/API";

const Description = () => {
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
                const filterData = data.items.filter(item => { return item.data.sectionName.iv === "Study Description" })
                setData(filterData);
            }, [])
    });

    return (
        <div className="d-flex py-5">
            <LeftSide pageData={pagesData.length > 0 && pagesData[0]} />
            <RightSide pageDataItems={pagesData.length > 0 && pagesData[0]} />
            <Nausa pageDataItems={pagesData.length > 0 && pagesData[0]} />
        </div>
    )
}

export default Description;