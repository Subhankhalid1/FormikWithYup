import React from 'react';
import logo from './logo.svg';
import './App.css';
// import LoginForms from './components/LoginFormikWithYup';
// import SignupForms from './components/SignupForm';
// import MainuForms from './components/MainuForms'
import StepperX from './steppers/Stepper'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {
  return (
    <div className="App" >
      <Header />
      <StepperX />
      <Footer />
      {/* <SignupForms />
      <LoginForms />
      <MainuForms /> */}

    </div>
  );
}

export default App;
