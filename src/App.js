import React from 'react';
import logo from './logo.svg';
import './App.css';
// import LoginForms from './components/LoginFormikWithYup';
// import SignupForms from './components/SignupForm';
// import MainuForms from './components/MainuForms'
import StepperX from './steppers/Stepper'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import MainContext from './components/ContextAPI/Context';
function App() {
  return (
    <div className="App" >
      <MainContext>
        <Header />
        <StepperX />
        <Footer />
        {/* <SignupForms />
        <LoginForms />
        <MainuForms /> */}
      </MainContext>
    </div>
  );
}

export default App;
