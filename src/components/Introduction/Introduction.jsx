import React, { useState } from 'react';
import Welcome from './Welcome/Welcome';
import Form from './IntroForm/Form';

const Introduction = () => {
    const [component, setComponent] = useState(1);

    const changePage = (page) => {
        setComponent(page);
    }
    return (
        <div>
            {component === 1 && <Welcome changePage={changePage} />}
            {component === 2 && <Form changePage={changePage} />}
        </div>
    )
}

export default Introduction;
