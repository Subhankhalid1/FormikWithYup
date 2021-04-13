import React, { useContext } from 'react';
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
import { GlobalContext } from "../components/ContextAPI/Context";
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

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Introduction />
    case 1:
      return <Description />
    case 2:
      return <Confirm />
    case 3:
      return <Signature />
    case 4:
      return <Thankyou />
    default:
      return 'Something went wrong.';
  }
}

export default function StepperX() {
  const classes = useStyles();
  const steps = getSteps();
  const { activeStep } = useContext(GlobalContext);

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
        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
      </div>
    </div>
  );
}