import React, { createContext } from 'react';

export const GlobalContext = createContext();

const MainContext = ({ children }) => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };


    return <>
        <GlobalContext.Provider
            value={{ activeStep, handleNext, handleBack }}
        >
            {children}
        </GlobalContext.Provider>
    </>
}

export default MainContext;