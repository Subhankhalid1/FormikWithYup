import React, { useEffect, useState } from 'react';
import Welcome from './Welcome/Welcome';
import Form from './IntroForm/Form';
import { API, Token } from "../API/API";

const Introduction = () => {
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
                const filterData = data.items.filter(item => { return item.data.moduleType.iv === "welcome" })
                setData(filterData);
            }, [])
    });

    return (
        <div>
            <Welcome pageData={pagesData.length > 0 && pagesData[0]} />
            <Form />
        </div>
    )
}

export default Introduction;
