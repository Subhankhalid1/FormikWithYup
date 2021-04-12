import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import LoginForms from '../components/LoginFormikWithYup'
// import SignupForms from '../components/SignupForm'
// import MainuForms from '../components/MainuForms.js'
import Introduction from '../components/Introduction/Introduction.jsx'
import Description from '../components/Description/Description';
import Confirm from '../components/Confirmation/Confirm';
import Thankyou from '../components/ThankYou/Thankyou';
import Signature from '../components/Signature/Signature.jsx';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',


  },
  backButton: {
    marginRight: theme.spacing(0),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Introduction', 'Description', 'Conformation', 'Signature', 'Submission'];
}

function getStepContent(stepIndex, handleNext) {
  switch (stepIndex) {
    case 0:
      return <Introduction handleNext={handleNext} />
    case 1:
      return <Description handleNext={handleNext} />
    case 2:
      return <Confirm handleNext={handleNext} />
    case 3:
      return <Signature handleNext={handleNext} />
    case 4:
      return <Thankyou handleNext={handleNext} />
    default:
      return 'Something went wrong.';
  }
}

export default function StepperX() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    console.log("Clicking Next")
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleBack = () => {
    setActiveStep(activeStep-1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel >
        {steps.map((label) => (
          <Step >
            <StepLabel ><div key={label} >{label}</div></StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep, handleNext)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}